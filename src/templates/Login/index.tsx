import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/Container'
import * as S from './styles'
import { IoCheckmark } from 'react-icons/io5'

const Login = () => {
  return (
    <S.Login>
      <Container>
        <S.LoginWrapper>
          <S.LoginLogo>
            <Image
              src="/images/login-logo.svg"
              alt="Soulfixes"
              width={141}
              height={128}
              quality={100}
            />
          </S.LoginLogo>
          <h1>Login</h1>
          <S.LoginForm>
            <label htmlFor="email" className="visually-hidden">
              E-mail
            </label>
            <input type="text" name="email" id="email" placeholder="Email" />
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div>
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  value="remember"
                />
                <span>
                  <IoCheckmark />
                </span>
                Remember me
              </label>
              <Link href="/forget-password">Forget password?</Link>
            </div>
            <button type="submit">Login</button>
            <S.LoginRegister>
              Not registered yet? <Link href="register">Create an account</Link>
            </S.LoginRegister>
          </S.LoginForm>
        </S.LoginWrapper>
      </Container>
    </S.Login>
  )
}

export default Login
