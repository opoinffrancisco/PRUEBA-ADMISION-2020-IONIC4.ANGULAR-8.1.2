import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { configService } from '../api/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: Http,
    public config : configService) 
  { }

  login(datos_,callback){

    this.http.post(this.config.url_servidor+'5e2c87d33100007500267f37',
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
