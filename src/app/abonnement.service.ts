import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abonnement } from './abonnement';


const URL = "http://localhost:3000/abonnements";

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {


  constructor(private http: HttpClient) { }
  getAbonnements():Observable<Abonnement[]>{
    return this.http.get<Abonnement[]> (URL);
    }

    getAbonnementsById(id:number):Observable<Abonnement>
    {
      return this.http.get<Abonnement>(URL+"/"+id);
    }
    ajouterAbonnement(p:Abonnement):Observable<Abonnement>{
      return this.http.post<Abonnement>(URL, p);
      } 
          
      updateProduit(id:number, a:Abonnement):Observable<Abonnement>{
        return this.http.put<Abonnement>(URL+"/"+ id, a);
        }
       
        addCom(s:string):Observable<string>{
          return this.http.post<string>(URL , s);
          }
          
   suprimerAbonnement(id:number){
    return this.http.delete(URL+"/"+id);
   }
}
