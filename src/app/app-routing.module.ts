import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { ListAbonnementsComponent } from './listAbonnements/list-abonnements.component';
import { SelectionComponent } from './selection/selection.component';
const routes:Routes =[
{path:'Home', component:HomeComponent},
{path:'list-abonnements',component:ListAbonnementsComponent},
{path:'Formulaire',component:FormulaireComponent},
{path: 'admin',component:AdminComponent},
{path:'propos',component:AboutusComponent},
{path:'abommenent',component:AboutusComponent},
{path:'abonnement/:id',component:SelectionComponent},
{path:'', redirectTo:'Home', pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
