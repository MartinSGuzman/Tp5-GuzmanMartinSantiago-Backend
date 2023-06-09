import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor(private http: HttpClient) { }
  public getListaMonedas(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8387a16dbemsh901c933a2e27b14p1c6498jsn3fc50b68a9af',
        'X-RapidAPI-Host': 'currency-converter219.p.rapidapi.com'
      })
    }
    return this.http.get('https://currency-converter219.p.rapidapi.com/currencies', httpOption);
  }

  public postConvertidor(resultado: string, origen: string, destino: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '1bb3ee1d91msh066759d4572c6e8p1a9ee5jsn2a2e29199ace',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    const data = new HttpParams()
      .set('from-value', resultado)
      .set('from-type', origen)
      .set('to-type', destino)
    return this.http.post<any[]>("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", data, httpOption);
  }

  public enviarDatos(cantidadOrigen: number, cantidadDestino: number, origen: string, destino: string, emailCliente: string, tasa: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      monedaOrigen: origen,
      cantidadOrigen: cantidadOrigen,
      monedaDestino: destino,
      cantidadDestino: cantidadDestino,
      emailCliente: emailCliente,
      tasaConversion: tasa
    };

    return this.http.post("http://localhost:3000/api/transaccion", body, httpOptions);
  }

  public getTransacciones(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>("http://localhost:3000/api/transaccion", httpOptions);
  }

  public getTransByEmail(email: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `http://localhost:3000/api/transaccion/${email}`;
    return this.http.get<any>(url, httpOptions);
  }

  public getTransByMoneda(moneda:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `http://localhost:3000/api/transaccion/moneda/${moneda}`;
    return this.http.get<any>(url, httpOptions);
  }
}

