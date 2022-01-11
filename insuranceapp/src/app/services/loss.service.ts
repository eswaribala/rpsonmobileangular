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
export class LossService {

  constructor(private http: HttpClient) {

  }

  public sendLossDetails(uploadData:any):Observable<any>
  {
//pivotal cf
    //http://localhost:7070/addboauser
    //api gateway
    return this.http.post('https://localhost:44330/api/Loss/AddLoss',
      uploadData).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }


}
