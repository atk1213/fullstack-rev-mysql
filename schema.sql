DROP DATABASE IF EXISTS hrlaStudents;

CREATE DATABASE hrlaStudents;

USE hrlaStudents;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Alex");
INSERT INTO students (id, name) VALUES (2, "Anna");
INSERT INTO students (id, name) VALUES (3, "Chris");
INSERT INTO students (id, name) VALUES (4, "Danny");
INSERT INTO students (id, name) VALUES (5, "Frankie");
INSERT INTO students (id, name) VALUES (6, "Jeremy");
INSERT INTO students (id, name) VALUES (7, "John");
INSERT INTO students (id, name) VALUES (8, "Jordan");
INSERT INTO students (id, name) VALUES (9, "Joshua");
INSERT INTO students (id, name) VALUES (10, "Kyle");
INSERT INTO students (id, name) VALUES (11, "Michael");
INSERT INTO students (id, name) VALUES (12, "Omar");
INSERT INTO students (id, name) VALUES (13, "Rongyi");
INSERT INTO students (id, name) VALUES (14, "Rylan");
INSERT INTO students (id, name) VALUES (15, "Tayo");



INSERT INTO images (id, imgurl) VALUES (1, "https://ca.slack-edge.com/T2SV1LBC6-UVCU3FS6M-5092b1522302-512");
INSERT INTO images (id, imgurl) VALUES (2, "https://ca.slack-edge.com/T2SV1LBC6-U010B6W8JUE-84252a69b927-512");
INSERT INTO images (id, imgurl) VALUES (3, "https://ca.slack-edge.com/T2SV1LBC6-UVA703ZPU-61e567628799-512");
INSERT INTO images (id, imgurl) VALUES (4, "https://ca.slack-edge.com/T2SV1LBC6-UTCC7DBLN-796d5eaa2632-512");
INSERT INTO images (id, imgurl) VALUES (5, "https://ca.slack-edge.com/T2SV1LBC6-UTC1Y9WDV-3db3deae8709-512");
INSERT INTO images (id, imgurl) VALUES (6, "https://ca.slack-edge.com/T2SV1LBC6-UVBGCS8RH-9578c7b414d8-512");
INSERT INTO images (id, imgurl) VALUES (7, "https://ca.slack-edge.com/T2SV1LBC6-UVBGD4EGK-b65d65247ca4-512");
INSERT INTO images (id, imgurl) VALUES (8, "https://ca.slack-edge.com/T2SV1LBC6-UVBGCCVH9-77a369697650-512");
INSERT INTO images (id, imgurl) VALUES (9, "https://ca.slack-edge.com/T2SV1LBC6-UVBGCTDNF-55f4727177f6-512");
INSERT INTO images (id, imgurl) VALUES (10, "https://ca.slack-edge.com/T2SV1LBC6-U010AS46ZU7-ee76b0f921c9-512");
INSERT INTO images (id, imgurl) VALUES (11, "https://ca.slack-edge.com/T2SV1LBC6-U0108GQHVJ8-14b29ea9b89c-512");
INSERT INTO images (id, imgurl) VALUES (12, "https://ca.slack-edge.com/T2SV1LBC6-UVA6ZGLHG-af5bb78b9800-512");
INSERT INTO images (id, imgurl) VALUES (13, "https://ca.slack-edge.com/T2SV1LBC6-UVA6Z6N5Q-cbf7666fe2e4-512");
INSERT INTO images (id, imgurl) VALUES (14, "https://ca.slack-edge.com/T2SV1LBC6-U010918SY3X-g7023f03fa7f-512");
INSERT INTO images (id, imgurl) VALUES (15, "https://ca.slack-edge.com/T2SV1LBC6-USYMNQ0QK-65794c3149dd-512");
