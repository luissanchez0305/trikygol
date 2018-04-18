<?php
include "helper.php";
if(isset($_GET['u'])) {
	/* grab the posts from the db */
	$uname = $_GET['u'];
	$pwd = $_GET['p'];
	$query = "SELECT barcode, name FROM lists l JOIN barcodes b ON b.id = l.barcodeid WHERE userid = (SELECT id FROM users WHERE username = '$uname')";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);

	/* create one master array of the records */
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = array('post'=>$post);
		}
	}
	echo json_encode(array('posts'=>$posts));

	/* disconnect from the db */
	@mysql_close($link);
}