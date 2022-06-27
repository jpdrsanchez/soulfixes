import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;

  li {
    position: relative;
    z-index: 980;

    &:hover {
      div {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
        pointer-events: initial;
      }
    }
  }
`

export const Submenu = styled.div`
  position: absolute;
  z-index: -1;
  width: max-content;
  padding-top: 50px;
  top: -10px;
  transform: translateX(-50%) translateY(-50px);
  left: 50%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s, transform 0.3s;

  ul {
    padding: 30px 20px 22px;
    border-radius: 15px;
    background-color: var(--white);
    display: grid;
    gap: 10px;
  }

  a {
    text-align: center;
    display: block;
  }
`

export const MenuLink = styled.a`
  color: var(--blackTwo);
  display: block;
  font-family: var(--title);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  display: flex;
  align-items: center;
  gap: 5px;

  &.active {
    background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
