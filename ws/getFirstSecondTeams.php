<?php
include "helper.php";
	$source = 'juegos';
	if($_GET['source'] == 'triky')
		$source = 'pronosticos';

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
		$team1Id = 0;
		$team1Name = '';
		$team2Id = 0;
		$team2Name = '';
		$team3Id = 0;
		$team3Name = '';
		$team4Id = 0;
		$team4Name = '';
			
		// tomar todos los equipos del grupo actualizado para posicionarlos
		$query = "SELECT id, nombre, bandera, grupo FROM equipos WHERE grupo = '$group'";
		$teams = mysql_query($query,$link) or die('Errant query:  '.$query);

		$teamsScores = array();
		if(mysql_num_rows($teams)) {
			while($team = mysql_fetch_assoc($teams)) {
				// sacar todos los juegos del equipo para sacar los puntajes
				$query = "SELECT equipoid1, equipoid2, equipo1marcador, equipo2marcador FROM $source WHERE (equipoid1 = " . 
					$team["id"] . " OR equipoid2 = " . $team["id"] . ") AND equipo1marcador IS NOT NULL AND equipo2marcador IS NOT NULL";
				$teamGames = mysql_query($query,$link) or die('Errant query:  '.$query);
				
				if(mysql_num_rows($teamGames)) {
					$teamPoints = 0;
					$teamGoals = 0;
					$teamGoalsDiff = 0;
					// sacar puntaje
					while($teamGame = mysql_fetch_assoc($teamGames)) {
						// gamo el equipo 1
						if((int)$teamGame["equipo1marcador"] > (int)$teamGame["equipo2marcador"] && $teamGame["equipoid1"] == $team["id"]){
							$teamPoints += 3;
						}
						// gano el equipo 2
						else if((int)$teamGame["equipo2marcador"] > (int)$teamGame["equipo1marcador"] && $teamGame["equipoid2"] == $team["id"]){
							$teamPoints += 3;
						}
						// fue empate
						else if(strlen($teamGame["equipo1marcador"]) > 0 && strlen($teamGame["equipo2marcador"]) > 0 && (int)$teamGame["equipo2marcador"] == (int)$teamGame["equipo1marcador"]){
							$teamPoints += 1;							
						}
						// cantidad de goles del equipo en $team
						if($teamGame["equipoid1"] == $team["id"]){
							$teamGoals += (int)$teamGame["equipo1marcador"];								
						}
						else {
							$teamGoals += (int)$teamGame["equipo2marcador"];
						}
						// sacar la diferencia de goles
						if($teamGame["equipoid1"] == $team["id"])
							$teamGoalsDiff += ((int)$teamGame["equipo1marcador"] - (int)$teamGame["equipo2marcador"]);
						else 
							$teamGoalsDiff += ((int)$teamGame["equipo2marcador"] - (int)$teamGame["equipo1marcador"]);
					}
					$teamsScores[] = array("id" => $team["id"], "bandera" => $team["bandera"], "nombre" => $team["nombre"], 
							"puntos" => $teamPoints , "gols" => $teamGoals, "golsdif" => $teamGoalsDiff);
				}
				
				if($team1Id == 0){
					$team1Id = $team["id"];
					$team1Name = $team["nombre"];
				}
				else if($team2Id == 0){
					$team2Id = $team["id"];
					$team2Name = $team["nombre"];
				}
				else if($team3Id == 0){
					$team3Id = $team["id"];
					$team3Name = $team["nombre"];
				}
				else if($team4Id == 0){
					$team4Id = $team["id"];
					$team4Name = $team["nombre"];
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
					if($firstPoints == 0)
						break;
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
			else {
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
		
		$positions[] = array('letter' => $group, 'firstflag' => $firstFlag, 'firstname' => $firstName, 'firstid' => $firstTeam,
				'secondflag' => $secondFlag, 'secondname' => $secondName, 'secondid' => $secondTeam, 
				'team1' => array('id' => $team1Id,'nombre' => $team1Name), 
				'team2' => array('id' => $team2Id,'nombre' => $team2Name),
				'team3' => array('id' => $team3Id,'nombre' => $team3Name), 
				'team4' => array('id' => $team4Id,'nombre' => $team4Name));
				
		$team1Id = 0;
		$team1Name = '';
		$team2Id = 0;
		$team2Name = '';
		$team3Id = 0;
		$team3Name = '';
		$team4Id = 0;
		$team4Name = '';
	}
	echo json_encode($positions);
		
	//echo json_encode(array('posiciones'=>$teamsScores));
	//echo json_encode(mysql_insert_id());

	/* disconnect from the db */
	@mysql_close($link);