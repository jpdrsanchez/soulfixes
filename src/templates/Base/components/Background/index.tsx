import * as S from './styles'

interface BackgroundProps extends S.WrapperStyleProps {
  children: React.ReactNode
}

const Background = (props: BackgroundProps) => {
  return (
    <S.Wrapper variant={props.variant}>
      <div />
      {props.children}
    </S.Wrapper>
  )
}

export default Background
