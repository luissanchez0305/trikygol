import { Component } from '@angular/core';

/**
 * Generated class for the GamesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'games',
  templateUrl: 'games.html'
})
export class GamesComponent {

  text: string;

  constructor() {
    // dentro del llamado de json para saber los juegos del grupo
    //{
      /*
        Si es FIFA:
          Si el marcador1 o marcador2 del juego es nulo
            entonces poner un <span> con "N/D"
          Si el marcador1 o marcador2 del juego no es nulo
            entonces poner un span con el marcador correspondiente
        Si no es fifa
          Poner un <input> con el marcador correspondiente
      */
    //}
    console.log('Hello GamesComponent Component');
    this.text = 'Hello World';
  }

}
