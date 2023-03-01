import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders ,HttpParams,HttpErrorResponse} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(err: HttpErrorResponse) {
    let errMsg = ""
    if(!err.error || !err.error.error ){
      errMsg= "Network error"
    } else {
      errMsg = err.error.error
    }
    return throwError(errMsg)
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: new HttpHeaders(), params })
    .pipe(catchError(this.formatErrors));
  }

  
  getGeo(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { headers: new HttpHeaders(), params })
    .pipe(catchError(this.formatErrors));
  }
}
