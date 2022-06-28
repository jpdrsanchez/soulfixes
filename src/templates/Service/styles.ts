import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 90px;
  padding-bottom: 60px;
`

export const ServiceCard = styled.div`
  display: grid;
  gap: 30px;
  background: var(--white);
  border-radius: 60px;
  padding-bottom: 40px;
  overflow: hidden;
  position: relative;
  margin-top: 48px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    padding: 60px 0 48px;
  }
`

export const ServiceImage = styled.div`
  border: 10px solid var(--purpleThree);
  border-radius: 60px;
  width: calc(100% + 20px);
  overflow: hidden;
  position: relative;
  top: -10px;
  left: -10px;

  @media (max-width: 767px) {
    aspect-ratio: 273 / 222;
  }

  @media (min-width: 768px) {
    width: 360px;
    height: calc(100% + 20px);
    position: absolute;
  }

  @media (min-width: 992px) {
    width: 480px;
  }

  @media (min-width: 1200px) {
    width: 526px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const ServiceContent = styled.div`
  @media (max-width: 767px) {
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    grid-column: 7 / 13;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.25;
    font-family: var(--title);
    color: var(--blackTwo);
    margin-bottom: 30px;

    @media (min-width: 768px) {
      font-size: 42px;
      line-height: 52px;
    }
  }

  ul {
    display: grid;
    gap: 15px;
    margin-bottom: 40px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);

    & > * {
      &:first-child {
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:last-child {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        flex-wrap: wrap;

        span {
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: -0.02em;
          color: var(--purpleTwo);
          background: var(--purpleOne);
          border-radius: 60px;
          padding: 0 15px;
        }
      }
    }
  }

  strong {
    font-weight: 700;
  }

  a {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--white);
    text-align: center;
    display: block;
    padding: 10px 15px;
    border-radius: 60px;
    background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);

    @media (min-width: 768px) {
      max-width: max-content;
    }
  }
`

export const ServiceDescription = styled.div`
  border-bottom: 1px solid #edd2c4;
  padding-bottom: 48px;
  padding-top: 60px;

  h2 {
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    margin-bottom: 15px;
    font-family: var(--title);
    color: var(--blackTwo);

    @media (max-width: 575px) {
      text-align: center;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--blackTwo);
    letter-spacing: -0.02em;

    @media (max-width: 575px) {
      text-align: center;
    }
  }
`
