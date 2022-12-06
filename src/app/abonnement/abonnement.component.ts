import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Abonnement } from '../abonnement';
import { AbonnementService } from '../abonnement.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {
  @Input() abonnement!:Abonnement;
  abonnements!:Abonnement[];
  // abonnement!: Abonnement;
  constructor(private router:Router ,private abn:AbonnementService) { }


  ngOnInit(): void {
  }
  onClick()
  {
    this.router.navigate(['/Selection']);
  }
}
