<?php
	include "helper.php";
	
	/* grab the posts from the db */
	$query = "SELECT j.id, j.equipoid1, j.equipoid2, e1.nombre as equipo1, e2.nombre as equipo2, e1.bandera as bandera1, " .
			"e2.bandera as bandera2, j.fecha, j.equipo1marcador, j.equipo2marcador, j.tipo FROM juegos j LEFT JOIN equipos e1 ON e1.id = j.equipoid1 LEFT JOIN equipos e2 ON e2.id = j.equipoid2 " .
			"WHERE j.tipo IN (4, 5, 6) ORDER BY j.fecha";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	
	/* create one master array of the records */
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = $post;
		}
	}
	echo json_encode($posts);
	
	/* disconnect from the db */
	@mysql_close($link);