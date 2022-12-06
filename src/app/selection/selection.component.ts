import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Abonnement } from '../abonnement';
import { AbonnementService } from '../abonnement.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  abonnements!:Abonnement;
  id:number=0;

  @Input() abonnement!:Abonnement;
  constructor (private abn:AbonnementService,private activatedRouter:ActivatedRoute ) { }
  
  ngOnInit(): void {
   this.id=this.activatedRouter.snapshot.params['id'];
   this.abn.getAbonnementsById(this.id).subscribe((data)=>(this.abonnements=data));
  }

}
