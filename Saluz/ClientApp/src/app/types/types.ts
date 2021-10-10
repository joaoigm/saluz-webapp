export type Alojamento = {
  genero: 'M' | 'F'
  camas: Camas
}

export type Camas = Cama[]

export type Cama = {
  codigo: string,
  disponivel: boolean
}


export type Barraca = {
  codigo: string
  genero: 'M' | 'F' | ''
  vagas: Vaga[]
}

export type Vaga = {
  codigo: string
  disponivel: boolean
}

export type Barracas = Barraca[]


export type FormularioInscricao = {
  nome?: string,
  igreja?: string,
  idade?: string,
  email?: string,
  celular?: string,
  sexo?: 'M' | 'F',
  quantidadeParcelas?: number,
  vencimento?: number,
  dataPrimeiroPagamento?: string

  acomodacaoEscolhida?: { camaId: string } | { barracaId: string, vagaId: string }

}
