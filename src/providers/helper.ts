import { Injectable } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';
import { Platform } from 'ionic-angular';

@Injectable()
export class HelperService {
    private tabBarElement : any;
    private
    constructor(private dialogs: Dialogs, private pfm: Platform) {
        }

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
        if(this.pfm.is('ios')){
            var arr = date.split(/[- :]/);
            _date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
        }

        var monthNames = [
          "Enero", "Febrero", "Marzo",
          "Abril", "Mayo", "Junio", "Julio",
          "Agosto", "Septiembre", "Octubre",
          "Noviembre", "Diciembre"
        ];

        var day = _date.getDate();
        var monthIndex = _date.getMonth();

        return day + ' ' + monthNames[monthIndex];
    }

    searchNumber(numbers, number){
        for(var i = 0; i < numbers.length; i++){
            if(numbers[i].numero == number)
                return true;
        }
        return false;
    }
}