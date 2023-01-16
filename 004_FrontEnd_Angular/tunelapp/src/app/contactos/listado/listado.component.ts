import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/shared/services/contacto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoContactos :any;

  constructor(private contactoService:ContactoService) { }

  ngOnInit(): void {
    this.recuperarContacto();
  }
  private recuperarContacto():void{
    this.contactoService.recuperarContacto().subscribe(
      (data)=>{this.listadoContactos=data

  },
  (error)=>{},
  ()=>{}
    );
}

}
