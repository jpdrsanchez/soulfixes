import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import FavoritesService from 'services/api/favorites'
import UserService from 'services/api/user'

export default class Auth {
  static async user(ctx: GetServerSidePropsContext) {
    const cookies = parseCookies(ctx)

    if (!cookies.user_info || !cookies.auth_token) return false

    try {
      const userInfo: { email: string } = JSON.parse(cookies.user_info)
      const response = await UserService.get({
        email: userInfo.email,
        token: cookies.auth_token
      })
      return response
    } catch {
      return false
    }
  }

  static async userFavorites(ctx: GetServerSidePropsContext) {
    const cookies = parseCookies(ctx)

    if (!cookies.user_info || !cookies.auth_token) return false

    try {
      const userInfo: { email: string } = JSON.parse(cookies.user_info)
      const response = await Promise.all([
        UserService.get({
          email: userInfo.email,
          token: cookies.auth_token
        }),
        FavoritesService.get(cookies.auth_token)
      ])
      return response
    } catch {
      return false
    }
  }
}
