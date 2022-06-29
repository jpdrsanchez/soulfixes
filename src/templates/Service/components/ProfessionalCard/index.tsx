import FavoriteButton from 'components/FavoriteButton'
import { IoBriefcase, IoCash, IoPeople, IoStar } from 'react-icons/io5'
import { Relations } from 'services/api/services/dtoGetSingleServiceResponse'
import { availableDates } from 'shared/mocks/calendar'
import { Variant } from 'templates/Base/components/Background/styles'
import Calendar from './components/Calendar'
import * as S from './styles'

interface ProfessionalCardProps {
  variant: Variant
  cardInfo: Relations
}

const ProfessionalCard = (props: ProfessionalCardProps) => {
  return (
    <S.Card>
      <S.ProfessionalInfo>
        <img
          src={props.cardInfo.professionals.image}
          alt={props.cardInfo.professionals.name}
        />
        <FavoriteButton favorited />
        <ul>
          <li>
            <span>
              <IoStar />
            </span>
            {props.cardInfo.professionals.average}
          </li>
          <li>
            <span>
              <IoCash />
            </span>
            $ {props.cardInfo.price}
          </li>
          <li>
            <span>
              <IoBriefcase />
            </span>
          </li>
        </ul>
      </S.ProfessionalInfo>
      <S.ProfessionalDescription>
        <h3>
          <span>
            <IoPeople />
          </span>
          {props.cardInfo.professionals.name}
        </h3>
        <p>{props.cardInfo.professionals.desc}</p>
      </S.ProfessionalDescription>
      <div>
        <Calendar availableDates={availableDates} />
        <S.NextButton type="button" disabled>
          Select time to schedule
        </S.NextButton>
      </div>
    </S.Card>
  )
}

export default ProfessionalCard
