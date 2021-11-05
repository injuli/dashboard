import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: '**', redirectTo: ''}

  // { path: '', redirectTo: 'cars', pathMatch: "full"},
  // { path: 'cars', component: CardsComponent},
  // { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
