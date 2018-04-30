<?php
include "helper.php";

if(isset($_GET['u'])) {
    $userId = $_GET['u'];

    $query = "SELECT r.usuarioid, u.nombre, r.numero FROM figuritas_faltantes f JOIN figuritas_repetidas r ON r.numero = f.numero JOIN usuarios u ON u.id = f.usuarioid WHERE r.usuarioid <> '$userId' AND f.usuarioid = '$userId'";

    $result = mysql_query($query,$link) or die('Errant query:  '.$query);
    /* create one master array of the records */
    $stickers = array();
    if(mysql_num_rows($result)) {
        while($sticker = mysql_fetch_assoc($result)) {
            $stickers[] = $sticker;
        }
        echo json_encode($stickers);
    }
    else{
        echo json_encode(array('status' => 'no results'));
    }

    /* disconnect from the db */
    @mysql_close($link);
    die;
}
echo json_encode(array('status' => 'no params'));
?>