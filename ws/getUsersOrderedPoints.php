<?php
include "helper.php";

if(isset($_GET['g']) && $_GET['g'] != 'null') {
	/* grab the posts from the db */
	$group = $_GET['g'];
	$query = "SELECT nombre, puntos FROM usuarios WHERE grupo LIKE '$group' ORDER BY puntos "; //DESC LIMIT 5";
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
