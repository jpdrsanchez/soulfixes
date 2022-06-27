import Image from 'next/image'
import { IoArrowBack } from 'react-icons/io5'

import * as S from './styles'

export interface LanguageMenuProps {
  open: boolean
  onClose: () => void
}

const LanguageMenu = (props: LanguageMenuProps) => {
  return (
    <S.Wrapper open={props.open}>
      <ul>
        <li>
          <button onClick={props.onClose}>
            <span>
              <IoArrowBack />
            </span>{' '}
            Change Language
          </button>
        </li>
        <div />
        <li>
          <label>
            <input
              type="radio"
              name="language"
              id="language"
              value="en-US"
              onChange={props.onClose}
            />
            <span></span>
          </label>
          <span>
            <Image
              src="/images/en-US.svg"
              alt="English"
              width={40}
              height={30}
              quality={100}
            />
            English
          </span>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="language"
              id="language"
              value="en-US"
              onChange={props.onClose}
            />
            <span></span>
          </label>
          <span>
            <Image
              src="/images/pt-BR.svg"
              alt="Brazilian Portuguese"
              width={40}
              height={30}
              quality={100}
            />
            Brazilian Portuguese
          </span>
        </li>
      </ul>
    </S.Wrapper>
  )
}
export default LanguageMenu
