import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const Main = () => {
  return (
    <S.Main>
      <S.MainContainer>
        <div>
          <h1>All you need, in one place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor quis
            non eget consequat dui nascetur. Egestas amet diam gravida in urna
            ultricies eget.
          </p>
          <Link href="#search">Find what you need</Link>
        </div>
        <div>
          <Image
            src="/images/Home/main-image.png"
            width={547}
            height={473}
            alt="Mulher usando um notebook"
            quality={85}
          />
        </div>
      </S.MainContainer>
    </S.Main>
  )
}

export default Main
