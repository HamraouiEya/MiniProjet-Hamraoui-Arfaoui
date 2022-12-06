import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AbonnementComponent } from "./abonnement/abonnement.component";
import { ListAbonnementsComponent } from "./listAbonnements/list-abonnements.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { SelectionComponent } from './selection/selection.component';
import { CommentComponent } from './comment/comment.component';
import { FilterPipe } from './filtrer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AboutusComponent,
    FooterComponent,
    FormulaireComponent,
    HomeComponent,
    AbonnementComponent,
    ListAbonnementsComponent,
    HeaderComponent,
    SelectionComponent,
    CommentComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
