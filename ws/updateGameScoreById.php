<?php
include "helper.php";
if(isset($_GET['g']) && isset($_GET['s1']) && isset($_GET['s2'])) {
	$game = $_GET['g'];
	$score1 = $_GET['s1'];
	$score2 = $_GET['s2'];
	if(strlen($_GET['s1']) > 0 && strlen($_GET['s2']) > 0)
		$query = "UPDATE juegos SET equipo1marcador = '$score1', equipo2marcador = '$score2' WHERE id = '$game'";
	else 
		$query = "UPDATE juegos SET equipo1marcador = null, equipo2marcador = null WHERE id = '$game'";
	mysql_query($query,$link) or die('Errant query:  '.$query);
	
	$query = "SELECT tipo,posicion FROM juegos WHERE id='$game'";	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);	

	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = array('post'=>$post);
		}		
	}
	
	// compara si es de 1ra fase, 8vos, 4tos, semifinal o final
	if($posts[0]["post"]["tipo"] == "1"){
		$firstPoints = 0;
		$firstFlag = '';
		$firstTeam = 0;
		$firstName = '';
		$secondPoints = 0;
		$secondFlag = '';
		$secondTeam = 0;
		$secondName = '';
		// tomar todos los equipos del grupo del equipo actualizado para posicionarlos
		$query = "SELECT id, nombre, bandera, grupo FROM equipos WHERE grupo = (SELECT e.grupo FROM juegos j JOIN equipos e ON e.id = j.equipoid1 WHERE j.id='$game')";
		$teams = mysql_query($query,$link) or die('Errant query:  '.$query);

		$teamsScores = array();
		if(mysql_num_rows($teams)) {
			while($team = mysql_fetch_assoc($teams)) {
				// sacar todos los juegos del equipo para sacar los puntajes
				$query = "SELECT equipoid1, equipoid2, equipo1marcador, equipo2marcador FROM juegos WHERE equipoid1 = " . 
					$team["id"] . " OR equipoid2 = " . $team["id"];
				$teamGames = mysql_query($query,$link) or die('Errant query:  '.$query);
				
				if(mysql_num_rows($teamGames)) {
					$teamPoints = 0;
					$teamGoals = 0;
					$teamGoalsDiff = 0;
					// sacar puntaje
					while($teamGame = mysql_fetch_assoc($teamGames)) {
						if((int)$teamGame["equipo1marcador"] > (int)$teamGame["equipo2marcador"] && $teamGame["equipoid1"] == $team["id"]){
							$teamPoints += 3;
						}
						else if((int)$teamGame["equipo2marcador"] > (int)$teamGame["equipo1marcador"] && $teamGame["equipoid2"] == $team["id"]){
							$teamPoints += 3;
						}
						else if(strlen($teamGame["equipo1marcador"]) > 0 && strlen($teamGame["equipo2marcador"]) > 0 && (int)$teamGame["equipo2marcador"] == (int)$teamGame["equipo1marcador"]){
							$teamPoints += 1;							
						}
						if($teamGame["equipoid1"] == $team["id"]){
							$teamGoals += (int)$teamGame["equipo1marcador"];								
						}
						else {
							$teamGoals += (int)$teamGame["equipo2marcador"];
						}
						if($teamGame["equipoid1"] == $team["id"])
							$teamGoalsDiff += ((int)$teamGame["equipo1marcador"] - (int)$teamGame["equipo2marcador"]);
						else 
							$teamGoalsDiff += ((int)$teamGame["equipo2marcador"] - (int)$teamGame["equipo1marcador"]);
					}
					$teamsScores[] = array("id" => $team["id"], "bandera" => $team["bandera"], "nombre" => $team["nombre"], 
							"puntos" => $teamPoints , "gols" => $teamGoals, "golsdif" => $teamGoalsDiff);
				}				
			}
			$thirdPoints = 0;
			$thirdFlag = '';
			$thirdTeam = 0;
			$thirdName = '';
			foreach ($teamsScores as $item){
				if((int)$item["puntos"] > $firstPoints){
					$firstPoints = $item["puntos"];
					$firstFlag = $item["bandera"];
					$firstTeam = $item["id"];
					$firstName = $item["nombre"];
				}
			}
			foreach ($teamsScores as $item){
				if($item["id"] != $firstTeam && (int)$item["puntos"] <= $firstPoints && (int)$item["puntos"] >= $secondPoints){
					$secondPoints = $item["puntos"];
					$secondFlag = $item["bandera"];
					$secondTeam = $item["id"];
					$secondName = $item["nombre"];
				}
			}
			if($firstPoints > $secondPoints){
				foreach ($teamsScores as $item){
					if($item["id"] != $firstTeam && $item["id"] != $secondTeam && (int)$item["puntos"] == $secondPoints){
						$thirdPoints = $item["puntos"];
						$thirdFlag = $item["bandera"];
						$thirdTeam = $item["id"];
						$thirdName = $item["nombre"];
					}
				}
				if($thirdTeam != "0"){
					$secondGoals = 0;
					$thirdGoals = 0;
					foreach ($teamsScores as $item){
						if($item["id"] == $secondTeam)
							$secondGoals = $item["gols"];
						if($item["id"] == $thirdTeam)
							$thirdGoals = $item["gols"];
					}
					
					if($thirdGoals > $secondGoals){
						$secondTeam = $thirdTeam;
						$secondGoals = $thirdGoals;
						$secondFlag = $thirdFlag;
						$secondName = $thirdName;
					}
					else {
						$secondGoalsDiff = 0;
						$thirdGoalsDiff = 0;

						foreach ($teamsScores as $item){
							if($item["id"] == $secondTeam)
								$secondGoalsDiff = $item["golsdif"];
							if($item["id"] == $thirdTeam)
								$thirdGoalsDiff = $item["golsdif"];
						}

						if($thirdGoalsDiff > $secondGoalsDiff){
							$secondTeam = $thirdTeam;
							$secondGoals = $thirdGoals;
							$secondFlag = $thirdFlag;
							$secondName = $thirdName;
						}
					}
				}
			}
			else{
				$firstGoals = 0;
				$secondGoals = 0;

				foreach ($teamsScores as $item){
					if($item["id"] == $firstTeam)
						$firstGoals = $item["gols"];
					if($item["id"] == $secondTeam)
						$secondGoals = $item["gols"];
				}
				
				if($secondGoals > $firstGoals){
					$tempFlag = $secondFlag;
					$tempTeam = $secondTeam;
					$tempGoals = $secondGoals;
					$tempName = $secondName;
					
					$secondTeam = $firstTeam;
					$secondGoals = $firstGoals;
					$secondFlag = $firstFlag;
					$secondName = $firstName;

					$firstFlag = $tempFlag;
					$firstTeam = $tempTeam;
					$firstGoals = $tempGoals;
					$firstName = $tempName;
				}
				else {
					$firstGoalsDiff = 0;
					$secondGoalsDiff = 0;

					foreach ($teamsScores as $item){
						if($item["id"] == $firstTeam)
							$firstGoalsDiff = $item["gols"];
						if($item["id"] == $secondTeam)
							$secondGoalsDiff = $item["gols"];
					}
					
					if($secondGoals > $firstGoals){
						$tempFlag = $secondFlag;
						$tempTeam = $secondTeam;
						$tempGoals = $secondGoals;
						$tempName = $secondName;
							
						$secondTeam = $firstTeam;
						$secondGoals = $firstGoals;
						$secondFlag = $firstFlag;
						$secondName = $firstName;
					
						$firstFlag = $tempFlag;
						$firstTeam = $tempTeam;
						$firstGoals = $tempGoals;
						$firstName = $tempName;
					}
				}				
			}
		}
		
		$query = "SELECT grupo FROM equipos WHERE id = ".$firstTeam;
		
		$equipo = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		$grupoLetter = array();
		if(mysql_num_rows($equipo)) {
			while($post = mysql_fetch_assoc($equipo)) {
				$grupoLetter[] = array('post'=>$post);
			}
		}
		
		$query = "SELECT id FROM juegos WHERE posicion LIKE '%1".$grupoLetter[0]["post"]["grupo"]."-%'";
		$firstTeamGameId = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		$firstGameId = array();
		if(mysql_num_rows($firstTeamGameId)) {
			while($post = mysql_fetch_assoc($firstTeamGameId)) {
				$firstGameId[] = array('post'=>$post);
			}
		}
		
		$query = "SELECT id FROM juegos WHERE posicion LIKE '%-2".$grupoLetter[0]["post"]["grupo"]."%'";
		$secondTeamGameId = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		$secondGameId = array();
		if(mysql_num_rows($secondTeamGameId)) {
			while($post = mysql_fetch_assoc($secondTeamGameId)) {
				$secondGameId[] = array('post'=>$post);
			}
		}
		
		$query = "UPDATE juegos SET equipoid1 = ".$firstTeam." WHERE id = (".$firstGameId[0]["post"]["id"].")";
		mysql_query($query,$link) or die('Errant query:  '.$query);
		$query = "UPDATE juegos SET equipoid2 = ".$secondTeam." WHERE id = (".$secondGameId[0]["post"]["id"].")";
		mysql_query($query,$link) or die('Errant query:  '.$query);
		
		$positions[] = array('firstflag' => $firstFlag, 'firstname' => $firstName, 'firstid' => $firstTeam,
				'secondflag' => $secondFlag, 'secondname' => $secondName, 'secondid' => $secondTeam);
		echo json_encode(array('posiciones'=>$positions));
	}
	else if($posts[0]["post"]["tipo"] == "2" || $posts[0]["post"]["tipo"] == "3" || $posts[0]["post"]["tipo"] == "4"){
		// Obtener los id de los equipos involucrados en el juego
		$query = 'SELECT equipoid1, equipoid2 FROM juegos WHERE id = '.$game;
		$teamsIds = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		$teamsGameId = array();
		if(mysql_num_rows($teamsIds)) {
			while($post = mysql_fetch_assoc($teamsIds)) {
				$teamsGameId[] = array('post'=>$post);
			}
		}
		$winTeam = $score1 > $score2 ? $teamsGameId[0]["post"]["equipoid1"] : $teamsGameId[0]["post"]["equipoid2"];
		$looseTeam = $score1 < $score2 ? $teamsGameId[0]["post"]["equipoid1"] : $teamsGameId[0]["post"]["equipoid2"];
		
		// sacar numero del juego
		$gameNumber = substr($posts[0]["post"]["posicion"], 0, strpos($posts[0]["post"]["posicion"], ":"));
		
		// sacar si el equipo esta posicionado en equipo1 o equipo2 en el juego destino
		$query = "SELECT id FROM juegos WHERE posicion LIKE '%w".$gameNumber."-%'";
		$team1Position = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		$team1 = array();
		if(mysql_num_rows($team1Position)) {
			while($post = mysql_fetch_assoc($team1Position)) {
				$team1[] = array('post'=>$post);
			}
			$query = 'UPDATE juegos SET equipoid1 = '.$winTeam.' WHERE id = ' . $team1[0]["post"]["id"];
			mysql_query($query,$link) or die('Errant query:  '.$query);			
		}
		else {
			$query = "SELECT id FROM juegos WHERE posicion LIKE '%-w".$gameNumber."%'";
			$team2Position = mysql_query($query,$link) or die('Errant query:  '.$query);
			
			$team2 = array();
			if(mysql_num_rows($team2Position)) {
				while($post = mysql_fetch_assoc($team2Position)) {
					$team2[] = array('post'=>$post);
				}
			}
			$query = 'UPDATE juegos SET equipoid2 = '.$winTeam.' WHERE id = ' . $team2[0]["post"]["id"];
			mysql_query($query,$link) or die('Errant query:  '.$query);						
		}

		if($posts[0]["post"]["tipo"] == "4"){
			$query = "SELECT id FROM juegos WHERE posicion LIKE '%l".$gameNumber."-%'";
			$team1_3rd = mysql_query($query,$link) or die('Errant query:  '.$query);
		
			$team1_3rdPlace = array();
			if(mysql_num_rows($team1_3rd)) {
				while($post = mysql_fetch_assoc($team1_3rd)) {
					$team1_3rdPlace[] = array('post'=>$post);
				}
		
				$query = 'UPDATE juegos SET equipoid1 = '.$looseTeam.' WHERE id = ' . $team1_3rdPlace[0]["post"]["id"];
				mysql_query($query,$link) or die('Errant query:  '.$query);
			}
			else{
				$query = "SELECT id FROM juegos WHERE posicion LIKE '%-l".$gameNumber."%'";
				$team2_3rd = mysql_query($query,$link) or die('Errant query:  '.$query);
					
				$team2_3rdPlace = array();
				if(mysql_num_rows($team2_3rd)) {
					while($post = mysql_fetch_assoc($team2_3rd)) {
						$team2_3rdPlace[] = array('post'=>$post);
					}
		
					$query = 'UPDATE juegos SET equipoid2 = '.$looseTeam.' WHERE id = ' . $team2_3rdPlace[0]["post"]["id"];
					mysql_query($query,$link) or die('Errant query:  '.$query);
				}
			}
		}
	}
	//echo json_encode(array('posiciones'=>$teamsScores));
	//echo json_encode(mysql_insert_id());

	/* disconnect from the db */
	@mysql_close($link);
	die;
}
echo json_encode(array('status' => 'no params'));