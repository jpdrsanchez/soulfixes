import Container from 'components/Container'
import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 90px;
  padding-bottom: 123px;
`

export const MainContainer = styled(Container)`
  display: grid;

  gap: 30px;

  @media (min-width: 62em) {
    grid-template-columns: repeat(12, 1fr);
  }

  & > * {
    &:first-child {
      @media (min-width: 62em) {
        grid-column: 1 / 7;
      }
    }
  }
`

export const Content = styled.div`
  h1 {
    color: var(--purpleTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 48px;
    line-height: 1.25;
    margin-top: 30px;

    @media (min-width: 576px) {
      font-size: 72px;
      line-height: 90px;
    }

    @media (max-width: 991px) {
      text-align: center;
    }
  }

  p {
    color: var(--blackTwo);
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 50px;
    max-width: 505px;

    @media (max-width: 61.9375em) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  & > a {
    background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);
    border-radius: 60px;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--white);
    display: block;
    max-width: max-content;

    @media (max-width: 61.9375em) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
`

export const MainImage = styled.div`
  @media (min-width: 62em) {
    position: absolute;
    top: -42px;
    right: 27px;
    width: 100%;
    max-width: 500px;
  }

  @media (min-width: 75em) {
    max-width: 665px;
  }
`
