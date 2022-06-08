create database SuperHeroiDB;
use SuperHeroiDB;

create table tb_superHeroi(
	id_superHeroi		int primary key auto_increment,
    nm_superHeroi		varchar(100),
    ds_poderes			varchar(100),
    bl_podeVoar			boolean
);