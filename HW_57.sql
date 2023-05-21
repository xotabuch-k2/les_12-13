mysql> CREATE DATABASE DB_hw_57;
mysql> Use DB_hw_57;
mysql> CREATE TABLE DB_hw_57 (Product VARCHAR(128),Price DECIMAL(5,0),rating DECIMAL(3,2), category VARCHAR(16), brand VARCHAR(17));
mysql> ALTER TABLE DB_hw_57 ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY;
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('iPhone 9','549','4.69','smartphones','Apple');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('iPhone X','899','4.44','smartphones','Apple');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Samsung Universe 9','1249','4.09','smartphones','Samsung');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('OPPO F19','280','4.3','smartphones','OPPO');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Huawei P30','499','4.09','smartphones','Huawei');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('MacBook Pro','1149','4.57','laptops','Apple');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Samsung Galaxy Book','1499','4.25','laptops','Samsung');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Microsoft Surface Laptop 4','1499','4.43','laptops','Microsoft Surface');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('Infinix INBOOK','1099','4.43','laptops','Infinix');
mysql> INSERT INTO DB_hw_57(Product, Price, rating, category, brand) VALUES('HP Pavilion 15-DK1056WM','1099','4.54','laptops','HP Pavilion');
mysql> SELECT * FROM DB_hw_57;
+----------------------------+-------+--------+-------------+-------------------+----+
| Product                    | Price | rating | category    | brand             | id |
+----------------------------+-------+--------+-------------+-------------------+----+
| iPhone 9                   |   549 |   4.69 | smartphones | Apple             |  1 |
| iPhone X                   |   899 |   4.44 | smartphones | Apple             |  2 |
| Samsung Universe 9         |  1249 |   4.09 | smartphones | Samsung           |  3 |
| OPPO F19                   |   280 |   4.30 | smartphones | OPPO              |  4 |
| Huawei P30                 |   499 |   4.09 | smartphones | Huawei            |  5 |
| MacBook Pro                |  1149 |   4.57 | laptops     | Apple             |  6 |
| Samsung Galaxy Book        |  1499 |   4.25 | laptops     | Samsung           |  7 |
| Microsoft Surface Laptop 4 |  1499 |   4.43 | laptops     | Microsoft Surface |  8 |
| Infinix INBOOK             |  1099 |   4.43 | laptops     | Infinix           |  9 |
| HP Pavilion 15-DK1056WM    |  1099 |   4.54 | laptops     | HP Pavilion       | 10 |
+----------------------------+-------+--------+-------------+-------------------+----+
10 rows in set (0.00 sec)
mysql> ALTER TABLE DB_hw_57 ADD INDEX(Product(20));
mysql> ALTER TABLE DB_hw_57 ADD INDEX(Price(3));
mysql> ALTER TABLE DB_hw_57 ADD INDEX(category(6));
mysql> ALTER TABLE DB_hw_57 ADD INDEX(brand(7));
mysql> SELECT Product, Price FROM DB_hw_57 WHERE brand="Apple";
+-------------+-------+
| Product     | Price |
+-------------+-------+
| iPhone 9    |   549 |
| iPhone X    |   899 |
| MacBook Pro |  1149 |
+-------------+-------+
3 rows in set (0.00 sec)
mysql> SELECT Product FROM DB_hw_57 WHERE Price<"1000";
+------------+
| Product    |
+------------+
| OPPO F19   |
| Huawei P30 |
| iPhone 9   |
| iPhone X   |
+------------+
4 rows in set (0.00 sec)

mysql> SELECT Product FROM DB_hw_57 WHERE Price BETWEEN "500" AND "1500";
+----------------------------+
| Product                    |
+----------------------------+
| iPhone 9                   |
| iPhone X                   |
| Infinix INBOOK             |
| HP Pavilion 15-DK1056WM    |
| MacBook Pro                |
| Samsung Universe 9         |
| Samsung Galaxy Book        |
| Microsoft Surface Laptop 4 |
+----------------------------+
8 rows in set (0.00 sec)

mysql> SELECT Product, Price,rating FROM DB_hw_57 WHERE brand IN ("Apple", "Samsung", "Huawei");
+---------------------+-------+--------+
| Product             | Price | rating |
+---------------------+-------+--------+
| iPhone 9            |   549 |   4.69 |
| iPhone X            |   899 |   4.44 |
| MacBook Pro         |  1149 |   4.57 |
| Huawei P30          |   499 |   4.09 |
| Samsung Universe 9  |  1249 |   4.09 |
| Samsung Galaxy Book |  1499 |   4.25 |
+---------------------+-------+--------+
6 rows in set (0.00 sec)
mysql> SELECT Product, category FROM DB_hw_57 WHERE Product LIKE "Samsung%";
+---------------------+-------------+
| Product             | category    |
+---------------------+-------------+
| Samsung Galaxy Book | laptops     |
| Samsung Universe 9  | smartphones |
+---------------------+-------------+
2 rows in set (0.00 sec)