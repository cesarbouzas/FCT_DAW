import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/shared/interfaces/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
@Input()
  public contacto:Contacto;

  constructor() {
    this.contacto={
cto_id:'',
cat_id:'',
cto_company:'',
cto_contact_name:'',
cto_phone:'',
cto_email:'',
cto_observations:''
    }
  }

  ngOnInit(): void {
  }

}
