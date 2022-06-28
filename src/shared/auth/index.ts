import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import UserService from 'services/api/user'

export default class Auth {
  static async user(ctx: GetServerSidePropsContext) {
    const cookies = parseCookies(ctx)

    if (!cookies.user_info || !cookies.auth_token) return false

    try {
      const userInfo: { email: string } = JSON.parse(cookies.user_info)
      const response = await UserService.get({ email: userInfo.email })
      return response
    } catch {
      return false
    }
  }
}
