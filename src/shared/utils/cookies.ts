import { parseCookies, setCookie } from 'nookies'

export default class Cookies {
  static get(cookieName: string) {
    const cookies = parseCookies()
    return cookies[cookieName] || null
  }

  static set(value: string, name: string) {
    const ONE_HOUR = 60 * 60
    setCookie(null, name, value, {
      maxAge: ONE_HOUR,
      path: '/'
    })
  }
}
