import api from '..'
import { DtoGetServicesResponse } from './dtoGetServicesResponse'

export default class ServicesService {
  static async get(id: number) {
    const response = await api.get<DtoGetServicesResponse>(`/services/${id}`)

    return response.data.services
  }
}
