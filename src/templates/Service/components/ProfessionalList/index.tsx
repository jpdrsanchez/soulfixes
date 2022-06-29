import { Relations } from 'services/api/services/dtoGetSingleServiceResponse'
import { DtoGetUserResponse } from 'services/api/user/dtoGetUserResponse'
import { Variant } from 'templates/Base/components/Background/styles'
import ProfessionalCard from '../ProfessionalCard'
import * as S from './styles'

interface ProfessionalListProps {
  professionals?: Relations[] | null
  variant: Variant
  user: false | DtoGetUserResponse
}

const ProfessionalList = (props: ProfessionalListProps) => {
  return (
    <>
      <S.ProfessionalHeader>
        <h3>Professional Info</h3>
        <h3>Resume</h3>
        <h3>Avaliable schedule dates/times</h3>
      </S.ProfessionalHeader>
      <S.ProfessionalList>
        {props.professionals?.map(professional => (
          <ProfessionalCard
            key={professional.id}
            variant={props.variant}
            cardInfo={professional}
            user={props.user}
          />
        ))}
      </S.ProfessionalList>
    </>
  )
}

export default ProfessionalList
