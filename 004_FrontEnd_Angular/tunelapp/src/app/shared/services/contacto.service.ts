import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {


  constructor(private httpClient : HttpClient) { }

  public recuperarContacto():Observable<any>{

    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("demo:demouser"));

    const httpOptions = {
      headers: headers_object
    };

    return this.httpClient.get<any>('http://localhost:33333/contact/contact?columns=cto_id,cat_id,cto_company,cto_contact_name,cto_phone,cto_email,cto_observations',httpOptions);
}
}

