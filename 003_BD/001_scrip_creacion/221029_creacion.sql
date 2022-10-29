create database tunel;
use  tunel;
create table concretes (
cct_name varchar(100) not null unique ,
cct_mat_name varchar(100),
cct_kg int not null,
foreign key (cct_mat_name) references materials(mat_name)
);
create table materials(
mat_name varchar(100) primary key,
mat_price int not null,
mat_description varchar(255)
);