CREATE TABLE `casadocodigo`.`livros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `price` DECIMAL NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

insert into livros (title, price) values('Livro 1', 10);
insert into livros (title, price) values('Livro 2', 20);
insert into livros (title, price) values('Livro 3', 30);