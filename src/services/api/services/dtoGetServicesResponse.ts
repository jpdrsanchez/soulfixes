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
}

export interface DtoGetServicesResponse {
  services: DtoService[]
  message: string
}
