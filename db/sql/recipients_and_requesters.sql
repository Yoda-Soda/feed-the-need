CREATE DATABASE recipients_and_requesters
; 
 
create table recipientsandrequesters (
	id serial PRIMARY KEY,
	firstname_username VARCHAR(30) NOT NULL,
	lastname_username VARCHAR(30) NOT NULL,
	emailaddress VARCHAR(60) NOT NULL,
	donor_id INTEGER 
);


insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (1, 'Mark', 'Churcher', 'mark@developers.ac.nz', 11);
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (2, 'Nik', 'Ho', 'nik@developers.ac.nz', 12);
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (3, 'Nick', 'Whiu', 'nick@developers.ac.nz', 13);
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (4, 'Lance', 'Cooper', 'Lance@developers.ac.nz', 14);
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (5, 'Abraham', 'Botur', 'abe@tokomail.com',8);
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (6, 'Ty', 'Davis', 'tydavis@developersinstitute.co.nz',9);
insert into recipientsandrequesters (id, firstname_username, lastname_username, emailaddress, donor_id) values (7, 'Dave', 'Crowe', 'davidcrowe@developersinstitute.co.nz', 10);


