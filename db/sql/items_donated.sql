CREATE SCHEMA items_donated;
CREATE DATABASE items_donated; 
create table itemsdonated (
	id serial PRIMARY KEY,
	item_name VARCHAR(100) NOT NULL,
    item_description VARCHAR(100) NOT NULL,
	id_of_donor INTEGER
);

insert into donorswithlistings (id, username_of_donor_firstname, username_of_donor_lastname, emailaddress, photoofdonation,timestamp_when_donated) values (1, 'Michael', 'Botur', 'michaelbotur@developersinstitute.co.nz', 'https://teneightymagazine.com/wp-content/uploads/2019/07/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg','2020-05-16 00:42:49');
