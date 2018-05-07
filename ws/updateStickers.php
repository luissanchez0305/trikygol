<?php

include "helper.php";

if(isset($_GET['u']) && isset($_GET['t']) && isset($_GET['n'])) {
    $userId = $_GET['u'];
    $type = $_GET['t'];
    $number = $_GET['n'];

    // revisar si ya existe ese number y usuario
    // insertar number al usuario
    $query = "SELECT * FROM " . ($type == 'missing' ? 'figuritas_faltantes' : 'figuritas_repetidas') . " WHERE usuarioid = '$userId' AND numero = '$number'";

    $result = mysql_query($query,$link) or die('Errant query:  '.$query);
    if(mysql_num_rows($result) == 0) {
        $query = "INSERT INTO " . ($type == 'missing' ? 'figuritas_faltantes' : 'figuritas_repetidas') . " (usuarioid, numero) VALUES ('$userId','$number')";
    }
    else{
        $query = "DELETE FROM " . ($type == 'missing' ? 'figuritas_faltantes' : 'figuritas_repetidas') . " WHERE usuarioid = '$userId' AND numero = '$number'";
    }
    mysql_query($query,$link) or die('Errant query:  '.$query);

    echo json_encode(array('status' => 'success'));
    /* disconnect from the db */
    @mysql_close($link);
    die;
}
echo json_encode(array('status' => 'no params'));
?>