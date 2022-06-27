import Container from 'components/Container'
import { Variant } from 'templates/Base/components/Background/styles'
import ServiceItem from './components/ServiceItem'
import { ServiceCard } from './interfaces'
import * as S from './styles'

interface ServicesListProps {
  title: string
  items: ServiceCard[]
  columns?: 3 | 4
  variant?: Variant
}

const ServicesList = (props: ServicesListProps) => {
  return (
    <S.Section>
      <Container>
        <h2>{props.title}</h2>
        <S.SectionList columns={props.columns}>
          {props.items.map(item => (
            <ServiceItem key={item.id} data={item} variant={props.variant} />
          ))}
        </S.SectionList>
      </Container>
    </S.Section>
  )
}

export default ServicesList
