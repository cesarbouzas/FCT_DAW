create table materials (
mat_id integer  generated by default as identity  (start with 1) not null primary key,
mat_unit varchar(100) not null,
mat_name varchar(100) not null unique,
mat_price numeric(7,2) not null,
mat_description varchar(255)
)



create table plants(
plant_id int4 generated by default as identity (start with 1) not null primary key,
plant_type varchar not null,
plant_name varchar(255) unique not null,
plant_prodctivity numeric(7,2) not null,
plant_price numeric(7,2) not null ,
plant_spent numeric(7,2) not null ,
plant_price_gasoil numeric(7,2) not null ,
plant_price_kw numeric(7,2) not null ,
plant_price_lubricant numeric(7,2) not null,
plant_price_operator numeric(7,2) not null,
plant_price_suboperator numeric(7,2) not null,
plant_price_diet_operator numeric(7,2) not null ,
plant_price_increment_holidays numeric(7,2) not null ,
plant_price_increment_nocturnality numeric(7,2) not null ,
plant_price_arid_wear numeric(7,2) not null,
plant_price_crane_70_Ton numeric(7,2) not null,
plant_price_crane_100_Ton numeric(7,2) not null,
plant_price_crane_exit numeric(7,2) not null,
plant_price_elevator numeric(7,2) not null,
plant_price_transport_departure numeric(7,2) not null,
plant_price_transpor_return numeric(7,2) not null,
plant_price_insurance numeric(7,2) not null,
plant_price_loader numeric(7,2) not null

)


create table category(
cat_id integer generated by default as identity (start with 1) primary key,
cat_name varchar(100) not null unique ,
cat_description varchar(255) null
)
create table contact(
cto_id integer generated by default as identity (start with 1) primary key,
cat_id integer not null,
cto_company varchar(100) not null,
cto_contact_name varchar(100) not null,
cto_phone int null,
cto_email varchar(100) null,
cto_observations varchar(255) null,
constraint fk_cat_cto foreign  key (cat_id) references public.category(cat_id) 
);
