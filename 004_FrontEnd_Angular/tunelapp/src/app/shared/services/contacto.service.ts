import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ContactoService {
  private url: string ='http://localhost:33333/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('demo:demouser'),
    }),
  };

  constructor(private httpCliente: HttpClient) {
  }

  public getCategorias(){
    return this.httpCliente.get(this.url, this.httpOptions);
  }
}


