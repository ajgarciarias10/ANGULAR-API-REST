import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { elbicho } from './modelo/elbicho.model';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

 
  constructor(private http: HttpClient) {

   }
   getTypeofpokemon():Observable<elbicho[]>{
    var request ="https://jsonplaceholder.typicode.com/posts/1/comments"
 

   return this.http.get<elbicho[]>(request);
    
    

  }


}
 