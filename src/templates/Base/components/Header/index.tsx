import Image from 'next/image'
import Link from 'next/link'
import { BaseAuthProps } from 'templates/Base'

import Menu from './components/Menu'
import UserMenu from './components/UserMenu'
import * as S from './styles'

interface HeaderProps extends BaseAuthProps {}

const Header = (props: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/" passHref>
          <S.HeaderLogo>
            <Image
              src="/images/logo.svg"
              width={81}
              height={74}
              alt="Soulfixes"
            />
            <span className="visually-hidden">Soulfixes</span>
          </S.HeaderLogo>
        </Link>
        <S.HeaderNav>
          <Menu />
          <UserMenu user={props.user} />
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.Header>
  )
}
export default Header
