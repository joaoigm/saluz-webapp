import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ComprarIngressoRoutingModule } from './comprar-ingresso-routing.module';
import { ComprarIngressoComponent } from './comprar-ingresso.component';



@NgModule({
  declarations: [
    ComprarIngressoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComprarIngressoRoutingModule,
    NgxMaskModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class ComprarIngressoModule { }
