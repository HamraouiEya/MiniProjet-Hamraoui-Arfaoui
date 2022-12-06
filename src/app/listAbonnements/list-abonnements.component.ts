import { Component, OnInit } from '@angular/core';
import { Abonnement } from '../abonnement';
import { AbonnementService } from '../abonnement.service';
@Component({
  selector: 'app-list-abonnements',
  templateUrl: './list-abonnements.component.html',
  styleUrls: ['./list-abonnements.component.css']
})
export class ListAbonnementsComponent implements OnInit {
  abonnements!:Abonnement[];
  constructor(private abn:AbonnementService) { };

  ngOnInit(): void {
    this.abn
    .getAbonnements()
    .subscribe((data) =>(this.abonnements=data));
  }

}
