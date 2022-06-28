import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/Container'
import * as S from './styles'
import { IoCheckmark } from 'react-icons/io5'
import useLoginService from './useLoginService'

const Login = () => {
  const login = useLoginService({ loginType: 1 })

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
          <S.LoginForm onSubmit={login.handleSubmit(login.onSubmit)}>
            <label htmlFor="email" className="visually-hidden">
              E-mail
            </label>
            <input
              className={login.dirtyFields.email ? 'active' : ''}
              type="text"
              placeholder="Email"
              {...login.register('email')}
            />
            <S.InputError>{login.errors.email?.message || ' '}</S.InputError>
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <input
              className={login.dirtyFields.password ? 'active' : ''}
              type="password"
              placeholder="Password"
              {...login.register('password')}
            />
            <S.InputError>{login.errors.password?.message || ' '}</S.InputError>
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
            <button type="submit" disabled={login.isSubmitting}>
              Login
            </button>
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
