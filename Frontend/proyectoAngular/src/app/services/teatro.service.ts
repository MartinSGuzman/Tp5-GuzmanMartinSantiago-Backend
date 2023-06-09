import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {

  constructor(private http: HttpClient) { }

  public getTickets():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = "http://localhost:3000/api/teatro/ticket";
    return this.http.get<any>(url, httpOptions);
  }

  public getEspect(ide:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `http://localhost:3000/api/teatro/espectador/${ide}`;
    return this.http.get<any>(url, httpOptions);
  }

  public deleteTicket(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let url = `http://localhost:3000/api/teatro/ticket/${id}`;
    return this.http.get<any>(url, httpOptions);
    
  }
}
