import api from '..'
import DtoLoginPayload from './dtoLoginPayload'
import { DtoLoginResponse } from './dtoLoginResponse'

export default class LoginService {
  static async login(payload: DtoLoginPayload) {
    const response = await api.post<DtoLoginResponse>('/login', payload)

    return response.data
  }
}
