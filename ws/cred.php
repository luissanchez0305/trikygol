<?php
include "helper.php";

$post = retrieveJsonPostData($_POST);

if(isset($post->e) && isset($post->p)) {
	$email = $post->e;
	$pwd = $post->p;

	/* grab the posts from the db */
	$query = "SELECT id, nombre, grupo FROM usuarios WHERE email = '$email' AND pwd = '$pwd'";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
		
	/* create one master array of the records */
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = $post;
		}
	}
	/* disconnect from the db */
	@mysql_close($link);
	
	if(count($posts) > 0){
		echo json_encode(array('user'=>$posts, 'status'=>'ok'));
	}
	die;
}
echo json_encode(array('status' => 'no params'));