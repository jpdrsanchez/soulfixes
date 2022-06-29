import Container from 'components/Container'
import * as S from './styles'

interface ProfessionalWrapperProps {
  children: React.ReactNode
}

const ProfessionalWrapper = (props: ProfessionalWrapperProps) => {
  return (
    <S.Wrapper>
      <Container>{props.children}</Container>
    </S.Wrapper>
  )
}

export default ProfessionalWrapper
