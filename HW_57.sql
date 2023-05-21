mysql> CREATE DATABASE DB_hw_57;
mysql> Use DB_hw_57;
mysql> CREATE TABLE DB_hw_57 (Product VARCHAR(128),Price DECIMAL(5,0),rating DECIMAL(3,2), category VARCHAR(16), brand VARCHAR(17));
mysql> ALTER TABLE DB_hw_57 ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY;
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('iPhone 9','549','4.69','smsrtphones','Apple');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('iPhone X','899','4.44','smsrtphones','Apple');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Samsyng Universe 9','1249','4.09','smsrtphones','Samsung');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('OPPO F19','280','4.3','smsrtphones','OPPO');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Huawei P30','499','4.09','smsrtphones','Huawei');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('MacBook Pro','1149','4.57','leptops','Apple');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Samsyng Galaxy Book','1499','4.25','leptops','Samsung');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Microsoft Surface Laptop 4','1499','4.43','leptops','Microsoft Surface');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Infinix INBOOK','1099','4.43','leptops','Infinix');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('HP Pavilion 15-DK1056WM','1099','4.54','leptops','HP Pavilion');
mysql> SELECT * FROM DB_hw_57;
+----------------------------+-------+--------+-------------+-------------------+----+
| Product                    | Price | rating | category    | brand             | id |
+----------------------------+-------+--------+-------------+-------------------+----+
| iPhone 9                   |   549 |   4.69 | smsrtphones | Apple             |  1 |
| iPhone X                   |   899 |   4.44 | smsrtphones | Apple             |  2 |
| Samsyng Universe 9         |  1249 |   4.09 | smsrtphones | Samsung           |  3 |
| OPPO F19                   |   280 |   4.30 | smsrtphones | OPPO              |  4 |
| Huawei P30                 |   499 |   4.09 | smsrtphones | Huawei            |  5 |
| MacBook Pro                |  1149 |   4.57 | leptops     | Apple             |  6 |
| Samsyng Galaxy Book        |  1499 |   4.25 | leptops     | Samsung           |  7 |
| Microsoft Surface Laptop 4 |  1499 |   4.43 | leptops     | Microsoft Surface |  8 |
| Infinix INBOOK             |  1099 |   4.43 | leptops     | Infinix           |  9 |
| HP Pavilion 15-DK1056WM    |  1099 |   4.54 | leptops     | HP Pavilion       | 10 |
+----------------------------+-------+--------+-------------+-------------------+----+
10 rows in set (0.00 sec)
mysql> ALTER TABLE DB_hw_57 ADD INDEX(Product(20));
mysql> ALTER TABLE DB_hw_57 ADD INDEX(Price(3));
mysql> ALTER TABLE DB_hw_57 ADD INDEX(category(6));
mysql> ALTER TABLE DB_hw_57 ADD INDEX(brand(7));
mysql> SELECT Product, price FROM DB_hw_57 WHERE brand="Apple";
+-------------+-------+
| Product     | price |
+-------------+-------+
| iPhone 9    |   549 |
| iPhone X    |   899 |
| MacBook Pro |  1149 |
+-------------+-------+
3 rows in set (0.00 sec)
mysql> SELECT Product FROM DB_hw_57 WHERE price<"1000";
+------------+
| Product    |
+------------+
| OPPO F19   |
| Huawei P30 |
| iPhone 9   |
| iPhone X   |
+------------+
4 rows in set (0.00 sec)

mysql> SELECT Product FROM DB_hw_57 WHERE price BETWEEN "500" AND "1500";
+----------------------------+
| Product                    |
+----------------------------+
| iPhone 9                   |
| iPhone X                   |
| Infinix INBOOK             |
| HP Pavilion 15-DK1056WM    |
| MacBook Pro                |
| Samsyng Universe 9         |
| Samsyng Galaxy Book        |
| Microsoft Surface Laptop 4 |
+----------------------------+
8 rows in set (0.00 sec)

mysql> SELECT Product, price,rating FROM DB_hw_57 WHERE brand IN ("Apple", "Samsung", "Huawei");
+---------------------+-------+--------+
| Product             | price | rating |
+---------------------+-------+--------+
| iPhone 9            |   549 |   4.69 |
| iPhone X            |   899 |   4.44 |
| MacBook Pro         |  1149 |   4.57 |
| Huawei P30          |   499 |   4.09 |
| Samsyng Universe 9  |  1249 |   4.09 |
| Samsyng Galaxy Book |  1499 |   4.25 |
+---------------------+-------+--------+
6 rows in set (0.00 sec)
mysql> SELECT Product, category FROM DB_hw_57 WHERE Product LIKE "Samsyng%";
+---------------------+-------------+
| Product             | category    |
+---------------------+-------------+
| Samsyng Galaxy Book | leptops     |
| Samsyng Universe 9  | smsrtphones |
+---------------------+-------------+
2 rows in set (0.00 sec)