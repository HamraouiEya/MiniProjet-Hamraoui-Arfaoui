import { Component, OnInit, ɵɵstylePropInterpolate7 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Abonnement } from '../abonnement';

import { AbonnementService } from '../abonnement.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
produits:Abonnement[]=[];
p:Abonnement
  constructor(private produitS:AbonnementService,private router:Router,private f:FormBuilder) { }
 

  form!:FormGroup
  display=false;
  onclick(event:Element){
    event.classList.toggle('fa-times');
    event.classList.toggle('active');
    this.display=!this.display;
  }
  i:number
  prod:Abonnement[]
  afficherProduits(){
    this.produitS.getAbonnements()
    .subscribe( data => this.produits = data)
    }
  
  /*search(){
    let b=this.form.controls.search.value
// this.p=this.produits.find(n => n.libelle=b);
this.produitS.getProduit().subscribe(data => this.produits=data);
this.produitS.getProduit().subscribe(data => this.p=data.find(l => l.libelle== b));

console.log(this.p)


this.router.navigate(['/Package',this.p.place,b]);
  
}*/

fn(){
  let b=this.form.controls['search'].value;
  this.produitS.getAbonnementsById(0).subscribe(data => this.i=data.id);
  this.produitS.getAbonnements().subscribe(data => this.produits=data);
  this.produitS.getAbonnements().subscribe(data => this.p=data.find(l => l.libelle== b));
  
  if (this.p!=undefined ) {
  this.router.navigate(['/Services',this.p.libelle,b]);
  }
  else if (this.i!=0 ) {
  this.router.navigate(['/Services',b]);
  }
  else alert("ERREUR");
}



  toform(){
    this.router.navigate(['../authentification']);
  }
  
  logout(){
    return this.logout();
  }
  
  
  signIn(){
    return this.signIn();
  }

  ngOnInit(): void {
    this.afficherProduits()
    this.form=this.f.group({
      search:['']
    })

  }}
