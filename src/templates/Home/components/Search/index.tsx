import Image from 'next/image'

import Container from 'components/Container'
import * as S from './styles'

const Search = () => {
  return (
    <S.Search>
      <Container>
        <h2>Hi, Chelsea</h2>
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
