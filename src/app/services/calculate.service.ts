import { Kasboek } from './../models/kasboek';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Deelnemer } from "../models/deelnemer";

@Injectable()
export class CalculateService {
  readonly base_url: string = "http://localhost:1234/api/";

  constructor(private httpClient: HttpClient) {}

  calculateTransactions(deelnemers: Deelnemer[]): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const params = new HttpParams();

    const body = {
      "info": "Galaxy A5 2017",
      "event": "Avondje Bios",
      "deelnemers": deelnemers
    };

    return this.httpClient.post<any>(
      this.base_url+'calculator',
      body,
      {headers: headers, params: params}
      ).pipe(
        map(result => {
          return result;
        }),

        catchError((err)=>{
          console.error(err);
          return of(err);
        })
      );
  }

  overview(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const params = new HttpParams();

    return this.httpClient.get<Kasboek[]>(
      this.base_url+'calculator',
      {headers: headers, params: params}
      ).pipe(
        map(Kasboek => {
          return Kasboek;
        }),

        catchError((err)=>{
          console.error(err);
          return of(err);
        })
      );
  }


}
