import Link from 'next/link'
import { IoLogIn, IoChevronDownOutline, IoLanguage } from 'react-icons/io5'
import { BaseAuthProps } from 'templates/Base'

import LanguageMenu from './components/LanguageMenu'
import * as S from './styles'
import useLanguageModal from './useLanguageModal'

interface UserMenuProps extends BaseAuthProps {}

const UserMenu = (props: UserMenuProps) => {
  const languageModal = useLanguageModal()

  return (
    <S.Menu>
      <S.MenuLogin>
        <Link href="/login" passHref>
          <a
            onClick={e => {
              if (props.user) e.preventDefault()
            }}
          >
            {props.user && <img src={props.user.image} alt={props.user.name} />}
            {!props.user && (
              <div>
                <IoLogIn />
              </div>
            )}
            <span>
              <IoChevronDownOutline />
            </span>
          </a>
        </Link>
        <S.SubmenuLogin>
          <ul>
            <li>
              <button type="button" onClick={languageModal.open}>
                <span>
                  <IoLanguage />
                </span>{' '}
                Change Language
              </button>
            </li>
          </ul>
        </S.SubmenuLogin>
        <LanguageMenu
          open={languageModal.isOpen}
          onClose={languageModal.close}
        />
      </S.MenuLogin>
    </S.Menu>
  )
}

export default UserMenu
