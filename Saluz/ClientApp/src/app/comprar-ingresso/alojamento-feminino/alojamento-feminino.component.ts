import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlojamentoService } from 'src/app/services/alojamento/alojamento.service';
import { Alojamento } from 'src/app/types/types';

@Component({
  selector: 'app-alojamento-feminino',
  templateUrl: './alojamento-feminino.component.html',
  styleUrls: ['./alojamento-feminino.component.scss'],
})
export class AlojamentoFemininoComponent implements OnInit {
  alojamento?: Alojamento;

  camaEscolhida: { id: number, tipo: ''} | undefined;
  nome = '';
  email = '';
  celular = '';

  constructor(
    private alojamentoService: AlojamentoService,
    private toastrService: ToastrService
  ) {

  }
  ngOnInit(): void {
    this.alojamento = this.alojamentoService.getAlojamentoFeminino();

  }

  submit(): void {

    if(this.camaEscolhida?.id === 0 || !this.nome || !this.email || !this.celular) {
      this.toastrService.error('Preencha todos os campos do formulário');
      return;
    }

    console.log({
      cama: this.camaEscolhida,
      nome: this.nome,
      email: this.email,
      celular: this.celular
    });
  }
}
