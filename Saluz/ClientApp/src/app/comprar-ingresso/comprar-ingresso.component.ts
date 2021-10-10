import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ToastrService } from 'ngx-toastr';
import { AlojamentoService } from 'src/app/services/alojamento/alojamento.service';
import { Alojamento, Barracas } from 'src/app/types/types';
import { BarracasService } from 'src/app/services/barracas/barracas.service';
import { Cama, FormularioInscricao } from './../types/types';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-comprar-ingresso',
  templateUrl: './comprar-ingresso.component.html',
  styleUrls: ['./comprar-ingresso.component.scss']
})
export class ComprarIngressoComponent implements OnInit {
  isLoading = false;
  inscricao: FormularioInscricao = {
    acomodacaoEscolhida: undefined,
    nome: undefined,
    igreja: undefined,
    idade: undefined,
    celular: undefined,
    email: undefined,
    quantidadeParcelas: undefined,
    sexo: undefined,
    vencimento: undefined
  }
  passo = 1;
  camasDisponiveis: Cama[];
  barracas: Barracas;
  alojamento: Alojamento;
  acomodacaoEscolhida: { camaId: string, tipo: 'A' | 'B' } | { barracaId: string, vagaId: string, tipo: 'A' | 'B' } | undefined

  constructor(
    private toastr: ToastrService,
    private alojamentoService: AlojamentoService,
    private barracaService: BarracasService,
    private http: HttpClient
  ) {
    //
  }

  ngOnInit(): void {
    //
  }

  submit(): void {
    if(!this.acomodacaoEscolhida) {
      this.toastr.error('Por favor escolha uma acomodação');
      return;
    }
    const inscrito = {
      ...this.inscricao, ...this.acomodacaoEscolhida,

    }
    this.isLoading = true;
    this.http.post('/registrarVaga', inscrito)
    .pipe(
      finalize(() => {
        this.isLoading = false
      })
    )
    .subscribe(
      _ => {
        this.toastr.success('Inscrição realizada com sucesso');
        this.toastr.success('Salve a imagem do seu ingresso. Sem ela, você não poderá entrar no sítio', undefined, {timeOut: 10000});
        this.passo = 3;
      },
      _ => {
        this.toastr.error('Ocorreu um erro ao relizar sua inscrição. Tente novamente mais tarde');
        this.irPasso1();
      }
    );
    // localStorage.setItem('jaInscrito', "true");
  }

  async irPasso2(): Promise<void> {
    if(
      !this.inscricao.nome ||
      !this.inscricao.email ||
      !this.inscricao.celular ||
      !this.inscricao.sexo ||
      !this.inscricao.quantidadeParcelas ||
      !this.inscricao.vencimento ||
      !this.inscricao.dataPrimeiroPagamento) {
      this.toastr.error('Por favor preencha todos os campos');
      return;
    }
    this.isLoading = true;

    if(this.inscricao.sexo === 'M') {
      this.alojamento = await this.alojamentoService.getAlojamentoMasculino().toPromise();
      this.barracas = await this.barracaService.getbarracasMasculino().toPromise();
      this.camasDisponiveis = this.alojamento.camas;
    } else {
      this.alojamento = await this.alojamentoService.getAlojamentoFeminino().toPromise();
      this.barracas = await this.barracaService.getbarracasFeminino().toPromise();
      this.camasDisponiveis = this.alojamento.camas;
    }
    this.passo = 2;
    this.isLoading = false;
  }

  irPasso1(): void {
    this.acomodacaoEscolhida = undefined;
    this.passo = 1;
  }

  imagemAlojamento(): string {
    if(this.inscricao.sexo === 'M') {
      return 'assets/diagrama-masculino.png'
    } else {
      return 'assets/diagrama-feminino.png'
    }
  }

  // A e B é Alojamento ou Barraca
  teste(id: string, tipo: 'A' | 'B', vagaCabana?: string): void {

    const todosLabels = document.querySelectorAll('.label-checkbox.disponivel');
    todosLabels.forEach(l => l.classList.remove('escolhido'));

    switch(tipo) {
      case 'A': {
        const labelCheckboxEscolhido = document.querySelector(`#label-cama-${id}`);
        labelCheckboxEscolhido.classList.add('escolhido');
        this.acomodacaoEscolhida = { camaId: id, tipo: 'A' };
        break;
      }
      case 'B': {
        const labelCheckboxEscolhido = document.querySelector(`#label-barraca-${id}-${vagaCabana}`);
        labelCheckboxEscolhido.classList.add('escolhido');
        this.acomodacaoEscolhida = { barracaId: id, vagaId: vagaCabana, tipo: 'B' };
        break;
      }
    }

    console.log(this.acomodacaoEscolhida);
  }

  abaMudou(_: MatTabChangeEvent): void {
    this.limparSelecionados();
  }

  limparSelecionados() {
    const todosLabels = document.querySelectorAll('.label-checkbox.disponivel');
    todosLabels.forEach(l => l.classList.remove('escolhido'));
    this.acomodacaoEscolhida = undefined;
  }

  pegarCodigoInscricao(): string {
    let codigo = '';

    codigo += this.acomodacaoEscolhida.tipo;

    switch(this.acomodacaoEscolhida.tipo) {
      case 'A': {
        codigo += this.inscricao.sexo;
        codigo += '0';
        if(parseInt(this.acomodacaoEscolhida['camaId']) < 10 ) {
          codigo += '0'
        }
        codigo += this.acomodacaoEscolhida['camaId'];
        break;
      }
      case 'B' :{
        codigo += 'A';
        if(parseInt(this.acomodacaoEscolhida['barracaId']) < 10 ) {
          codigo += '0'
        }
        codigo += this.acomodacaoEscolhida['barracaId'];
        codigo += this.acomodacaoEscolhida['vagaId'];
        break;
      }
    }

    return 'assets/' + codigo + '.png';
  }
}
