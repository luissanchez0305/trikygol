<?php
include "helper.php";

$post = retrieveJsonPostData($_POST);
if(isset($post->e) || isset($_POST['e'])) {
	/* grab the posts from the db */
	if(isset($post->e))
		$user = $post->e;
	else
		$user = $_POST['e'];
	$query = "SELECT id, nombre, email, puntos, grupo, marcadoresAcertados, equiposGanadores, equiposClasificados, empates ".
		"FROM usuarios WHERE id = '$user'";
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