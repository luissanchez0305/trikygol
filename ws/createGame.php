<?php
include "helper.php";
if(isset($_GET['e1']) && isset($_GET['e2']) && isset($_GET['t']) && isset($_GET['f'])) {
	
	$team1 = $_GET['e1'];
	$team2 = $_GET['e2'];
	$date = $_GET['f'];
	$type = $_GET['t'];
	if(strlen($team1) > 0)
		$query = "INSERT INTO juegos (fecha, equipoid1, equipoid2, tipo) VALUES ('$date', '$team1', '$team2', '$type')";
	else 
		$query = "INSERT INTO juegos (fecha, tipo) VALUES ('$date', '$type')";
	mysql_query($query,$link) or die('Errant query:  '.$query);
	echo json_encode(mysql_insert_id());

	/* disconnect from the db */
	@mysql_close($link);
	die;
}
echo json_encode(array('status' => 'no params'));