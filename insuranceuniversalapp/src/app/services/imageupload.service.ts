import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable,of as observableOf} from "rxjs/index";
import {EMPTY} from "rxjs/index";
import{pipe} from "rxjs/index";
import{throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  ' multipart/form-data;boundary=something'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {

  constructor(private http: HttpClient) {

  }

  public sendImage(uploadImageData:any):Observable<any>
  {
//pivotal cf
    //http://localhost:7070/addboauser
    //api gateway
    return this.http.post('https://uploadimage-cf.cfapps.io/upload',
      uploadImageData).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  public getImage(imageName:any):Observable<any> {
    //Make a call to Spring Boot to get the Image Bytes.
    return this.http.get('https://uploadimage-cf.cfapps.io/get/' + imageName);
  }
}
