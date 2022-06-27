import Image from 'next/image'

import Breadcrumb from 'components/Breadcrumb'
import * as S from './styles'
import ServicesWrapper from '../components/ServicesWrapper'
import ServicesList from 'components/ServicesList'
import Separator from '../components/Separator'
import services from 'shared/mocks/servies'

const Esthetic = () => {
  return (
    <>
      <S.Main>
        <S.MainContainer>
          <S.Content>
            <Breadcrumb
              variant="orange"
              paths={[
                { name: 'Home', link: '/' },
                { name: 'Esthetic', link: '/services/esthetic' }
              ]}
            />
            <h1>Esthetic</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              quis non eget consequat dui nascetur. Egestas amet diam gravida in
              urna ultricies eget.
            </p>
            <a href="#services">Choose service</a>
          </S.Content>
          <div>
            <Image
              src="/images/Services/esthetic.png"
              alt="Esthetic"
              width={341}
              height={542}
            />
          </div>
        </S.MainContainer>
      </S.Main>
      <ServicesWrapper>
        <ServicesList
          title="Top Services"
          items={services.slice(0, 3)}
          columns={3}
          variant="orange"
        />
        <Separator />
        <ServicesList
          title="Other services"
          items={services}
          variant="orange"
        />
      </ServicesWrapper>
    </>
  )
}

export default Esthetic
