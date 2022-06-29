import api from '..'
import { DtoCreateFavoritePayload } from './dtoCreateFavoritePayload'
import { DtoFavoritesResponse } from './dtoFavoritesResponse'

export default class FavoritesService {
  static async get(token: string) {
    const response = await api.get<DtoFavoritesResponse>('/show/favorites', {
      headers: { Authorization: `Bearer ${token}` }
    })

    return response.data
  }

  static async create(token: string, payload: DtoCreateFavoritePayload) {
    await api.post(
      `/create/favorite`,
      { ...payload },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
  }

  static async delete(token: string, id: string | number) {
    await api.delete(`/delete/favorite/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
