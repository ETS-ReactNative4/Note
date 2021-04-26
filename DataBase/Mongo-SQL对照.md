[Glossary](https://docs.mongodb.com/master/reference/glossary/#term-cursor)

## admin database
A privileged database. Users must have access to the admin database to run certain administrative commands. For a list of administrative commands, see Administration Commands.

## aggregation
Any of a variety of operations that reduces and summarizes large sets of data. MongoDB’s aggregate() and mapReduce() methods are two examples of aggregation operations. For more information, see Aggregation.

## B-tree
A data structure commonly used by database management systems to store indexes. MongoDB uses B-trees for its indexes.

## BSON
A serialization format used to store documents and make remote procedure calls in MongoDB. “BSON” is a portmanteau of the words “binary” and “JSON”. Think of BSON as a binary representation of JSON (JavaScript Object Notation) documents.

用于RPC的序列化格式

## collection
A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. 

## cursor
A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity. See Iterate a Cursor in the mongo Shell.

### [Iterate a Cursor in the mongo Shell](https://docs.mongodb.com/master/tutorial/iterate-a-cursor/#read-operations-cursors)
```
var myCursor = db.users.find( { type: 2 } );

while (myCursor.hasNext()) {
   print(tojson(myCursor.next()));
}
```


## 术语概念对照
|  MongoDB   | 关系型数据库  |
|  ----      |  ----       |
| Datebase   | Datebase    |
| Collection | Table       |
| Document   | Record/Row  |
| Field      | Column      |
| Embedded Documents | Table Join       |


## [操作语句对照](https://www.w3schools.com/sql/default.asp)
### 常用命令
```sql
1. 🔗连接
# mongodb
mongo --port 27088

# mysql
mysql -u root -p

2. 数据库版本
# mongodb-连接后自动输出
[root@vultr ~]# mongo --port 27088
MongoDB shell version v4.0.13
MongoDB server version: 4.0.13

# mysql
mysql> status;
--------------
mysql  Ver 8.0.20 for Linux on x86_64 (MySQL Community Server - GPL)

Connection id:		331
Current database:
Current user:		root@localhost

Threads: 2  Questions: 7  Slow queries: 0  Opens: 115  Flush tables: 3  Open tables: 40  Queries per second avg: 0.000

3. 查看库
# mongodb
show dbs
> show dbs
AggreDB    0.000GB
NextJoyDB  0.000GB
RECOVERY   0.000GB
ZooDB      0.000GB
admin      0.000GB
config     0.000GB
koa-test   0.002GB
local      0.000GB

# mysql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| join_test          |
| mysql              |
| next_joy           |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.18 sec)

4. 创建库
# mongodb
> use compare
switched to db compare

# mysql
mysql> use compare
ERROR 1049 (42000): Unknown database 'compare'

## [需要先创建-待完善](./mysql/DDL/CREATE_DB.md)
mysql> create database compare;
Query OK, 1 row affected (0.20 sec)

5. 创建表
# mongodb - 插入数据的时候就自动创建collection
> db
compare

> db.customers.insertMany([
   {name:"Alfreds Futterkiste",address:"Obere Str. 57",city:"Berlin",country:"Germany"},
   {name:"Antonio",address:"Mataderos 2312",city:"London",country:"UK"},
   {name:"Eastern",address:"Mataderos 23889",city:"Sevilla",country:"Spain"}
])
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("608625bd6892a719be946daf"),
		ObjectId("608625bd6892a719be946db0"),
		ObjectId("608625bd6892a719be946db1")
	]
}

> show tables;
customers


# mysql
mysql> use compare;
Database changed

## 需要先创建表
create table if not exists `customers` (
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `address` VARCHAR(100) NOT NULL,
   `city` VARCHAR(40) NOT NULL,
   `country` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
Query OK, 0 rows affected, 1 warning (0.36 sec)

mysql> show tables;
+-------------------+
| Tables_in_compare |
+-------------------+
| customers         |
+-------------------+
1 row in set (0.20 sec)

mysql> desc customers;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int unsigned | NO   | PRI | NULL    | auto_increment |
| name    | varchar(100) | NO   |     | NULL    |                |
| address | varchar(100) | NO   |     | NULL    |                |
| city    | varchar(40)  | NO   |     | NULL    |                |
| country | varchar(40)  | NO   |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
5 rows in set (0.28 sec)

## [插入数据](./mysql/SQL/CRUD/INSERT_INTO.md)
insert into customers (name, address, city, country)
values  ("Alfreds Futterkiste","Obere Str. 57","Berlin","Germany"),
        ("Antonio","Mataderos 2312","London","UK"),
        ("Eastern","Mataderos 23889","Sevilla","Spain");
Query OK, 3 rows affected (0.28 sec)
Records: 3  Duplicates: 0  Warnings: 0

6. 查询数据
# mongodb
> db.customers.find()
{ "_id" : ObjectId("608625bd6892a719be946daf"), "name" : "Alfreds Futterkiste", "address" : "Obere Str. 57", "city" : "Berlin", "country" : "Germany" }
{ "_id" : ObjectId("608625bd6892a719be946db0"), "name" : "Antonio", "address" : "Mataderos 2312", "city" : "London", "country" : "UK" }
{ "_id" : ObjectId("608625bd6892a719be946db1"), "name" : "Eastern", "address" : "Mataderos 23889", "city" : "Sevilla", "country" : "Spain" }

# mysql
mysql> select * from customers;
+----+---------------------+-----------------+---------+---------+
| id | name                | address         | city    | country |
+----+---------------------+-----------------+---------+---------+
|  1 | Alfreds Futterkiste | Obere Str. 57   | Berlin  | Germany |
|  2 | Antonio             | Mataderos 2312  | London  | UK      |
|  3 | Eastern             | Mataderos 23889 | Sevilla | Spain   |
+----+---------------------+-----------------+---------+---------+
3 rows in set (0.15 sec)

## 控制返回字段
# mongodb
> db.customers.find({},{_id:0, name:1})
{ "name" : "Alfreds Futterkiste" }
{ "name" : "Antonio" }
{ "name" : "Eastern" }

# mysql
mysql> select name from customers;
+---------------------+
| name                |
+---------------------+
| Alfreds Futterkiste |
| Antonio             |
| Eastern             |
+---------------------+
3 rows in set (0.17 sec)

## 设置 skip limit
# mongodb
> db.customers.find().skip(1).limit(1)
{ "_id" : ObjectId("608625bd6892a719be946db0"), "name" : "Antonio", "address" : "Mataderos 2312", "city" : "London", "country" : "UK" }

# mysql
mysql> select * from customers limit 1 offset 1;
+----+---------+----------------+--------+---------+
| id | name    | address        | city   | country |
+----+---------+----------------+--------+---------+
|  2 | Antonio | Mataderos 2312 | London | UK      |
+----+---------+----------------+--------+---------+
1 row in set (0.18 sec)

## 设置distinct - 需要先插入相同country的数据
> db.customers.insert({name: "Jack",address:"Opps",city: "Beijing",country:"UK"})
WriteResult({ "nInserted" : 1 })

mysql> insert into customers (name,address,city,country) values ("Jack","Opps","Beijing","UK");
Query OK, 1 row affected (0.20 sec)

# mongodb
> db.customers.distinct("country")
[ "Germany", "UK", "Spain" ]

# mysql
mysql> select distinct country from customers;
+---------+
| country |
+---------+
| Germany |
| UK      |
| Spain   |
+---------+
3 rows in set (0.24 sec)


7. 查询一下总数量 count
# mongodb
> db.customers.count()
4

# mysql
mysql> select count(*) as count from customers;
+-------+
| count |
+-------+
|     4 |
+-------+
1 row in set (0.25 sec)

mysql> select count(distinct country) as distinctCountryCount from customers;
+----------------------+
| distinctCountryCount |
+----------------------+
|                    3 |
+----------------------+
1 row in set (0.09 sec)

# 或者使用子查询
mysql> select count(*) count from (select distinct country from customers);
ERROR 1248 (42000): Every derived table must have its own alias

mysql> select count(*) as count from (select distinct country from customers) as T;
+-------+
| count |
+-------+
|     3 |
+-------+
1 row in set (0.22 sec)


8. group by 分组
# mongodb
> db.customers.aggregate([
   {
      $group:{_id:"$country",userCount:{$sum:1}}
   }
])
{ "_id" : "Spain", "userCount" : 1 }
{ "_id" : "UK", "userCount" : 2 }
{ "_id" : "Germany", "userCount" : 1 }

# mysql
mysql> select country from customers group by country;
+---------+
| country |
+---------+
| Germany |
| UK      |
| Spain   |
+---------+
3 rows in set (0.20 sec)

mysql> select country,count(id) as userCount from customers group by country;
+---------+-----------+
| country | userCount |
+---------+-----------+
| Germany |         1 |
| UK      |         2 |
| Spain   |         1 |
+---------+-----------+
3 rows in set (0.16 sec)


9. order by - sort 排序

```


### 查询操作

### 插入操作

### 更新操作

### 删除操作


[SQL to MongoDB Mapping Chart](https://docs.mongodb.com/manual/reference/sql-comparison/)

### $in
```sql
用法：select * from where field in (value1,value2,value3,…)
```

### $inc
```sql
UPDATE member_profile 
    SET points = points + 1
    WHERE user_id = '".$userid."'

```

### $sort
1	Sort ascending.
-1	Sort descending.
   
### mysql mongodb 删除一个table/collection 中的所有row/document
mysql vs mongodb
```sql
DELETE FROM table1 WHERE 1;  /**可以在DELETE语句中加上永真的WHERE，如WHERE 1或WHERE true**/

db.table1.deleteMany({})
```

### 模糊查询
1. [mysql](./mysql/SQL/1.2.LIKE.md)：like操作符 
   ```sql
   SELECT * FROM Websites WHERE name LIKE 'G%';
   ```
2. [mongodb](./mongodb/简单查询和操作符/Operators/regex-text-expr.md)：$regex 
   ```sql
   collection.find({name: { $regex: `${name}`, $options: 'i' }})
   ```


> 装逼精粹
## 什么是MongoDB
MongoDB是一个文档数据库，提供好的性能，领先的非关系型数据库。采用BSON存储文档数据。
BSON（）是一种类json的一种二进制形式的存储格式，简称Binary JSON. 相对于json多了date类型和二进制数组。

## .MongoDB的优势有哪些
- 没有复杂的连接
- 深度查询能力,MongoDB支持动态查询。
- 容易扩展
- 不需要转化/映射应用对象到数据库对象
- 使用内部内存作为存储工作区,以便更快的存取数据。

## 在哪些场景使用MongoDB
- 大数据
- 内容管理系统
- 移动端Apps
- 数据管理

## 11 monogodb 中的分片什么意思
　　分片是将数据水平切分到不同的物理节点。当应用数据越来越大的时候，数据量也会越来越大。当数据量增长
时，单台机器有可能无法存储数据或可接受的读取写入吞吐量。利用分片技术可以添加更多的机器来应对数据量增加
以及读写操作的要求。

## 12 为什么要在MongoDB中使用分析器
　　mongodb中包括了一个可以显示数据库中每个操作性能特点的数据库分析器.通过这个分析器你可以找到比预期慢
的查询(或写操作);利用这一信息,比如,可以确定是否需要添加索引.


## 14 MongoDB支持哪些数据类型
String
Integer
Double
Boolean
Object
Object ID
Arrays
Min/Max Keys
Datetime
Code
Regular Expression等

## 18"ObjectID"有哪些部分组成
一共有四部分组成:时间戳、客户端ID、客户进程ID、三个字节的增量计数器

## 22用什么方法可以格式化输出结果
db.collectionName.find().pretty()

## 28 在MongoDB中什么是副本集（避免单点故障）
在MongoDB中副本集由一组MongoDB实例组成，包括一个主节点多个次节点，MongoDB客户端的所有数据都
写入主节点(Primary),副节点从主节点同步写入数据，以保持所有复制集内存储相同的数据，提高数据可用性。

## 30 MongoDB支持存储过程吗？如果支持的话，怎么用？
MongoDB支持存储过程，它是javascript写的，保存在db.system.js表中。

## 31如何理解MongoDB中的GridFS机制，MongoDB为何使用GridFS来存储文件？
　　GridFS是一种将大型文件存储在MongoDB中的文件规范。使用GridFS可以将大文件分隔成多个小文档存放，这样我们能够有效的保存大文档，而且解决了BSON对象有限制的问题。

## 34 MongoDB在A:{B,C}上建立索引，查询A:{B,C}和A:{C,B}都会使用索引吗？
　不会，只会在A:{B,C}上使用索引。

## 38 更新操作立刻fsync到磁盘?
　　不会,磁盘写操作默认是延迟执行的.写操作可能在两三秒(默认在60秒内)后到达磁盘.例如,如果一秒内数据库收到一千个对一个对象递增的操作,仅刷新磁盘一次.

## 39 如何执行事务/加锁?
　　mongodb没有使用传统的锁或者复杂的带回滚的事务,因为它设计的宗旨是轻量,快速以及可预计的高性能.可以把它类比成mysql mylsam的自动提交模式.通过精简对事务的支持,性能得到了提升,特别是在一个可能会穿过多个服务器的系统里.

## 41 什么是master或primary?
　　它是当前备份集群(replica set)中负责处理所有写入操作的主要节点/成员.在一个备份集群中,当失效备援(failover)事件发生时,一个另外的成员会变成primary.

## 42 我应该启动一个集群分片(sharded)还是一个非集群分片的 mongodb 环境?
　　(数据量大用集群分片,数据量小用非集群)

　　为开发便捷起见,我们建议以非集群分片(unsharded)方式开始一个 mongodb 环境,除非一台服务器不足以存放你的初始数据集.从非集群分片升级到集群分片(sharding)是无缝的,所以在你的数据集还不是很大的时候没必要考虑集群分片(sharding).
