import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  urlBase :string="http://localhost:3000/api/producto/";
  constructor(private _http: HttpClient) { }

  public getProductosLista():Observable<any>{
    let HttpOption = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams()
    }
    return this._http.get<any>(this.urlBase,HttpOption);
  }

  public postProducto(
    nombre: string,
    descripcion: string,
    imagen: string,
    precio: number,
    stock: number,
    destacado: boolean
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      nombre,
      descripcion,
      imagen,
      precio,
      stock,
      destacado
    };

    return this._http.post(this.urlBase + 'post', body, httpOptions);
  }
}