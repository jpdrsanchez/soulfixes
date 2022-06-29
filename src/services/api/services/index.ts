import api from '..'
import { DtoGetServicesResponse } from './dtoGetServicesResponse'
import { DtoSingleServiceResponse } from './dtoGetSingleServiceResponse'

export default class ServicesService {
  static async get(id: number) {
    const response = await api.get<DtoGetServicesResponse>(`/services/${id}`)

    return response.data.services
  }

  static async getSingle(id: string | number) {
    const response = await api.get<DtoSingleServiceResponse>(
      `/service/professional/${id}`
    )

    return response.data
  }
}
