<?php
include "helper.php";

$post = retrieveJsonPostData($_POST);
if(isset($post->e) && isset($post->c)) {

	$pwd = $post->p;
	$name = $post->n;
	$email = $post->e;
	$group = $post->g;
	$currEmail = $post->c;
	
	if(strlen($pwd) > 0){
		$query = "UPDATE usuarios SET pwd = '$pwd' WHERE email = '$currEmail'";
		mysql_query($query,$link) or die('Errant query:  '.$query);
	}
	if(strlen($name) > 0){
		$query = "UPDATE usuarios SET nombre = '$name' WHERE email = '$currEmail'";
		mysql_query($query,$link) or die('Errant query:  '.$query);
	}
	if(strlen($group) > 0){
		$query = "UPDATE usuarios SET grupo = '$group' WHERE email = '$currEmail'";
		mysql_query($query,$link) or die('Errant query:  '.$query);
	}
	else {
		$query = "UPDATE usuarios SET grupo = null WHERE email = '$currEmail'";
		mysql_query($query,$link) or die('Errant query:  '.$query);
	}
	if(strlen($email) > 0){
		$query = "UPDATE usuarios SET email = '$email' WHERE email = '$currEmail'";
		mysql_query($query,$link) or die('Errant query:  '.$query);
		$currEmail = $email;
	}
	
	$query = "SELECT id FROM usuarios WHERE email = '$currEmail'";
	$currUser = mysql_query($query,$link) or die('Errant query:  '.$query);
	echo json_encode(array('status'=>'ok', 'id'=>mysql_fetch_assoc($currUser)['id']));
	/* disconnect from the db */
	@mysql_close($link);
	die;
}
echo json_encode(array('status' => 'no params'));