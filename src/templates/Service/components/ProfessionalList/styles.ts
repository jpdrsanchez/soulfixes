import styled from 'styled-components'

export const ProfessionalHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 137px;

  h3 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }

  & > * {
    &:nth-child(1) {
      padding-left: 30px;
      grid-column: 1 / 4;
      grid-row: 1;
    }

    &:nth-child(2) {
      padding-left: 70px;
      grid-column: 3 / 8;
      grid-row: 1;
    }

    &:nth-child(3) {
      padding-left: 30px;
      grid-column: 8 / 13;
      grid-row: 1;
    }
  }
`
