import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlojamentoFemininoComponent } from './alojamento-feminino/alojamento-feminino.component';
import { AlojamentoMasculinoComponent } from './alojamento-masculino/alojamento-masculino.component';
import { CabanaFemininoComponent } from './cabana-feminino/cabana-feminino.component';
import { CabanaMasculinoComponent } from './cabana-masculino/cabana-masculino.component';
import { ComprarIngressoRoutingModule } from './comprar-ingresso-routing.module';
import { ComprarIngressoComponent } from './comprar-ingresso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComprarIngressoComponent,
    CabanaMasculinoComponent,
    CabanaFemininoComponent,
    AlojamentoMasculinoComponent,
    AlojamentoFemininoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComprarIngressoRoutingModule,
    NgxMaskModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComprarIngressoModule { }
