export interface DtoSingleServiceResponse {
  data: DtoService
  countProfessionals: number
}

export interface DtoService {
  id: number
  title: string
  desc: string
  image: string
  pricing: number
  virtual: boolean
  in_person: boolean
  type_service: number
  is_top: boolean
  createdAt: string | null
  updatedAt: string
  relations?: Relations[] | null
}
export interface Relations {
  id: number
  professional_id: number
  service_id: number
  price: number
  status: number
  reason: string
  createdAt: string
  updatedAt: string
  professionals: Professionals
}

export interface Professionals {
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
