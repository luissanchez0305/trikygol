<?php
include "helper.php";
if(isset($_GET['f'])) {
	/* grab the posts from the db */
	$date = $_GET['f'];
	$query = "SELECT j.id, j.equipoid1, j.equipoid2, e1.nombre as equipo1, e2.nombre as equipo2, e1.bandera as bandera1, " .
	"e2.bandera as bandera2, j.equipo1marcador, j.equipo2marcador, j.fecha FROM juegos j JOIN equipos e1 ON e1.id = j.equipoid1 JOIN equipos e2 ON e2.id = j.equipoid2 " .
	"WHERE j.fecha = '$date'";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);

	/* create one master array of the records */
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = array('post'=>$post);
		}
	}
	echo json_encode(array('posts'=>$posts));

	/* disconnect from the db */
	@mysql_close($link);
}