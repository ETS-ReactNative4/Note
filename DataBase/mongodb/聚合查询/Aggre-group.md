## $group (aggregation)¶
### **例1 - 单纯使用$group计数文档 有点大材小用**
```sql
db.sales.insertMany([
  { "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("2"), "date" : ISODate("2014-03-01T08:00:00Z") },
  { "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : NumberInt("1"), "date" : ISODate("2014-03-01T09:00:00Z") },
  { "_id" : 3, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : NumberInt( "10"), "date" : ISODate("2014-03-15T09:00:00Z") },
  { "_id" : 4, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" :  NumberInt("20") , "date" : ISODate("2014-04-04T11:21:39.736Z") },
  { "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("10") , "date" : ISODate("2014-04-04T21:23:13.331Z") },
  { "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("5" ) , "date" : ISODate("2015-06-04T05:08:13Z") },
  { "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("10") , "date" : ISODate("2015-09-10T08:43:00Z") },
  { "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("5" ) , "date" : ISODate("2016-02-06T20:20:13Z") },
])

db.sales.aggregate( [
  {
    $group: {
       _id: null,           //  specifies a group _id of null，统计所有文档
       count: { $sum: 1 }
    }
  }
] )

{ "_id" : null, "count" : 8 }

This aggregation operation is equivalent to the following SQL statement:

SELECT COUNT(*) AS count FROM sales

使用 db.sales.count() 就可实现计数
=> 8
```

### 根据文档的某个字段group 累计其他字段的值 => 有几种分组字段，就返回多少条
```sql
db.order.aggregate(
  [
      {
        $group: {
          _id:'$studentId',
          totalPaidFee:{$sum:'$totalPaidFee'},
          totalReceivedFee:{$sum:'$totalReceivedFee'}
        }
      }
  ]
)
```
文档按studentId分组, 相同的studentId文档把totalPaidFee，totalReceivedFee字段累加返回为 totalPaidFee， totalReceivedFee

### **例2 对文档原有字段进行拆分重组为新字段 并分组 本例实质是按date分组**
```sql
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-03-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-03-01T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-03-15T09:00:00Z") }
{ "_id" : 4, "item" : "xyz", "price" : 5, "quantity" : 20, "date" : ISODate("2014-04-04T11:21:39.736Z") }
{ "_id" : 5, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-04-04T21:23:13.331Z") }

Group by Month, Day, and Year

db.sales.aggregate(
   [
      {
        $group : {
           _id : { month: { $month: "$date" }, day: { $dayOfMonth: "$date" }, year: { $year: "$date" } },
           totalPrice: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           averageQuantity: { $avg: "$quantity" },
           count: { $sum: 1 }    // 相同文档类型 按1累加 count: { $sum: 2 } 结果数量就会翻倍
        }
      }
   ]
)

{ "_id" : { "month" : 3, "day" : 15, "year" : 2014 }, "totalPrice" : 50, "averageQuantity" : 10, "count" : 1 }
{ "_id" : { "month" : 4, "day" : 4, "year" : 2014 }, "totalPrice" : 200, "averageQuantity" : 15, "count" : 2 }
{ "_id" : { "month" : 3, "day" : 1, "year" : 2014 }, "totalPrice" : 40, "averageQuantity" : 1.5, "count" : 2 }
```

### 按嵌套文档字段分组
```js
db.serveRecords.aggregate([
    { $group: {_id: '$headteacher.no',  count: { $sum: 1 }} }
])
```

### allowDiskUse
分组的数据量过大会导致报错
{ MongoError: Exceeded memory limit for $group, but didn't allow external sort. Pass allowDiskUse:true to opt in.

```
db.flowlog.aggregate([{$group:{_id:"$_id"}}], {allowDiskUse: true})
```

### $addToSet

### $first $last

### $push

### $cond


### group stage 的文档数过多超出限制 
1. 使用 {allowDiskUse: true}
2. 考虑优化缩小范围
```
db.userstudydetail.aggregate([
  { $match: {type: 'studyProgress', date: {$gte: ISODate('2020-12-02T16:00:00.000Z'), $lte: ISODate('2020-12-03T15:59:59.999Z')}}},
  { $group: {_id: '$courseId', studyProgressAvg: { $avg: 'progressStats' }, students: { $push: "$$ROOT" }}}
],{allowDiskUse: true})

assert: command failed: {
	"ok" : 0,
	"errmsg" : "Exceeded memory limit for $group, but didn't allow external sort. Pass allowDiskUse:true to opt in.",
	"code" : 16945,
	"codeName" : "Location16945"
} : aggregate failed

Error: getMore command failed: {
	"ok" : 0,
	"errmsg" : "BSONObj size: 43065860 (0x2912204) is invalid. Size must be between 0 and 16793600(16MB)",
	"code" : 10334,
	"codeName" : "Location10334"
}

db.serveRecords.aggregate([
  { $match: query },
  { $group: { _id: '$productId', studentCount: { $sum: 1 }}}
])
```