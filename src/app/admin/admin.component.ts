import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonnement } from '../abonnement';
import { AbonnementService } from '../abonnement.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
}) 
export class AdminComponent implements OnInit {
public currentProduit:Abonnement;
abonnement !:Abonnement[];
form:FormGroup=new FormGroup({
  id: new FormControl(),
  libelle:new FormControl(''),
  prix:new FormControl(), 
  img:new FormControl(''),
  photo:new FormArray([]),

})
  getAbonnements: any;

  constructor(private activatedRouter:ActivatedRoute,private produitService:AbonnementService,private f:FormBuilder,private router:Router) { }


display=false;

id:number=this.activatedRouter.snapshot.params['id'];
produits:Abonnement[]

 afficherProduits(){
    this.produitService.getAbonnements()
    .subscribe( data => this.produits = data)
    }

    onAjouter(){
   
      this.produitService.ajouterAbonnement(this.form.value)
      .subscribe(data => this.produits.push(data) );
      this.router.navigate(['/list-abonnements']);
      }
      generer(){
      
  
    this.router.navigate(['/list-abonnements']);
  
      }
  ngOnInit(): void {
    this.produitService
    .getAbonnements()
    .subscribe((data) =>(this.abonnement=data));
      
     this.produitService.getAbonnementsById(this.id).subscribe
    (data => this.currentProduit=data as Abonnement);
   
}


public get lesimages()
{
return this.form.get('img') as FormArray;
}

onAjouterimage()
{
   this.lesimages.push(this.form.controls['img'])
}

updateproduit(id:number){
  this.produitService.updateProduit(id, this.form.value)
  .subscribe(data => this.currentProduit=data);
  this.router.navigate(['/list-abonnements']);
  }

 supprimer(id:number){
  
  this.produitService.suprimerAbonnement(id).subscribe(data =>{alert('deleted!!')});
this.produitService.getAbonnements().subscribe((Abonnement)=>{
  this.abonnement= this.abonnement;
})

;
  
  
 }
}
