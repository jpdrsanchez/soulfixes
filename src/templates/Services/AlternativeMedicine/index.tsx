import Breadcrumb from 'components/Breadcrumb'
import ServicesList from 'components/ServicesList'
import Image from 'next/image'
import services from 'shared/mocks/servies'
import Separator from '../components/Separator'
import ServicesWrapper from '../components/ServicesWrapper'
import * as S from './styles'

const AlternativeMedicine = () => {
  return (
    <>
      <S.Main>
        <S.MainContainer>
          <S.Content>
            <Breadcrumb
              variant="purple"
              paths={[
                { name: 'Home', link: '/' },
                {
                  name: 'Alternative Medicine',
                  link: '/services/alternative-medicines'
                }
              ]}
            />
            <h1>Alternative Medicines</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              quis non eget consequat dui nascetur. Egestas amet diam gravida in
              urna ultricies eget.
            </p>
            <a href="#services">Choose service</a>
          </S.Content>
          <S.MainImage>
            <Image
              src="/images/Services/alternative-medicines.png"
              alt="Woman"
              width={659}
              height={665}
              quality={90}
            />
          </S.MainImage>
        </S.MainContainer>
      </S.Main>
      <ServicesWrapper>
        <ServicesList
          title="Top Services"
          items={services.slice(0, 3)}
          columns={3}
        />
        <Separator />
        <ServicesList title="Other services" items={services} />
      </ServicesWrapper>
    </>
  )
}

export default AlternativeMedicine
