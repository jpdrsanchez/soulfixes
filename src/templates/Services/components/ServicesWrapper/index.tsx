import * as React from 'react'

import * as S from './styles'

interface ServicesWrapperProps {
  children: React.ReactNode
}

const ServicesWrapper = (props: ServicesWrapperProps) => {
  return <S.Wrapper>{props.children}</S.Wrapper>
}
export default ServicesWrapper
