create table donorswithlistings (
	id serial PRIMARY KEY,
	firstname_username VARCHAR(30) NOT NULL,
	lastname_username VARCHAR(30) NOT NULL,
	emailaddress VARCHAR(50) NOT NULL,
	linktophotoofdonation URL (200) NOT NULL,
	timestamp_when_donated TIMESTAMP DEFAULT NOW(),
);

create table recipientsandrequesters (
	id serial PRIMARY KEY,
	firstname_username VARCHAR(30) NOT NULL,
	lastname_username VARCHAR(30) NOT NULL,
	emailaddress VARCHAR(50) NOT NULL,
	timestamp_when_requested TIMESTAMP DEFAULT NOW()
);

create table item (
	id serial PRIMARY KEY,
	firstname_username VARCHAR(30) NOT NULL,
	lastname_username VARCHAR(30) NOT NULL,
	emailaddress VARCHAR(50) NOT NULL,
	linktophotoofdonation URL (200) NOT NULL,
	item_id INTEGER
);

 
insert into donorswithlistings (id, firstname_username, lastname_username, emailaddress, linktophotoofdonation,timestamp_when_donated) values (1, 'Michael', 'Botur', 'michaelbotur@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-05-16 00:42:49');
insert into donorswithlistings (id, firstname_username, lastname_username, emailaddress, linktophotoofdonation,timestamp_when_donated) values (2, 'Katie', 'Miles', 'katiemiles@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-03-16 00:42:49');
insert into donorswithlistings (id, firstname_username, lastname_username, emailaddress, linktophotoofdonation,timestamp_when_donated) values (3, 'Jan', 'Claasen', 'janclaasen@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-01-16 00:42:49');
insert into donorswithlistings (id, firstname_username, lastname_username, emailaddress, linktophotoofdonation,timestamp_when_donated) values (4, 'Kelly', 'Kahukiwa', 'kellykahukiwa@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-01-16 06:42:49');
insert into donorswithlistings (id, firstname_username, lastname_username, emailaddress, linktophotoofdonation,timestamp_when_donated) values (5, 'Maraina', 'Latimer', 'marainalatimer@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-02-16 05:12:25');

insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress,timestamp_when_requested) values (6, 'Shaun', 'Ferguson', 'shaunferguson@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-02-16 00:42:49');
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress,timestamp_when_requested) values (7, 'Jo', 'Price', 'joprice@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-09-16 04:22:49');
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress,timestamp_when_requested) values (8, 'Abraham', 'Botur', 'abe@tokomail.com', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-05-16 01:48:09');
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress,timestamp_when_requested) values (9, 'Ty', 'Davis', 'tydavis@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-05-16 02:40:44');
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress,timestamp_when_requested) values (10, 'Dave', 'Crowe', 'davidcrowe@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-07-16 03:42:39');




 
 

