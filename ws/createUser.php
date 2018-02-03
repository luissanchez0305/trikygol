<?php
include "helper.php";

$post = retrieveJsonPostData($_POST);
if(isset($post->p) && isset($post->e)) {
	$pwd = $post->p;
	$name = $post->n;
	$email = $post->e;
	$group = $post->g;
	$query = "INSERT INTO usuarios (pwd, nombre, email) VALUES ('$pwd', '$name', '$email')";
	if(strlen($group) > 0)
		$query = "INSERT INTO usuarios (pwd, nombre, email, grupo) VALUES ('$pwd', '$name', '$email', '$group')";
	
	mysql_query($query,$link) or die('Errant query:  '.$query);
	$newUserId = mysql_insert_id();

	$query = "SELECT j.id, j.equipoid1, j.equipoid2 FROM juegos j ORDER BY j.fecha";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$juegoId = $post["id"];
			$equipo1 = $post["equipoid1"];
			$equipo2 = $post["equipoid2"];
			if(strlen($equipo1) == 0)
				$query = "INSERT INTO pronosticos (juegoid, usuarioid) VALUES ($juegoId, $newUserId)";
			else
				$query = "INSERT INTO pronosticos (juegoid, usuarioid, equipoid1, equipoid2) VALUES ($juegoId, $newUserId, $equipo1, $equipo2)";
			mysql_query($query,$link) or die('Errant query:  '.$query);
		}
	}
		
	echo json_encode(array('status' => 'ok', 'id' => $newUserId));

	/* disconnect from the db */
	@mysql_close($link);
	die;
}
echo json_encode(array('status' => 'no params'));