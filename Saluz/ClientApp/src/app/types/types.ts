export type Alojamento = {
  genero: 'M' | 'F'
  camas: Camas
}

export type Camas = Cama[]

export type Cama = {
  id: number,
  tipo: 'A' | 'B'
  disponivel: boolean
}


export type Cabana = {
  id: number
  genero: 'M' | 'F'
  vagas: Vaga[]
}

export type Vaga = {
  id: number
  disponivel: boolean
}

export type Cabanas = Cabana[]
