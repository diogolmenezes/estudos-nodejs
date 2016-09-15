CREATE TABLE `lojaNode`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `price` DECIMAL NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

insert into books (title, price) values('Livro 1', 10);
insert into books (title, price) values('Livro 2', 20);
insert into books (title, price) values('Livro 3', 30);