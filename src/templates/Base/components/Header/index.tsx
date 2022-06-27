import Image from 'next/image'
import Link from 'next/link'

import Menu from './components/Menu'
import UserMenu from './components/UserMenu'
import * as S from './styles'

const Header = () => {
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
          <UserMenu />
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.Header>
  )
}
export default Header
