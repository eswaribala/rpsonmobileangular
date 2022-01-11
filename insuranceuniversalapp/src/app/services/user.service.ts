import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable,of as observableOf} from "rxjs/index";
import {EMPTY} from "rxjs/index";
import{pipe} from "rxjs/index";
import{throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  public validateUser(userObj:any):Observable<any>
  {
//pivotal cf
    //http://localhost:7070/addboauser
    //api gateway
    return this.http.get('https://blog-cf.cfapps.io/findboauserbyname/'+userObj.userName);


  }


}
