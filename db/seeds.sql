-- 3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

INSERT INTO burgers(burger_name, image)
VALUES 	('Jucy Lucy', 'https://assets3.thrillist.com/v1/image/2626662/size/tl-horizontal_main.jpg'),
		('The Bang Bang Burger, Single', 'https://assets3.thrillist.com/v1/image/2642882/size/tmg-gift_guide_default_2x.jpg'),
		('The Ghetto Burger', 'https://assets3.thrillist.com/v1/image/2642883/size/tmg-gift_guide_default_2x.jpg'),
		('The Burger', 'https://s3-media4.fl.yelpcdn.com/bphoto/NPFrlEfJZkjYvA6DXQnL2g/o.jpg')