<?php
include "helper.php";
if(isset($_GET['u']) && isset($_GET['g'])) {
	/* grab the posts from the db */
	$userid = $_GET['u'];
	$group = $_GET['g'];
	$query = "SELECT p.id, p.juegoid, p.equipoid1, p.equipoid2, e1.nombre as equipo1, e2.nombre as equipo2, e1.bandera as bandera1, " .
			"e2.bandera as bandera2, j.fecha, p.equipo1marcador, p.equipo2marcador FROM pronosticos p JOIN equipos e1 ON e1.id = p.equipoid1 JOIN equipos e2 ON e2.id = p.equipoid2 " .
			"JOIN juegos j ON j.id = p.juegoid WHERE j.tipo = 1 AND p.usuarioid = ".$userid." AND e1.grupo = '".strtolower($group)."' ORDER BY j.fecha";
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
	die;
}
echo json_encode(array('status' => 'no params'));