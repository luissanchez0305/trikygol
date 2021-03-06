<?php
	include "helper.php";
	$source = 'juegos';
	$usuarioId = '0';
	if($_GET['source'] == 'triky'){
		$source = 'pronosticos';
		$usuarioId = $_GET['u'];
	}

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
		$teamsScores = array();
		$teamsArray = array();
		
		if(mysql_num_rows($teams)) {
			while($team = mysql_fetch_assoc($teams)) {
				// sacar todos los juegos del equipo para sacar los puntajes
				$userStatement = $usuarioId != '0' ? "AND usuarioid = ".$usuarioId." AND juegoid IN (SELECT j.id FROM juegos j WHERE tipo = 1)" : "";
				$query = "SELECT equipoid1, equipoid2, equipo1marcador, equipo2marcador FROM $source WHERE (equipoid1 = " . 
					$team["id"] . " OR equipoid2 = " . $team["id"] . ") ". $userStatement .
					" AND equipo1marcador IS NOT NULL AND equipo2marcador IS NOT NULL";
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
				$teamsArray[] = array("id" => $team["id"], "bandera" => $team["bandera"], "nombre" => $team["nombre"]);
			}
			
			//print_r($teamsScores);
			
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
			/*if($firstPoints > $secondPoints){*/
				foreach ($teamsScores as $item){
					if($item["id"] != $firstTeam && $item["id"] != $secondTeam && (int)$item["puntos"] == $secondPoints){
						$thirdPoints = $item["puntos"];
						$thirdFlag = $item["bandera"];
						$thirdTeam = $item["id"];
						$thirdName = $item["nombre"];
					}
				}
				if($thirdTeam != "0"){
					$secondGoalsDiff = 0;
					$thirdGoalsDiff = 0;
					$fourthGoalsDiff = 0;

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
					else {
						$secondGoals = 0;
						$thirdGoals = 0;
						$fourthGoals = 0;
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
					}
				}
				
				$thirdPoints = 0;
				foreach ($teamsScores as $item){
					if($item["id"] != $firstTeam && $item["id"] != $secondTeam && (int)$item["puntos"] >= $thirdPoints){
						if($thirdPoints == 0){
							$thirdPoints = $item["puntos"];
							$thirdFlag = $item["bandera"];
							$thirdTeam = $item["id"];
							$thirdName = $item["nombre"];
						}
						else {
							$fourthPoints = $item["puntos"];
							$fourthFlag = $item["bandera"];
							$fourthTeam = $item["id"];
							$fourthName = $item["nombre"];
						}
					}
				}
				if($fourthPoints == $thirdPoints){
					foreach ($teamsScores as $item){
						if($item["id"] == $thirdTeam)
							$thirdGoalsDiff = $item["golsdif"];
						if($item["id"] == $fourthTeam)
							$fourthGoalsDiff = $item["golsdif"];
					}
					
					if($fourthGoalsDiff > $thirdGoalsDiff){
						$tempPoints = $thirdPoints;
						$tempFlag = $thirdFlag;
						$tempTeam = $thirdTeam;
						$tempName = $thirdName;
						
						$thirdPoints = $fourthPoints;
						$thirdFlag = $fourthFlag;
						$thirdTeam = $fourthTeam;
						$thirdName = $fourthName;
						
						$fourthPoints = $tempPoints;
						$fourthFlag = $tempFlag;
						$fourthTeam = $tempTeam;
						$fourthName = $tempName;
					}
					else{
						foreach ($teamsScores as $item){
							if($item["id"] == $thirdTeam)
								$thirdGoals = $item["gols"];
							if($item["id"] == $fourthTeam)
								$fourthGoals = $item["gols"];
						}
						
						if($fourthGoals > $thirdGoals){
							$tempPoints = $thirdPoints;
							$tempFlag = $thirdFlag;
							$tempTeam = $thirdTeam;
							$tempName = $thirdName;
							
							$thirdPoints = $fourthPoints;
							$thirdFlag = $fourthFlag;
							$thirdTeam = $fourthTeam;
							$thirdName = $fourthName;
							
							$fourthPoints = $tempPoints;
							$fourthFlag = $tempFlag;
							$fourthTeam = $tempTeam;
							$fourthName = $tempName;
						}
					}
				}
				
			/*}
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
			}*/
		}
		
		if($firstTeam == 0){
			$firstTeam = $teamsArray[0]['id'];
			$firstName = $teamsArray[0]['nombre'];
			$firstFlag = $teamsArray[0]['bandera'];
			$firstPoints = 0;
		}
		if($secondTeam == 0){
			if($teamsArray[0]['id'] != $firstTeam){
				$secondTeam = $teamsArray[0]['id'];
				$secondName = $teamsArray[0]['nombre'];
				$secondFlag = $teamsArray[0]['bandera'];
				$secondPoints = 0;
			}
			else{
				$secondTeam = $teamsArray[1]['id'];
				$secondName = $teamsArray[1]['nombre'];
				$secondFlag = $teamsArray[1]['bandera'];
				$secondPoints = 0;
			}
		}
		if($thirdTeam == 0){
			if($teamsArray[0]['id'] != $firstTeam && $teamsArray[0]['id'] != $secondTeam){
				$thirdTeam = $teamsArray[0]['id'];
				$thirdName = $teamsArray[0]['nombre'];
				$thirdFlag = $teamsArray[0]['bandera'];
				$thirdPoints = 0;
			}
			else if($teamsArray[1]['id'] != $firstTeam && $teamsArray[1]['id'] != $secondTeam){
				$thirdTeam = $teamsArray[1]['id'];
				$thirdName = $teamsArray[1]['nombre'];
				$thirdFlag = $teamsArray[1]['bandera'];
				$thirdPoints = 0;
			}
			else{
				$thirdTeam = $teamsArray[2]['id'];
				$thirdName = $teamsArray[2]['nombre'];
				$thirdFlag = $teamsArray[2]['bandera'];
				$thirdPoints = 0;
			}
		}
		if($fourthTeam == 0){
			if($teamsArray[0]['id'] != $firstTeam && $teamsArray[0]['id'] != $secondTeam && $teamsArray[0]['id'] != $thirdTeam){
				$fourthTeam = $teamsArray[0]['id'];
				$fourthName = $teamsArray[0]['nombre'];
				$fourthFlag = $teamsArray[0]['bandera'];
				$fourthPoints = 0;
			}
			else if($teamsArray[1]['id'] != $firstTeam && $teamsArray[1]['id'] != $secondTeam && $teamsArray[1]['id'] != $thirdTeam){
				$fourthTeam = $teamsArray[1]['id'];
				$fourthName = $teamsArray[1]['nombre'];
				$fourthFlag = $teamsArray[1]['bandera'];
				$fourthPoints = 0;
			}
			else if($teamsArray[2]['id'] != $firstTeam && $teamsArray[2]['id'] != $secondTeam && $teamsArray[2]['id'] != $thirdTeam){
				$fourthTeam = $teamsArray[2]['id'];
				$fourthName = $teamsArray[2]['nombre'];
				$fourthFlag = $teamsArray[2]['bandera'];
				$fourthPoints = 0;
			}
			else{
				$fourthTeam = $teamsArray[3]['id'];
				$fourthName = $teamsArray[3]['nombre'];
				$fourthFlag = $teamsArray[3]['bandera'];
				$fourthPoints = 0;
			}
			
		}
		
		
		$positions[] = array('letter' => $group, 
				'team1' => array('id' => $firstTeam, 'nombre' => $firstName, 'bandera' => $firstFlag, 'puntos' => $firstPoints),
				'team2' => array('id' => $secondTeam, 'nombre' => $secondName, 'bandera' => $secondFlag, 'puntos' => $secondPoints), 
				'team3' => array('id' => $thirdTeam,'nombre' => $thirdName, 'bandera' => $thirdFlag, 'puntos' => $thirdPoints), 
				'team4' => array('id' => $fourthTeam,'nombre' => $fourthName, 'bandera' => $fourthFlag, 'puntos' => $fourthPoints));
	}
	echo json_encode($positions);
		
	//echo json_encode(array('posiciones'=>$teamsScores));
	//echo json_encode(mysql_insert_id());

	/* disconnect from the db */
	@mysql_close($link);