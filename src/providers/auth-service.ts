import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Constants } from '../services/constants';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public http : Http) {
  }

  postData(data, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(Constants.API_ENDPOINT + type, JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  
  getData(data, url){
    return new Promise((resolve, reject) => {
      this.http.get(Constants.API_ENDPOINT + url+'?'+data).subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
        /*.toPromise()
	    .then(this.extractData);*/
    });
  }
}