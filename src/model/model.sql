CREATE DATABASE matrass;

CREATE TABLE matrass_main(
    matrass_main_id uuid default gen_random_uuid() primary key,
    matrass_main_img text not null,
    matrass_main_text text not null
);
create table main_number(
	main_number_id uuid default gen_random_uuid(),
	main_number_num text not null
);
