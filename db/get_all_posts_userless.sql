SELECT posts.id, title, img, content, username, profile_pic FROM posts
JOIN users u ON posts.author_id = u.id
WHERE author_id != $1;