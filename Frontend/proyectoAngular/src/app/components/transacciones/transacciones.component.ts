import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  resultadoConversion: any = {};
  listaMonedas: any = {};
  arrayCodigos: any = {};
  array: string[]=[];
  origenLista: string = '';
  destinoLista: string = '';
  resultadoLista: string = '';
  emailCliente!:string;
  tasa: number = 0.75;
  cantidadDestino!:string;
  constructor(public monedas: TransaccionesService) { }

  ngOnInit(): void {
    //this.poblarLista();
  }
  
  public obtenerParam() {
    let resul = this.resultadoLista;
    let orig = this.origenLista;
    let dest = this.destinoLista;
    this.convertir(resul,orig,dest);

  }

  poblarLista() {
    this.monedas.getListaMonedas().subscribe(
      lista => {
          this.listaMonedas = lista;
          this.llenarArrayCodigos();
      }, error => {
        console.log("no ai lista");
      }
    )
    
  }

  llenarArrayCodigos() {
    for (let i = 0; i < 141; i++) {
      this.arrayCodigos[i] = this.listaMonedas.currencies[i].code;
      this.array[i] = this.arrayCodigos[i];
    }
    console.log("Lista llena", this.arrayCodigos);
  }

  public convertir(resultado: string, origen: string, destino: string) {
    this.monedas.postConvertidor(resultado, origen, destino).subscribe(
      result => {
        this.resultadoConversion = result;
        this.cantidadDestino = this.resultadoConversion.result;
        console.log(this.resultadoConversion.result);
      }, err => {
        console.log("error kapo");
      }
    )
  }

  public enviarDatos(origen: string, cantidadOrigen: string, destino: string, resultado: string, emailCliente: string, tasa: number) {
    

    const numeroEntero = parseFloat(cantidadOrigen);
    const numeroEntero2 = parseFloat(resultado);


    this.monedas.enviarDatos( numeroEntero,numeroEntero2,origen,destino,emailCliente, tasa).subscribe(
      result => {
        console.log(result);
        alert("Datos de Transaccion Guardados");
      }, err => {
        console.log("error kapo");
      }
    );
  }

}
