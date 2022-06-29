export interface DtoFavoritesResponse {
  favorites: DtoFavorites[]
}

export interface DtoFavorites {
  id: number
  patient_id: number
  professional_id: number
  createdAt: string
  updatedAt: string
  profs: DtoProfessional
}

export interface DtoProfessional {
  id: number
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  formation: string
  specialties: string
  desc: string
  district: string
  city: string
  state: string
  country: string
  how_meet_us: string
  zip_code: string
  image: string
  average: number
  status: number
  createdAt: string
  updatedAt: string
}
