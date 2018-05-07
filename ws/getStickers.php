<?php
include "helper.php";

if(isset($_GET['u']) && isset($_GET['t'])) {
    $userId = $_GET['u'];
    $type = $_GET['t'];

    $query = "SELECT numero FROM " . ($type == 'missing' ? 'figuritas_faltantes' : 'figuritas_repetidas') . " WHERE usuarioid = '$userId' ORDER BY numero";

    $result = mysql_query($query,$link) or die('Errant query:  '.$query);

    /* create one master array of the records */
    $stickers = array();
    if(mysql_num_rows($result)) {
        while($sticker = mysql_fetch_assoc($result)) {
            $stickers[] = $sticker;
        }
    }
    echo json_encode($stickers);

    /* disconnect from the db */
    @mysql_close($link);
    die;
}

echo json_encode(array('status' => 'no params'));
?>