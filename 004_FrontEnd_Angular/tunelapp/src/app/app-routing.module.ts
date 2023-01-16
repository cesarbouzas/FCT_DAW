import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { ListadoComponent } from './contactos/listado/listado.component';



const routes : Routes=[
  {path:'contactos',component:ContactosComponent}
  ];

@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
