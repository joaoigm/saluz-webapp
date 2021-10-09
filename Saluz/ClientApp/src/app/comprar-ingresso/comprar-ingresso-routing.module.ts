import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarIngressoComponent } from './comprar-ingresso.component';
import { CabanaFemininoComponent } from './cabana-feminino/cabana-feminino.component';
import { CabanaMasculinoComponent } from './cabana-masculino/cabana-masculino.component';
import { AlojamentoFemininoComponent } from './alojamento-feminino/alojamento-feminino.component';
import { AlojamentoMasculinoComponent } from './alojamento-masculino/alojamento-masculino.component';

const routes: Routes = [
  { path: '', component: ComprarIngressoComponent, children: [
    { path: 'cabana-feminino', component: CabanaFemininoComponent },
    { path: 'cabana-masculino', component: CabanaMasculinoComponent },
    { path: 'alojamento-feminino', component: AlojamentoFemininoComponent },
    { path: 'alojamento-masculino', component: AlojamentoMasculinoComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprarIngressoRoutingModule { }
