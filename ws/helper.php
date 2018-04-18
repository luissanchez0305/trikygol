<?php

header('Content-type: application/json');
header("access-control-allow-origin: *");

$username = 'espheras_dbuser';
$password = 'Goingupinlife123';
$database = 'espheras_polla';

$link = mysql_connect('162.210.98.37',$username,$password) or die('Cannot connect to the DB');
mysql_select_db($database) or die(mysql_errno());

function retrieveJsonPostData() {
    // get the raw POST data
    $rawData = file_get_contents("php://input");
    
    // this returns null if not valid json
    return json_decode($rawData);
}

function RandomString()
{
    $characters = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < 7; $i++) {
        $randstring .= $characters[rand(0, strlen($characters))];
    }
    return $randstring;
}
?>