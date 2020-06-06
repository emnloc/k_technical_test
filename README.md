# #Prueba técnica



Ejercicios de consultas:

1.

```sql
CREATE
 VIEW track_list
 AS SELECT
    t.id,
    t.title,
    a.title,
    u.email,
    u.countrycode
FROM
    tracks t
JOIN albums a ON
    t.albumid = a.id
JOIN users u ON
    t.userid = u.id;
```

2.

```sql
SELECT a.* FROM albums a JOIN users u on a.userid = u.id
WHERE u.countrycode = 'PE';
```

3.

```sql
UPDATE tracks t 
       JOIN (SELECT users.NAME, 
                    albums.id 
             FROM   albums 
                    JOIN users 
                      ON users.id = albums.userid) AS a 
         ON a.id = t.albumid 
SET    t.artist = a.NAME 
WHERE  t.artist IS NULL;
```

4.

```sql
UPDATE albums 
       JOIN (SELECT a.id, 
                    Count(t.id) tracks_count 
             FROM   albums a 
                    LEFT JOIN tracks t 
                           ON a.id = t.albumid 
             GROUP  BY t.albumid, 
                       a.id) ab 
         ON albums.id = ab.id 
SET    albums.status = 0 
WHERE  ab.tracks_count = 0; 

SELECT id 
FROM   (SELECT a.id, 
               Count(t.id) tracks_count 
        FROM   albums a 
               LEFT JOIN tracks t 
                      ON a.id = t.albumid 
        GROUP  BY t.albumid, 
                  a.id) al 
WHERE  tracks_count = 0; 
```

5.

```sql
UPDATE users 
       JOIN (SELECT u.id, 
                    Count(a.id) albums_count, 
                    (SELECT Count(id) 
                     FROM   tracks 
                     WHERE  albumid = a.id) tracks_count 
             FROM   users u 
                    LEFT JOIN albums a 
                           ON a.userid = u.id 
             GROUP  BY u.id, 
                       tracks_count) c 
         ON c.id = users.id 
SET    status = 0 
WHERE  tracks_count = 0 
        OR albums_count = 0;
        

SELECT usrs.id 
FROM   (SELECT u.id, 
               Count(a.id) albums_count, 
               (SELECT Count(id) 
                FROM   tracks 
                WHERE  albumid = a.id) tracks_count 
        FROM   users u 
               LEFT JOIN albums a 
                      ON a.userid = u.id 
        GROUP  BY u.id, 
                  tracks_count) usrs 
WHERE  usrs.albums_count = 0 
        OR usrs.tracks_count = 0;
```

6.

```sql
SELECT * FROM tracks t 
JOIN albums a on t.albumid = a.id
WHERE t.genre != a.genre
```





## API REST

Para iniciar el proyecto usar el comando



` npm run dev` si desean ver cambios en vivo o

`npm start` para inciar el servidor web solamente



las rutas son:

` GET /users`

`GET /users/:id`

`DELETE /users/:id`

`POST /users`



`GET /albums`

`GET /tracks`

`GET /countries`



para paginar y/o ordenar se deben usar los parametros como query string de la siguiente manera

Filter: `filter[nombre_del_campo]=valor `

Sort: `sort[]=nombre_del_campo `

Sort type: `sort_type=desc|asc` DEFAULT `asc `

Page: `page=número_de_pagina`

Page Size `page_size=número_de_registros` DEFAULT `10`

