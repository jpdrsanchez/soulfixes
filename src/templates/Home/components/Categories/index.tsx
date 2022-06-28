import Link from 'next/link'

import Container from 'components/Container'
import * as S from './styles'

const Categories = () => {
  return (
    <S.Categories>
      <Container>
        <h3>Or</h3>
        <h2>Choose category</h2>
        <S.CategoryList>
          <S.Category>
            <div>
              <img
                src="/images/Home/category-one.jpg"
                alt="Alternative Medicines"
              />
            </div>
            <h2>Alternative Medicines</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              quis non eget consequat dui nascetur. Egestas amet diam gravida in
              urna ultricies eget.
            </p>
            <Link href="/services/alternative-medicines">Go to category</Link>
          </S.Category>
          <S.Category>
            <div>
              <img src="/images/Home/category-one.jpg" alt="Esthetic" />
            </div>
            <h2>Esthetic</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              quis non eget consequat dui nascetur. Egestas amet diam gravida in
              urna ultricies eget.
            </p>
            <Link href="/services/esthetic">Go to category</Link>
          </S.Category>
        </S.CategoryList>
      </Container>
    </S.Categories>
  )
}

export default Categories
