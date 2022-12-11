import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ENV = environment;

  constructor(
    public http: Http) 
  { }

  login(datos_,callback){

    this.http.post(this.ENV.url_servidor+'1b1602b6-2b60-40a3-a80b-3780b9bb9aa8',
    {
        datos:datos_
    }).subscribe((result: any) => {
        console.log(result);
        callback(result);
    },(error) => {
        console.log(error);
        callback(false);
    });   


}


}
