CREATE TABLE users
(id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT);

CREATE TABLE posts
(id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users(id));

INSERT INTO users (username, password, profile_pic)
VALUES ('B1gBubb@', 'Big@Bub', 'none'),
('R@zzTh3D@zz', 'sN@zZyRaz', 'none'),
('Nunchuck5', 'n1nN1N', 'none');

INSERT INTO posts (title, img, content, author_id)
VALUES ('OK.', 'ok_saitama.jpeg', 'OK.', 2),
('You thought this was a post...', 'dio.gif', 'But it was actually me, Dio!', 1),
('EL PSY KONGROO', 'rintaro.png', 'Soon the Organization shall fall! El. Psy. Kongroo.', 3);