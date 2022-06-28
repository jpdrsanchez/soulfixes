export interface DtoGetUserResponse {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  district: string
  city: string
  state: string
  Country: string
  zip_code: string
  image: string
  status: number
  favorite: DtoGetUserResponse[]
}
