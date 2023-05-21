 -- HW-1


 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO DB_hw_57(Product, price, rating, category, brand) VALUES('MacBook Air,','1300','4.72','laptops', 'Apple');
Query OK, 1 row affected (0.0077 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO DB_hw_57(Product, price, rating, category, brand) VALUES('iPhone 14','1549','4.69','smsrtphones', 'Apple');
Query OK, 1 row affected (0.0077 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO DB_hw_57(Product, price, rating, category, brand) VALUES('iPhone 13,','1349','4.69','smsrtphones', 'Apple');
Query OK, 1 row affected (0.0090 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO DB_hw_57(Product, price, rating, category, brand) VALUES('MacBook','950','4.69','laptops', 'Apple');
Query OK, 1 row affected (0.0082 sec)
 
MySQL  localhost:33060+ ssl  DB_hw_57  SQL > CREATE TABLE customer (id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(128), ProductID MEDIUMINT UNSIGNED);
Query OK, 0 rows affected (0.0696 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Mike','9');
Query OK, 1 row affected (0.0123 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Bob','5');
Query OK, 1 row affected (0.0079 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Nikola','11');
Query OK, 1 row affected (0.0073 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Mike','14');
Query OK, 1 row affected (0.0025 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Nikola','3');
Query OK, 1 row affected (0.0074 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Mike','8');
Query OK, 1 row affected (0.0079 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > INSERT INTO customer(name, ProductID) VALUES('Mike','9');
Query OK, 1 row affected (0.0022 sec)
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > SELECT * FROM customer;
+----+--------+-----------+
| id | name   | ProductID |
+----+--------+-----------+
|  1 | Mike   |         9 |
|  2 | Bob    |         5 |
|  3 | Nikola |        11 |
|  4 | Mike   |        14 |
|  5 | Nikola |         3 |
|  6 | Mike   |         8 |
|  7 | Mike   |         9 |
+----+--------+-----------+


7 rows in set (0.0010 sec)

 -- HW-2


MySQL  localhost:33060+ ssl  DB_hw_57  SQL > SELECT category, COUNT(Product) FROM DB_hw_57 GROUP BY category;
+-------------+----------------+
| category    | COUNT(Product) |
+-------------+----------------+
| smsrtphones |              9 |
| leptops     |              6 |
+-------------+----------------+
2 rows in set (0.0011 sec)

 -- HW-3


 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > SELECT category, COUNT(DISTINCT brand) AS unique_brands FROM DB_hw_57 GROUP BY category;
+-------------+---------------+
| category    | unique_brands |
+-------------+---------------+
| leptops     |             5 |
| smsrtphones |             4 |
+-------------+---------------+
2 rows in set (0.0083 sec)

 -- HW-4


 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > SELECT name, COUNT(*) AS purchase_count FROM customer GROUP BY name;
+--------+----------------+
| name   | purchase_count |
+--------+----------------+
| Mike   |              4 |
| Bob    |              1 |
| Nikola |              2 |
+--------+----------------+
3 rows in set (0.0013 sec)

 -- HW-5


 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > SELECT name, COUNT(*) AS Quantity FROM customer GROUP BY name ORDER BY Quantity DESC;
+--------+----------+
| name   | Quantity |
+--------+----------+
| Mike   |        4 |
| Nikola |        2 |
| Bob    |        1 |
+--------+----------+
3 rows in set (0.0012 sec)

 -- HW-6

 
 MySQL  localhost:33060+ ssl  DB_hw_57  SQL > SELECT category, Product, price FROM customer JOIN DB_hw_57 ON customer.ProductID=DB_hw_57.id ORDER BY category, price DESC;
+-------------+----------------------------+-------+
| category    | Product                    | price |
+-------------+----------------------------+-------+
| leptops     | Microsoft Surface Laptop 4 |  1499 |
| leptops     | Infinix INBOOK             |  1099 |
| leptops     | Infinix INBOOK             |  1099 |
| smsrtphones | iPhone 13,                 |  1349 |
| smsrtphones | Samsyng Universe 9         |  1249 |
| smsrtphones | iPhone 12                  |  1100 |
| smsrtphones | Huawei P30                 |   499 |
+-------------+----------------------------+-------+
7 rows in set (0.0016 sec)