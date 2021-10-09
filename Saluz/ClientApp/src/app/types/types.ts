export type Alojamento = {
  vagasDisponiveis: number,
  camaA: Camas,
  camaB: Camas
}

export type Camas = Cama[]

export type Cama = {
  id: number,
  disponivel: boolean
}


export type Cabana = {
  id: number,
  vagas: Vaga[]
}

export type Vaga = {
  id: number,
  disponivel: boolean
}

export type Cabanas = Cabana[]
