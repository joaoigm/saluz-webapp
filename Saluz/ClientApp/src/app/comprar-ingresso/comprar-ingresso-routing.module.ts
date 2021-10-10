import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarIngressoComponent } from './comprar-ingresso.component';

const routes: Routes = [
  { path: '', component: ComprarIngressoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprarIngressoRoutingModule { }
