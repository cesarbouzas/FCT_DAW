import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AppRoutingModule } from './app-routing.module';
import { ListadoComponent } from './contactos/listado/listado.component';
import { ContactoComponent } from './contactos/listado/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactosComponent,
    ListadoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
