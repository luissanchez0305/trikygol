<?php
include "helper.php";

if(isset($_GET['u']) && isset($_GET['te']) && isset($_GET['t']) && isset($_GET['pg'])) {
	$userid = $_GET['u'];
	$positionGame = $_GET['pg'];
	$teamid = $_GET['te'];
	$gameType = $_GET['t']; // octavos = 2, 4tos = 3, semi = 4, finales = 5,6
    if($gameType != '5' && $gameType != '6'){
        $teamToRemove = 0;
        $query = "SELECT equipoid1 FROM pronosticos WHERE usuarioid = '$userid' AND juegoid IN (SELECT id FROM juegos WHERE posicion LIKE '%$positionGame-%')";
        $result = mysql_query($query,$link) or die('Errant query:  '.$query);
        if(mysql_num_rows($result)) {
            $teamToRemove = mysql_fetch_assoc($result)['equipoid1'];
        }
        $query = "SELECT equipoid2 FROM pronosticos WHERE usuarioid = '$userid' AND juegoid IN (SELECT id FROM juegos WHERE posicion LIKE '%-$positionGame%')";
        $result = mysql_query($query,$link) or die('Errant query:  '.$query);
        if(mysql_num_rows($result)) {
            $teamToRemove = mysql_fetch_assoc($result)['equipoid2'];
        }
        
        $query1 = "UPDATE pronosticos SET equipoid1 = NULL WHERE usuarioid = '$userid' AND equipoid1 = '$teamid' " .
            "AND juegoid IN (SELECT id FROM juegos WHERE posicion LIKE '%$positionGame%')";
        $query2 = "UPDATE pronosticos SET equipoid2 = NULL WHERE usuarioid = '$userid' AND equipoid2 = '$teamid' " .
            "AND juegoid IN (SELECT id FROM juegos WHERE posicion LIKE '%$positionGame%')";
        
        $query3 = "UPDATE pronosticos SET equipoid1 = '$teamid' WHERE juegoid IN (SELECT id FROM juegos WHERE posicion LIKE '%$positionGame-%') " .
            "AND usuarioid = '$userid'";
        $query4 = "UPDATE pronosticos SET equipoid2 = '$teamid' WHERE juegoid IN (SELECT id FROM juegos WHERE posicion LIKE '%-$positionGame%') " .
            "AND usuarioid = '$userid'";
        
        mysql_query($query1,$link) or die('Errant query:  '.$query1);
        mysql_query($query2,$link) or die('Errant query:  '.$query2);
        mysql_query($query3,$link) or die('Errant query:  '.$query3);
        mysql_query($query4,$link) or die('Errant query:  '.$query4);
        
        // quitamos el equipo que estaba anteriormente en 4tos, semifinales y finales
        $query1 = "UPDATE pronosticos SET equipoid1 = NULL WHERE usuarioid = '$userid' AND equipoid1 = '$teamToRemove' AND juegoid IN (SELECT id FROM juegos WHERE tipo IN (2,3,4,5,6))";
        $query2 = "UPDATE pronosticos SET equipoid2 = NULL WHERE usuarioid = '$userid' AND equipoid2 = '$teamToRemove' AND juegoid IN (SELECT id FROM juegos WHERE tipo IN (2,3,4,5,6))";
        $query3 = "UPDATE pronosticos SET equipo1marcador = NULL WHERE usuarioid = '$userid' AND equipoid1 = '$teamToRemove' AND juegoid IN (SELECT id FROM juegos WHERE tipo IN (5,6))";
        $query4 = "UPDATE pronosticos SET equipo2marcador = NULL WHERE usuarioid = '$userid' AND equipoid2 = '$teamToRemove' AND juegoid IN (SELECT id FROM juegos WHERE tipo IN (5,6))";
        
        mysql_query($query1,$link) or die('Errant query:  '.$query1);
        mysql_query($query2,$link) or die('Errant query:  '.$query2);
        mysql_query($query3,$link) or die('Errant query:  '.$query3);
        mysql_query($query4,$link) or die('Errant query:  '.$query4);
    }
    else if(isset($_GET['type'])){
        $type = $_GET['type'];
        $query1 = '';
        $query2 = '';
        //https://trikygol-luissanchez0305.c9users.io/ws/updateUserTeamPosition.php?&u=7&pg=w64&te=8&t=6&type=win
        // poner equipo en los ganadores para el juego final
        if($type == 'win'){
            if($gameType != '6'){
                $query = "SELECT * FROM pronosticos WHERE usuarioid = '$userid' AND equipoid1 IS NULL AND juegoid = 64";
                $result = mysql_query($query,$link) or die('Errant query:  '.$query);
                if(mysql_num_rows($result)) {
                    $query1 = "UPDATE pronosticos SET equipoid1 = NULL WHERE usuarioid = '$userid' AND equipoid1 = '$teamid' " .
                        "AND juegoid = 64";
                    $query2 = "UPDATE pronosticos SET equipoid1 = '$teamid' WHERE juegoid = 64 " .
                        "AND usuarioid = '$userid'";
                }
                else {
                    $query1 = "UPDATE pronosticos SET equipoid2 = NULL WHERE usuarioid = '$userid' AND equipoid2 = '$teamid' " .
                        "AND juegoid = 64";
                    $query2 = "UPDATE pronosticos SET equipoid2 = '$teamid' WHERE juegoid = 64 " .
                        "AND usuarioid = '$userid'";  
                }
            }
            else{
                $query = "SELECT * FROM pronosticos WHERE usuarioid = '$userid' AND equipoid1 = '$teamid' AND juegoid = 64";
                $result = mysql_query($query,$link) or die('Errant query:  '.$query);
                if(mysql_num_rows($result)) {
                    $query1 = "UPDATE pronosticos SET equipo1marcador = 1, equipo2marcador = 0 WHERE usuarioid = '$userid' AND equipoid1 = '$teamid' AND juegoid = 64";
                }
                else{
                    $query1 = "UPDATE pronosticos SET equipo2marcador = 1, equipo1marcador = 0 WHERE usuarioid = '$userid' AND equipoid2 = '$teamid' AND juegoid = 64";
                }
                mysql_query($query1,$link) or die('Errant query:  '.$query1);
            	echo json_encode(array('status'=>'ok'));
            	/* disconnect from the db */
            	@mysql_close($link);
                die;
            }
        }
        // poner en los perdedores para el juego del 3er lugar
        else{
            $query = "SELECT * FROM pronosticos WHERE usuarioid = '$userid' AND equipoid1 IS NULL AND juegoid = 63";
            $result = mysql_query($query,$link) or die('Errant query:  '.$query);
            if(mysql_num_rows($result)) {
                $query1 = "UPDATE pronosticos SET equipoid1 = NULL WHERE usuarioid = '$userid' AND equipoid1 = '$teamid' " .
                    "AND juegoid = 63";
                $query2 = "UPDATE pronosticos SET equipoid1 = '$teamid' WHERE juegoid = 63 " .
                    "AND usuarioid = '$userid'";
            }
            else {
                $query1 = "UPDATE pronosticos SET equipoid2 = NULL WHERE usuarioid = '$userid' AND equipoid2 = '$teamid' " .
                    "AND juegoid = 63";
                $query2 = "UPDATE pronosticos SET equipoid2 = '$teamid' WHERE juegoid = 63 " .
                    "AND usuarioid = '$userid'";  
            }
                
        }
        mysql_query($query1,$link) or die('Errant query:  '.$query1);
        mysql_query($query2,$link) or die('Errant query:  '.$query2);
    }
	
	/*echo $query1;
	echo $query2;
	echo $query3;
	echo $query4;*/
	
	echo json_encode(array('status'=>'ok'));
	/* disconnect from the db */
	@mysql_close($link);
	die;
}