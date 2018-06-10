<?php
	include "helper.php";

	$query = "SELECT DISTINCT(LOWER(grupo)) as grupo FROM usuarios WHERE grupo IS NOT NULL ORDER BY grupo";
	$groups = mysql_query($query,$link) or die('Errant query:  '.$query);
	while($groupItem = mysql_fetch_assoc($groups)) {
		$group = $groupItem['group'];
		$query = "SELECT id FROM usuarios WHERE LOWER(grupo) = '$group'";
		$users = mysql_query($query,$link) or die('Errant query:  '.$query);

		if(mysql_num_rows($users)) {
			while($userItem = mysql_fetch_assoc($users)) {
				/* grab the posts from the db */
				$user = $userItem["id"];
				$query = "SELECT juegoid, equipoid1, equipoid2, equipo1marcador, equipo2marcador FROM pronosticos " .
				"WHERE usuarioid = $user AND equipo1marcador IS NOT null AND equipo2marcador IS NOT null";
				$result = mysql_query($query,$link) or die('Errant query:  '.$query);

				/* create one master array of the records */
				$points = 0;
				$scoresRight = 0;
				$winningTeams = 0;
				$passedTeams = 0;
				$tieGames = 0;
				if(mysql_num_rows($result)) {
					while($userGame = mysql_fetch_assoc($result)) {
						$query = "SELECT tipo, equipoid1, equipoid2, equipo1marcador, equipo2marcador FROM juegos WHERE id = " .
						$userGame["juegoid"] . " AND equipo1marcador IS NOT NULL";
						$realGames = mysql_query($query,$link) or die('Errant query:  '.$query);
						if(mysql_num_rows($realGames)) {
							while($realGame = mysql_fetch_assoc($realGames)) {
								if($realGame["tipo"] == "1"){
									// si el pronostico le atino al ganador y no al marcador
									if(((int)$realGame["equipo1marcador"] > (int)$realGame["equipo2marcador"] &&
										(int)$userGame["equipo1marcador"] > (int)$userGame["equipo2marcador"]) ||
										((int)$realGame["equipo2marcador"] > (int)$realGame["equipo1marcador"] &&
										(int)$userGame["equipo2marcador"] > (int)$userGame["equipo1marcador"])){
										{
											$points += 1;
											$winningTeams += 1;
											if((int)$realGame["equipo1marcador"] == (int)$userGame["equipo1marcador"] &&
											(int)$realGame["equipo2marcador"] == (int)$userGame["equipo2marcador"]){
												$points += 2;
												$scoresRight += 1;
											}
										}
									}
									// empate
									else if((int)$realGame["equipo1marcador"] == (int)$realGame["equipo2marcador"] &&
										(int)$userGame["equipo1marcador"] == (int)$userGame["equipo2marcador"]){
											$points += 1;
											$tieGames += 1;
									}
								}
								else {
									if($realGame["equipoid1"] == $userGame["equipoid1"]){
										$points += 1;
										$passedTeams += 1;
									}
									if($realGame["equipoid2"] == $userGame["equipoid2"]){
										$points += 1;
										$passedTeams += 1;
									}
									if($realGame["equipoid1"] == $userGame["equipoid1"] && $realGame["equipoid2"] == $userGame["equipoid2"])
									{
										if(((int)$realGame["equipo1marcador"] > (int)$realGame["equipo2marcador"] &&
											(int)$userGame["equipo1marcador"] > (int)$userGame["equipo2marcador"]) ||
											((int)$realGame["equipo2marcador"] > (int)$realGame["equipo1marcador"] &&
											(int)$userGame["equipo2marcador"] > (int)$userGame["equipo1marcador"])){
											{
												$points += 1;
												$winningTeams += 1;
												if((int)$realGame["equipo1marcador"] == (int)$userGame["equipo1marcador"] &&
												(int)$realGame["equipo2marcador"] == (int)$userGame["equipo2marcador"]){
													$points += 2;
													$scoresRight += 1;
												}
											}
										}
										else if((int)$realGame["equipo1marcador"] == (int)$realGame["equipo2marcador"] &&
											(int)$userGame["equipo1marcador"] == (int)$userGame["equipo2marcador"]){
												$points += 1;
												$tieGames += 1;
										}
									}
								}
							}
						}

					}
				}
				$query = "UPDATE usuarios SET puntos = '$points', marcadoresAcertados = '$scoresRight', equiposGanadores = '$winningTeams', equiposClasificados = '$passedTeams', empates = '$tieGames' WHERE id = '$user'";
				mysql_query($query,$link) or die('Errant query:  '.$query);
			}
		}
	}
	echo json_encode('listo');

	/* disconnect from the db */
	@mysql_close($link);