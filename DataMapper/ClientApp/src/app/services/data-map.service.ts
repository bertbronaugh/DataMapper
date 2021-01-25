import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataMap } from '../models/datamap';

@Injectable({
  providedIn: 'root'
})
export class DataMapService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = '/api/DataMaps/';
  }

  getDataMaps(): Observable<DataMap[]> {
    return this.http.get<DataMap[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getDataMap(dataMapId: number): Observable<DataMap> {
      return this.http.get<DataMap>(this.myAppUrl + this.myApiUrl + dataMapId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveDataMap(dataMap): Observable<DataMap> {
      return this.http.post<DataMap>(this.myAppUrl + this.myApiUrl, JSON.stringify(dataMap), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateDataMap(dataMapId: number, dataMap): Observable<DataMap> {
      return this.http.put<DataMap>(this.myAppUrl + this.myApiUrl + dataMapId, JSON.stringify(dataMap), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteDataMap(dataMapId: number): Observable<DataMap> {
      return this.http.delete<DataMap>(this.myAppUrl + this.myApiUrl + dataMapId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}