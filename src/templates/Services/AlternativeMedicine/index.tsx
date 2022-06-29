import Breadcrumb from 'components/Breadcrumb'
import ServicesList from 'components/ServicesList'
import { ServiceCard } from 'components/ServicesList/interfaces'
import Image from 'next/image'
import Separator from '../components/Separator'
import ServicesWrapper from '../components/ServicesWrapper'
import * as S from './styles'

interface AlternativeMedicineProps {
  services: ServiceCard[]
}

const AlternativeMedicine = (props: AlternativeMedicineProps) => {
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
          items={props.services
            .filter(service => service.isTopService)
            .slice(0, 3)}
          columns={3}
          type="alternative-medicines"
        />
        <Separator />
        <ServicesList
          title="Other services"
          items={props.services}
          type="alternative-medicines"
        />
      </ServicesWrapper>
    </>
  )
}

export default AlternativeMedicine
