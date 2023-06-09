import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-transacciones-form',
  templateUrl: './transacciones-form.component.html',
  styleUrls: ['./transacciones-form.component.css']
})
export class TransaccionesFormComponent implements OnInit {

  constructor(public servicio: TransaccionesService) { }
  mail!:string;
  mon!:string;
  obtenido:any[]=[];
  filtrado:any[]=[];
  currency:any[]=[];
  ngOnInit(): void {
    this.getTransacciones();
  }

  public getTransacciones(){
    this.servicio.getTransacciones().subscribe(
      result=>{
        this.obtenido = result;
      },error=>{
        console.log("no ai trans");
      }
    )
  }

  public getByEmail(email:string){
    this.servicio.getTransByEmail(email).subscribe(
      resultado=>{
        this.filtrado=resultado;
        console.log(this.filtrado)
      },error=>{
        console.log('no ai filtrado');
      }
    )
  }

  public getByMoneda(moneda:string){
    this.servicio.getTransByMoneda(moneda).subscribe(
      respuesta=>{
        this.currency = respuesta;
      }
    )
  }

}
