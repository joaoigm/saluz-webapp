import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CabanasService } from './../../services/cabanas/cabanas.service';
import { Cabanas } from './../../types/types';

@Component({
  selector: 'app-cabana-feminino',
  templateUrl: './cabana-feminino.component.html',
  styleUrls: ['./cabana-feminino.component.scss']
})
export class CabanaFemininoComponent {
  cabanas: Cabanas
  cabanaEscolhida: { cabanaId: number, vagaId: number } | undefined;
  nome = '';
  email = '';
  celular = '';

  constructor(
    private toastr: ToastrService,
    private cabanaService: CabanasService
  ) {
    this.cabanas = cabanaService.getCabanasFeminino();
  }


  submit(): void {
    if(!this.cabanaEscolhida || !this.nome || !this.email || !this.celular) {
      this.toastr.error('Preencha todos os campos do formulário');
      return;
    }

    console.log({
      cabana: this.cabanaEscolhida,
      nome: this.nome,
      email: this.email,
      celular: this.celular
    });
  }
}
