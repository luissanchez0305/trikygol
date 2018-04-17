<?php
include "helper.php";
$date = $_GET["date"];
$query = "SELECT e1.nombre as player1, e1.bandera as flag1, e2.nombre as player2, e2.bandera as flag2, " .
"IF (j.equipo1marcador IS NULL , '-', j.equipo1marcador) as score1, IF (j.equipo2marcador IS NULL , '-', j.equipo2marcador) as score2, " .
"IF (j.equipo1marcador IS NOT NULL AND j.estado IS NULL,'En vivo', " .
"IF (j.equipo1marcador IS NULL AND j.estado IS NULL, '', j.estado)) as gameStatus " .
"FROM juegos j JOIN equipos e1 ON e1.id = j.equipoid1 JOIN equipos e2 ON e2.id = j.equipoid2 " .
"WHERE fecha = '$date' ORDER BY fecha";
$result = mysql_query($query,$link) or die('Errant query:  '.$query);

$posts = array();
if(mysql_num_rows($result)) {
	while($post = mysql_fetch_assoc($result)) {
		$posts[] = $post;
	}
}
echo json_encode($posts);

/* disconnect from the db */
@mysql_close($link);
die;