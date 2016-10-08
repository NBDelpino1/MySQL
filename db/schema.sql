CREATE SCHEMA `burgers_db` ;
CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NULL,
  `devoured` TINYINT(1) NULL,
  `date` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));