import { Injectable } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';

@Injectable()
export class HelperService { 
    private tabBarElement : any;
    private 
    constructor(private dialogs: Dialogs) { }
    
    gapAlert(message, title) {
        this.dialogs.alert(
            message,  // message
            title,            // title
            "Ok"                // buttonName
        );
    }

    gapConfirmAlert(message, title, yesButtonLabel, noButtonLabel, onConfirm) {
        this.dialogs.confirm(
             message, // message
             title,           // title
            [yesButtonLabel, noButtonLabel]         // buttonLabels
        ).then(onConfirm);
    }
  
    logout(){
        localStorage.setItem('userEmail', '');
        localStorage.setItem('userID', '0');
        localStorage.setItem('UserLoggedIn', 'false');
        
        // desaparece el nav bar
        this.tabBarElement = document.querySelector('#tabs div.tabbar');
        this.tabBarElement.style.display = 'none';
    }
  
    formatDate(date) {
        var _date = new Date(date);
        var monthNames = [
          "Enero", "Febrero", "Marzo",
          "Abril", "Mayo", "Junio", "Julio",
          "Agosto", "Septiembre", "Octubre",
          "Noviembre", "Diciembre"
        ];
      
        var day = _date.getDate().toString();
        var monthIndex = _date.getMonth();
      
        return day + ' ' + monthNames[monthIndex];
    }
}