import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const MenuLink = styled.a`
  color: var(--blackTwo);
  display: block;
  font-family: var(--title);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;

  &.active {
    background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
