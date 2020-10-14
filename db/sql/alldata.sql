create table donorswithlistings (
	id serial PRIMARY KEY,
	firstname_username VARCHAR(30) NOT NULL,
	lastname_username VARCHAR(30) NOT NULL,
	emailaddress VARCHAR(50) NOT NULL,
	linktophotoofdonation VARCHAR(200) NOT NULL,
	timestamp_when_donated TIMESTAMP DEFAULT NOW()
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
	linktophotoofdonation VARCHAR(200) NOT NULL,
	item_id INTEGER
);

insert into donorswithlistings (firstname_username, lastname_username, emailaddress, linktophotoofdonation) values ('Michael', 'Botur', 'michaelbotur@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg');
insert into item (firstname_username, lastname_username, emailaddress, linktophotoofdonation, item_id) values ('Michael', 'Botur', 'michaelbotur@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg',1);
insert into recipientsandrequesters (firstname_username, lastname_username, emailaddress) values ('Shaun', 'Ferguson', 'shaunferguson@developersinstitute.co.nz');


 
 

