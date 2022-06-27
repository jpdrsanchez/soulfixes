import Container from 'components/Container'
import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 25px;
  padding-bottom: 30px;
`

export const MainContainer = styled(Container)`
  display: grid;
  gap: 30px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 992px) {
        grid-column: 1 / 7;
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: center;

      @media (min-width: 992px) {
        grid-column: 7 / 13;
      }
    }
  }
`

export const Content = styled.div`
  padding-top: 65px;

  h1 {
    color: var(--orangeTwo);
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

    @media (max-width: 991px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  & > a {
    background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);
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

    @media (max-width: 991px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
