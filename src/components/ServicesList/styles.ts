import styled from 'styled-components'
import { Variant } from 'templates/Base/components/Background/styles'

export const Section = styled.section`
  position: relative;

  h2 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    color: var(--blackTwo);
    margin-bottom: 47px;
  }
`

interface SectionListProps {
  columns?: 3 | 4
}

export const SectionList = styled.ul<SectionListProps>`
  display: grid;
  gap: 30px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: ${({ columns = 4 }) => `repeat(${columns}, 1fr)`};
  }
`
