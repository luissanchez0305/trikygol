<?php
include "helper.php";
if(isset($_GET['u']) && isset($_GET['g']) && isset($_GET['s1']) && isset($_GET['s2'])) {
	$forecasts = explode(',', $_GET['g']);
	$scores1 = explode(',', $_GET['s1']);
	$scores2 = explode(',', $_GET['s2']);
	$userid = $_GET['u'];
	for($i = 0; $i < count($forecasts); $i++){
		$forecast = $forecasts[$i];
		$score1 = $scores1[$i];
		$score2 = $scores2[$i];
		if(strlen($forecast) > 0){
			// Obtener id del juego
			$query = "SELECT juegoid FROM pronosticos " .
					"WHERE id = '" . $forecast . "'";
			$result = mysql_query($query,$link) or die('Errant query:  '.$query);

			/* create one master array of the records */
			$posts = array();
			if(mysql_num_rows($result)) {
				while($post = mysql_fetch_assoc($result)) {
					$posts[] = array('post'=>$post);
				}
			}
			$game = $posts[0]["post"]["juegoid"];

			/*if(strlen($_GET['s1']) > 0 && strlen($_GET['s2']) > 0)*/
				$query = "UPDATE pronosticos SET equipo1marcador = '$score1', equipo2marcador = '$score2' WHERE id = '$forecast'";
			/*else
				$query = "UPDATE pronosticos SET equipo1marcador = null, equipo2marcador = null WHERE id = '$forecast'";*/
			mysql_query($query,$link) or die('Errant query:  '.$query);

			$query = "SELECT tipo, posicion FROM juegos WHERE id='$game'";
			$result = mysql_query($query,$link) or die('Errant query:  '.$query);

			$typePosition = array();
			if(mysql_num_rows($result)) {
				while($post = mysql_fetch_assoc($result)) {
					$typePosition[] = array('post'=>$post);
				}
			}

			// compara si es de 1ra fase, 8vos, 4tos, semifinal o final
			if($typePosition[0]["post"]["tipo"] == "1"){
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
						$query = "SELECT equipoid1, equipoid2, equipo1marcador, equipo2marcador FROM pronosticos WHERE (equipoid1 = " .
							$team["id"] . " OR equipoid2 = " . $team["id"] . ") AND equipo1marcador IS NOT NULL AND equipo2marcador IS NOT NULL " .
							"AND usuarioid = " . $userid;
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
						$grupoLetter[] = $post;
					}
				}

				$query = "SELECT id FROM juegos WHERE posicion LIKE '%1".$grupoLetter[0]["grupo"]."-%'";
				$firstTeamGameId = mysql_query($query,$link) or die('Errant query:  '.$query);

				$firstGameId = array();
				if(mysql_num_rows($firstTeamGameId)) {
					while($post = mysql_fetch_assoc($firstTeamGameId)) {
						$firstGameId[] = $post;
					}
				}

				$query = "SELECT id FROM juegos WHERE posicion LIKE '%-2".$grupoLetter[0]["grupo"]."%'";
				$secondTeamGameId = mysql_query($query,$link) or die('Errant query:  '.$query);

				$secondGameId = array();
				if(mysql_num_rows($secondTeamGameId)) {
					while($post = mysql_fetch_assoc($secondTeamGameId)) {
						$secondGameId[] = $post;
					}
				}

				$query = "UPDATE pronosticos SET equipoid1 = ".$firstTeam.
					", equipo1marcador = null, equipo2marcador = null WHERE usuarioid = ".
					$userid." AND juegoid = (".$firstGameId[0]["id"].")";
				mysql_query($query,$link) or die('Errant query:  '.$query);
				$query = "UPDATE pronosticos SET equipoid2 = ".$secondTeam.
					", equipo1marcador = null, equipo2marcador = null WHERE usuarioid = ".
					$userid." AND juegoid = (".$secondGameId[0]["id"].")";
				mysql_query($query,$link) or die('Errant query:  '.$query);

				$positions[] = array('firstflag' => $firstFlag, 'firstname' => $firstName, 'firstid' => $firstTeam,
						'secondflag' => $secondFlag, 'secondname' => $secondName, 'secondid' => $secondTeam);

				$results[] = array('posiciones'=>$positions);
			}
			else if($typePosition[0]["post"]["tipo"] == "2" || $typePosition[0]["post"]["tipo"] == "3" || $typePosition[0]["post"]["tipo"] == "4"){
				// Obtener los id de los equipos involucrados en el juego
				$query = 'SELECT equipoid1, equipoid2 FROM pronosticos WHERE id = '.$forecast;
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
				$gameNumber = substr($typePosition[0]["post"]["posicion"], 0, strpos($typePosition[0]["post"]["posicion"], ":"));
				//echo '- g:' . $typePosition[0]["post"]["posicion"] . ' w:' . $winTeam . ' l:' . $looseTeam . '-';
 				// sacar si el equipo esta posicionado en equipo1 o equipo2 en el juego destino
				$query = "SELECT id FROM juegos WHERE posicion LIKE '%w".$game."-%'";
				$team1Position = mysql_query($query,$link) or die('Errant query:  '.$query);

				$team1 = array();
				if(mysql_num_rows($team1Position)) {
					while($post = mysql_fetch_assoc($team1Position)) {
						$team1[] = array('post'=>$post);
					}
					$query = 'UPDATE pronosticos SET equipoid1 = '.$winTeam.', equipo1marcador = null, equipo2marcador = null WHERE usuarioid = '.$userid.' AND juegoid = ' . $team1[0]["post"]["id"];
					mysql_query($query,$link) or die('Errant query:  '.$query);
				}
				else {
					$query = "SELECT id FROM juegos WHERE posicion LIKE '%-w".$game."%'";
					$team2Position = mysql_query($query,$link) or die('Errant query:  '.$query);

					$team2 = array();
					if(mysql_num_rows($team2Position)) {
						while($post = mysql_fetch_assoc($team2Position)) {
							$team2[] = array('post'=>$post);
						}
					}
					$query = 'UPDATE pronosticos SET equipoid2 = '.$winTeam.', equipo1marcador = null, equipo2marcador = null WHERE usuarioid = '.$userid.' AND juegoid = ' . $team2[0]["post"]["id"];
					mysql_query($query,$link) or die('Errant query 305:  '.$query);
				}

				if($typePosition[0]["post"]["tipo"] == "4"){
					$query = "SELECT id FROM juegos WHERE posicion LIKE '%l".$game."-%'";
					$team1_3rd = mysql_query($query,$link) or die('Errant query:  '.$query);

					$team1_3rdPlace = array();
					if(mysql_num_rows($team1_3rd)) {
						while($post = mysql_fetch_assoc($team1_3rd)) {
							$team1_3rdPlace[] = array('post'=>$post);
						}

						$query = 'UPDATE pronosticos SET equipoid1 = '.$looseTeam.', equipo1marcador = null, equipo2marcador = null WHERE usuarioid = '.$userid.' AND juegoid = ' . $team1_3rdPlace[0]["post"]["id"];
						mysql_query($query,$link) or die('Errant query:  '.$query);
					}
					else{
						$query = "SELECT id FROM juegos WHERE posicion LIKE '%-l".$game."%'";
						$team2_3rd = mysql_query($query,$link) or die('Errant query:  '.$query);

						$team2_3rdPlace = array();
						if(mysql_num_rows($team2_3rd)) {
							while($post = mysql_fetch_assoc($team2_3rd)) {
								$team2_3rdPlace[] = array('post'=>$post);
							}

							$query = 'UPDATE pronosticos SET equipoid2 = '.$looseTeam.', equipo1marcador = null, equipo2marcador = null WHERE usuarioid = '.$userid.' AND juegoid = ' . $team2_3rdPlace[0]["post"]["id"];
							mysql_query($query,$link) or die('Errant query:  '.$query);
						}
					}
				}
			}
		}
	}
	echo json_encode(array('posiciones'=>$results));

	/* disconnect from the db */
	@mysql_close($link);
	die;
}
echo json_encode(array('status' => 'no params'));