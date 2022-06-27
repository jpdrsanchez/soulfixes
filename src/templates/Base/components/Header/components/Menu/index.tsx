import * as React from 'react'
import { v4 as uuid } from 'uuid'
import { IoChevronDownOutline } from 'react-icons/io5'

import ActiveLink from 'components/ActiveLink'
import { menuItems } from 'shared/constants'
import * as S from './styles'
import useHover from 'hooks/useHover'

const Menu = () => {
  const hover = useHover()

  return (
    <S.Menu role="menu" aria-orientation="horizontal">
      {menuItems.map(item => (
        <li key={uuid()}>
          <ActiveLink href={item.link} passHref activeClassName="active">
            <S.MenuLink
              onClick={e => {
                if (item.hasItems) e.preventDefault()
              }}
            >
              <span>{item.name}</span>
              {item.hasItems && <IoChevronDownOutline />}
            </S.MenuLink>
          </ActiveLink>
          {item.hasItems && (
            <S.Submenu>
              <ul>
                {item.items?.map(subitem => (
                  <li key={uuid()}>
                    <ActiveLink
                      href={`${item.link}${subitem.link}`}
                      passHref
                      activeClassName="active"
                    >
                      <S.MenuLink>{subitem.name}</S.MenuLink>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </S.Submenu>
          )}
        </li>
      ))}
    </S.Menu>
  )
}

export default Menu
