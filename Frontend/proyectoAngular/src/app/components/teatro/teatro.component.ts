import { Component, OnInit } from '@angular/core';
import { TeatroService } from 'src/app/services/teatro.service';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {

  constructor(public servicio: TeatroService) { }

  tickets:any[]=[];
  idEspectador!:string;
  espect:any={};

  ngOnInit(): void {
    this.getTickets();
  }

  public getTickets(){
    this.servicio.getTickets().subscribe(
      respuesta=>{
        this.tickets = respuesta;
        this.idEspectador = respuesta.espectador;
        this.getEspectadores(this.idEspectador);
      },error=>{
        console.log('no ai tickets')
      }
    )
    
     
  }

  public getEspectadores(ides:string){
    this.servicio.getEspect(ides).subscribe(
      respuesta=>{
        this.espect=respuesta;
        console.log(this.espect.nombre);
      },error=>{
        console.log('no ai espectadores')
      }
    )
  }

  public eliminarTicket(id:string){
    this.servicio.deleteTicket(id).subscribe(
      resp=>{
        alert("Ticket Eliminado")
      },error=>{
        console.log("no ai eliminao");
      }

    )
    this.getTickets();
  }


}
