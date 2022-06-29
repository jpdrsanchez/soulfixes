import api from '..'
import { DtoGetUserPayload } from './dtoGetUserPayload'
import { DtoGetUserResponse } from './dtoGetUserResponse'

export default class UserService {
  static async get(payload: DtoGetUserPayload) {
    const response = await api.get<DtoGetUserResponse>(
      `/user/${payload.email}`,
      { headers: { Authorization: `Bearer ${payload.token}` } }
    )

    return response.data
  }
}
