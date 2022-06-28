import { v4 as uuid } from 'uuid'
import { IoCash } from 'react-icons/io5'

import * as S from './styles'
import { ServiceCard } from 'components/ServicesList/interfaces'
import Link from 'next/link'
import { Variant } from 'templates/Base/components/Background/styles'

interface ServiceItemProps {
  data: ServiceCard
  variant?: Variant
}

const ServiceItem = (props: ServiceItemProps) => {
  return (
    <S.Card variant={props.variant}>
      <Link href={props.data.slug}>
        <a>
          <img src={props.data.image} alt={props.data.title} />
          <div>
            <h3>{props.data.title}</h3>
            <ul>
              {props.data.categories.map(category => (
                <li key={uuid()}>{category}</li>
              ))}
            </ul>
            <p>
              <span>
                <IoCash />
              </span>
              from{' '}
              {new Intl.NumberFormat('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2
              }).format(Number(props.data.price))}
            </p>
          </div>
        </a>
      </Link>
    </S.Card>
  )
}

export default ServiceItem
