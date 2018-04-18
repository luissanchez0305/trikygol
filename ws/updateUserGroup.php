<?php
include "helper.php";

$post = retrieveJsonPostData($_POST);
if((isset($post->g) || isset($_POST['g'])) && (isset($post->u) || isset($_POST['u']))) {
	if(isset($post->g))
		$group = $post->g;
	else
		$group = $_POST['g'];
	
	if(isset($post->u))
		$user = $post->u;
	else
		$user = $_POST['u'];
    
    $query = "UPDATE usuarios SET grupo = '$group' WHERE id = $user";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	
	/* disconnect from the db */
	@mysql_close($link);
    echo json_encode(array('status' => 'ok'));
	die;
    
}

echo json_encode(array('status' => 'no params'));