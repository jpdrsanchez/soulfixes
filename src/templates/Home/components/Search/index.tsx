import Image from 'next/image'

import Container from 'components/Container'
import * as S from './styles'
import { BaseAuthProps } from 'templates/Base'
import { getFirstName } from 'shared/utils/user'

interface SearchProps extends BaseAuthProps {}

const Search = (props: SearchProps) => {
  return (
    <S.Search>
      <Container>
        {props.user && <h2>Hi, {getFirstName(props.user.name)}</h2>}
        {!props.user && <h2>Hi</h2>}
        <p>What are you looking for today?</p>
        <form>
          <span>
            <Image
              src="/images/search.svg"
              width={22}
              height={22}
              alt="Search"
            />
          </span>
          <label htmlFor="keywords" className="visually-hidden">
            Search by keyword
          </label>
          <input
            type="text"
            name="keywords"
            id="keywords"
            placeholder="Search by keyword"
          />
        </form>
      </Container>
    </S.Search>
  )
}
export default Search
