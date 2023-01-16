import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {


  constructor(private httpClient : HttpClient) { }

  public recuperarContacto():Observable<any>{
    const auth=btoa('demo:demouser');
    const headers=new HttpHeaders().set('Authorization', `Basic ${auth}`);

    return this.httpClient.get<any>('http://localhost:33333/contact/contact?columns=cto_id,cat_id,cto_company,cto_contact_name,cto_phone,cto_email,cto_observations',{headers});
}
}

