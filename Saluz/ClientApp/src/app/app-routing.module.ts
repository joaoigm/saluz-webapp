import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comprar-ingresso',
  },
  {
    path: 'comprar-ingresso',
    loadChildren: () =>
      import('./comprar-ingresso/comprar-ingresso.module').then(
        (m) => m.ComprarIngressoModule
      ),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
