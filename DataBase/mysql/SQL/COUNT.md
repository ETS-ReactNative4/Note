## COUNT(*)
COUNT(*) 函数返回表中的记录数：

SELECT COUNT(*) FROM table_name;

## count(1)
count(1)的作用，就是统计在分组中，每一组对应的行数或项数。效率和作用和count(*)相同。
Count（）中的表达式是否为NULL，如果为NULL则不计数，而非NULL则会计数。
也就是说count(1) 和count（‘anything’）的效果是一样的。

## count SUM DISTINCT
```sql
SELECT salesman_no, salesman_name, total_received_fee,
count(3) orderCount,
SUM(total_fee) totalReceivedFee,
count(DISTINCT student_id) studentCount
FROM `crm_order`
GROUP BY salesman_no
HAVING total_received_fee = 0;
```

## 添加限制条件
```sql
mysql> select * from sales;
+----+------+-------+----------+---------------------+
| id | item | price | quantity | create_at           |
+----+------+-------+----------+---------------------+
|  1 | abc  |    10 |        2 | 2017-01-16 22:42:35 |
|  2 | jkl  |    20 |        1 | 2017-01-16 22:42:35 |
|  3 | xyz  |   100 |       10 | 2017-01-16 22:42:35 |
|  4 | xyz  |    30 |       20 | 2017-01-16 22:42:35 |
|  5 | abc  |    50 |       10 | 2017-01-16 22:42:35 |
|  6 | def  |   101 |        5 | 2017-01-16 22:42:35 |
|  7 | def  |   104 |       10 | 2017-01-16 22:42:35 |
|  8 | abc  |   151 |        5 | 2017-01-16 22:42:35 |
+----+------+-------+----------+---------------------+
8 rows in set (0.00 sec)

mysql> select count(*) total from sales where item='xyz';
+-------+
| total |
+-------+
|     2 |
+-------+
1 row in set (0.00 sec)
```