import { v4 as uuid } from 'uuid'
import ActiveLink from 'components/ActiveLink'

import { menuItems } from 'shared/constants'
import * as S from './styles'

const Menu = () => {
  return (
    <S.Menu role="menu" aria-orientation="horizontal">
      {menuItems.map(item => (
        <li key={uuid()}>
          <ActiveLink href={item.link} passHref activeClassName="active">
            <S.MenuLink>{item.name}</S.MenuLink>
          </ActiveLink>
        </li>
      ))}
    </S.Menu>
  )
}

export default Menu
