import Container from 'components/Container'
import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 106px;
  padding-bottom: 18px;
`

export const MainContainer = styled(Container)`
  display: grid;
  gap: 30px;

  @media (max-width: 991px) {
    align-items: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 72px;
    line-height: 64px;
    color: var(--blackTwo);
    max-width: 500px;
    margin-bottom: 18px;

    @media (max-width: 767px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  p {
    color: var(--blackTwo);
    max-width: 500px;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 50px;

    @media (max-width: 767px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  a {
    background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);
    border-radius: 60px;
    color: var(--white);
    padding: 10px 15px;
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    max-width: max-content;
    transition: all 0.3s;

    &:hover {
      color: var(--white);
      box-shadow: 0px 13px 30px rgba(251, 188, 139, 0.6);
      border-bottom: 7px solid rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`
