import { parseCookies } from 'nookies'

export default class Cookies {
  static get(cookieName: string) {
    const cookies = parseCookies()
    return cookies[cookieName] || null
  }
}
