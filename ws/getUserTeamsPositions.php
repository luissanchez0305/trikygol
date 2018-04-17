<?php
include "helper.php";
if(isset($_GET['u'])) {
    $usuarioId = $_GET['u'];
	$groups = array("a", "b", "c", "d", "e", "f", "g", "h");
	foreach($groups as $group){
		$firstPoints = 0;
		$firstFlag = '';
		$firstTeam = 0;
		$firstName = '';
		$secondPoints = 0;
		$secondFlag = '';
		$secondTeam = 0;
		$secondName = '';
		$thirdPoints = 0;
		$thirdFlag = '';
		$thirdTeam = 0;
		$thirdName = '';
		$fourthPoints = 0;
		$fourthFlag = '';
		$fourthTeam = 0;
		$fourthName = '';
		// tomar todos los equipos del grupo actualizado para posicionarlos
		$query = "SELECT id, nombre, bandera, grupo FROM equipos WHERE grupo = '$group'";
		$teams = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		while($team = mysql_fetch_assoc($teams)) {
		    
            $query = "SELECT j.posicion, p.equipoid1, p.equipoid2 FROM pronosticos p JOIN juegos j ON j.id = p.juegoid WHERE usuarioid = '$usuarioId' AND j.tipo = 2 AND " .
                "(p.equipoid1 = '" . $team["id"] . "' OR p.equipoid2 = '".$team["id"]."')";
		    
		    $teamQualify = mysql_query($query,$link) or die('Errant query:  '.$query);
		    $teamQualifyId = 0;
		    $positionQuality = 0;
        	if(mysql_num_rows($teamQualify)) {
        	    while($teamQ = mysql_fetch_assoc($teamQualify)) {
        	    	
        	        if($teamQ["equipoid1"] == $team["id"]){
        	    		$teamQualifyId = $teamQ["equipoid1"];
        	    		$positionQuality = 1;
        	        }
        	        else{
        	    		$teamQualifyId = $teamQ["equipoid2"];
        	    		$positionQuality = 2;
        	        }
        	    }
        	}
        	
    	    if($fourthTeam == 0){
    	        $fourthTeam = $team["id"];
    	        $fourthName = $team["nombre"];
    	        $fourthFlag = $team["bandera"];
        	    $fourthPoints = mysql_num_rows($teamQualify) && $teamQualifyId == $team["id"] ? $positionQuality : 0;
    	    }
    	    else if($thirdTeam == 0){
    	        $thirdTeam = $team["id"];
    	        $thirdName = $team["nombre"];
    	        $thirdFlag = $team["bandera"];
        	    $thirdPoints = mysql_num_rows($teamQualify) && $teamQualifyId == $team["id"] ? $positionQuality : 0;
    	    }
    	    else if($secondTeam == 0){
    	        $secondTeam = $team["id"];
    	        $secondName = $team["nombre"];
    	        $secondFlag = $team["bandera"];
        	    $secondPoints = mysql_num_rows($teamQualify) && $teamQualifyId == $team["id"] ? $positionQuality : 0;
    	    }
    	    else {
    	        $firstTeam = $team["id"];
    	        $firstName = $team["nombre"];
    	        $firstFlag = $team["bandera"];
        	    $firstPoints = mysql_num_rows($teamQualify) && $teamQualifyId == $team["id"] ? $positionQuality : 0;
    	    }
        	
		}
		
	    
		$positions[] = array('letter' => $group, 
				'team1' => array('id' => $firstTeam, 'nombre' => $firstName, 'bandera' => $firstFlag, 'puntos' => $firstPoints),
				'team2' => array('id' => $secondTeam, 'nombre' => $secondName, 'bandera' => $secondFlag, 'puntos' => $secondPoints), 
				'team3' => array('id' => $thirdTeam,'nombre' => $thirdName, 'bandera' => $thirdFlag, 'puntos' => $thirdPoints), 
				'team4' => array('id' => $fourthTeam,'nombre' => $fourthName, 'bandera' => $fourthFlag, 'puntos' => $fourthPoints));
	}
	echo json_encode($positions);
}