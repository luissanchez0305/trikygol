<?php
include "helper.php";

if(isset($_GET['u']) && isset($_GET['g'])) {
    $userId = $_GET['u'];
    $grupo = $_GET['g'];

    $query = "SELECT r.usuarioid, ru.nombre, r.numero FROM figuritas_faltantes f JOIN figuritas_repetidas r ON r.numero = f.numero JOIN usuarios ru ON ru.id = r.usuarioid JOIN usuarios fu ON fu.id = f.usuarioid WHERE r.usuarioid <> '$userId' AND fu.id = '$userId' AND ru.grupo = '$grupo' ORDER BY ru.nombre, r.numero";

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