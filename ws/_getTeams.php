<?php
	include "helper.php";

	/* grab the posts from the db */
	$uname = $_GET['u'];
	$pwd = $_GET['p'];
	$query = "SELECT id, nombre, grupo FROM equipos ORDER BY grupo";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);

	/* create one master array of the records */
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = array('post'=>array_map('utf8_encode', $post));
		}
	}
	echo json_encode($posts);

	/* disconnect from the db */
	@mysql_close($link);