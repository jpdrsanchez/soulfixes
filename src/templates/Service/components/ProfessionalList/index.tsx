import { Relations } from 'services/api/services/dtoGetSingleServiceResponse'
import ProfessionalCard from '../ProfessionalCard'
import * as S from './styles'

interface ProfessionalListProps {
  professionals?: Relations[] | null
}

const ProfessionalList = (props: ProfessionalListProps) => {
  return (
    <>
      <S.ProfessionalHeader>
        <h3>Professional Info</h3>
        <h3>Resume</h3>
        <h3>Avaliable schedule dates/times</h3>
      </S.ProfessionalHeader>
      {props.professionals?.map(professional => (
        <ProfessionalCard
          key={professional.id}
          variant="purple"
          cardInfo={professional}
        />
      ))}
    </>
  )
}

export default ProfessionalList
