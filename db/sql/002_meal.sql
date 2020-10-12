create table meal (
	id serial PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	is_promoted VARCHAR(50),
	price DECIMAL(4,2)
);

insert into meal (id, name, is_promoted, price) values (1, 'Fire-Roasted Rosemary & Onion Venison', true, 6.25);
insert into meal (id, name, is_promoted, price) values (2, 'Breaded Garlic & Rosemary Horse', false, 20.98);
insert into meal (id, name, is_promoted, price) values (3, 'Sautéed Fennel & Orange Frog', true, 23.57);
insert into meal (id, name, is_promoted, price) values (4, 'Pickled Pineapple Mussels', true, 13.76);
insert into meal (id, name, is_promoted, price) values (5, 'Stir-Fried Mint & Mustard Tortilla', true, 9.83);
insert into meal (id, name, is_promoted, price) values (6, 'Thermal-Cooked Mushroom Sandwich', false, 28.0);
insert into meal (id, name, is_promoted, price) values (7, 'Lemon and Chocolate Pie', false, 11.18);
insert into meal (id, name, is_promoted, price) values (8, 'Cherry and Melon Genoise', true, 16.18);
insert into meal (id, name, is_promoted, price) values (9, 'Guava Bombe', true, 28.08);
insert into meal (id, name, is_promoted, price) values (10, 'Melon Pancakes', false, 14.75);
insert into meal (id, name, is_promoted, price) values (11, 'Dry-Roasted Garlic & Lime Turkey', true, 8.12);
insert into meal (id, name, is_promoted, price) values (12, 'Thermal-Cooked Vanilla & Mint Pheasant', false, 9.34);
insert into meal (id, name, is_promoted, price) values (13, 'Poached Lime & Ginger Prawns', false, 12.79);
insert into meal (id, name, is_promoted, price) values (14, 'Pressure-Cooked Figs & Olive Lobster', true, 28.54);
insert into meal (id, name, is_promoted, price) values (15, 'Brined Hazelnut Vegetables', true, 23.25);
insert into meal (id, name, is_promoted, price) values (16, 'Dried Potatoes & Tofu', true, 7.24);
insert into meal (id, name, is_promoted, price) values (17, 'Mandarin and Praline Steamed Pudding', true, 16.15);
insert into meal (id, name, is_promoted, price) values (18, 'Mango and Pineapple Crispies', true, 27.37);
insert into meal (id, name, is_promoted, price) values (19, 'Chestnut Pudding', false, 15.37);
insert into meal (id, name, is_promoted, price) values (20, 'Coconut Doughnut', false, 8.97);
insert into meal (id, name, is_promoted, price) values (21, 'Steamed Onions & Tomato Mammoth', false, 6.83);
insert into meal (id, name, is_promoted, price) values (22, 'Slow-Cooked Garlic & Ginger Yak', true, 13.25);
insert into meal (id, name, is_promoted, price) values (23, 'Pickled Apples & Mustard Snapper', false, 15.73);
insert into meal (id, name, is_promoted, price) values (24, 'Blanched Wasabi Salmon', false, 6.99);
insert into meal (id, name, is_promoted, price) values (25, 'Simmered Beets & Orange Salad', true, 27.73);
insert into meal (id, name, is_promoted, price) values (26, 'Stewed Apples & Mustard Nut Mix', false, 15.74);
insert into meal (id, name, is_promoted, price) values (27, 'Cherry and Caramel Snacks', false, 19.33);
insert into meal (id, name, is_promoted, price) values (28, 'Grapefruit and Saffron Mooncake', true, 19.28);
insert into meal (id, name, is_promoted, price) values (29, 'Melon Waffles', true, 16.34);
insert into meal (id, name, is_promoted, price) values (30, 'Passion Fruit Ice Cream', true, 15.25);
insert into meal (id, name, is_promoted, price) values (31, 'Oven-Baked Dark Beer Bear', false, 9.72);
insert into meal (id, name, is_promoted, price) values (32, 'Pressure-Fried Fennel & Orange Beef', false, 25.61);
insert into meal (id, name, is_promoted, price) values (33, 'Stewed Sweet & Savory Salmon', true, 14.29);
insert into meal (id, name, is_promoted, price) values (34, 'Thermal-Cooked Mango & Pine Shrimps', true, 26.8);
insert into meal (id, name, is_promoted, price) values (35, 'Tenderized Bittersweet Bake', true, 20.11);
insert into meal (id, name, is_promoted, price) values (36, 'Stewed Fennel & Lime Stracciatella', true, 26.25);
insert into meal (id, name, is_promoted, price) values (37, 'Mint and Strawberry Ice Lollies', true, 7.17);
insert into meal (id, name, is_promoted, price) values (38, 'Plum and Hazelnut Cone', false, 7.88);
insert into meal (id, name, is_promoted, price) values (39, 'Strawberry Cobbler', true, 18.84);
insert into meal (id, name, is_promoted, price) values (40, 'Peach Toffee', true, 29.84);
insert into meal (id, name, is_promoted, price) values (41, 'Pan-Fried Thunder Gar', false, 20.42);
insert into meal (id, name, is_promoted, price) values (42, 'Pickled Falchion Dragonfly', true, 25.07);
insert into meal (id, name, is_promoted, price) values (43, 'Poached Giant Burro', false, 15.0);
insert into meal (id, name, is_promoted, price) values (44, 'Tenderized Arcane Beaver', false, 11.72);
insert into meal (id, name, is_promoted, price) values (45, 'Pulse Mustard Fruit Salad', false, 22.0);
insert into meal (id, name, is_promoted, price) values (46, 'Phase Egg & Coconut Pie', false, 24.52);
insert into meal (id, name, is_promoted, price) values (47, 'Griffin Waffles', true, 29.78);
insert into meal (id, name, is_promoted, price) values (48, 'Dragon Whip', true, 27.38);
insert into meal (id, name, is_promoted, price) values (49, 'Cagomelo Bombe', false, 25.11);
insert into meal (id, name, is_promoted, price) values (50, 'Ustriobana Cake', false, 19.11);
