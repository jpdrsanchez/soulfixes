import styled from 'styled-components'
import Container from 'components/Container'

export const Header = styled.header`
  padding-top: 8px;
  padding-bottom: 8px;
  background: var(--white);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogo = styled.a`
  display: block;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 991px) {
    display: none;
  }
`
