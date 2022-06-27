import Link from 'next/link'
import { IoLogIn, IoChevronDownOutline, IoLanguage } from 'react-icons/io5'

import LanguageMenu from './components/LanguageMenu'
import * as S from './styles'
import useLanguageModal from './useLanguageModal'

const UserMenu = () => {
  const languageModal = useLanguageModal()
  return (
    <S.Menu>
      <S.MenuLogin>
        <Link href="/login" passHref>
          <a>
            <div>
              <IoLogIn />
            </div>
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
