import Container from 'components/Container'
import styled from 'styled-components'

export const Footer = styled.footer`
  background: var(--white);
`

export const FooterContainer = styled(Container)`
  display: grid;

  gap: 30px;
  padding-top: 52px;
  padding-bottom: 42px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 768px) {
        grid-column: 1 / 6;
      }

      @media (min-width: 992px) {
        grid-column: 1 / 5;
      }
    }

    &:nth-child(2) {
      @media (min-width: 768px) {
        grid-column: 6 / 8;
      }
    }

    &:nth-child(3) {
      @media (min-width: 768px) {
        grid-column: 8 / 10;
      }
    }

    &:nth-child(4) {
      @media (min-width: 768px) {
        grid-column: 10 / 13;
      }

      @media (min-width: 992px) {
        grid-column: 11 / 13;
      }
    }
  }
`

export const FooterAbout = styled.div`
  @media (max-width: 767px) {
    display: grid;
    justify-content: center;
  }

  p {
    margin-top: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);

    @media (max-width: 767px) {
      text-align: center;
    }
  }
`

export const FooterMenu = styled.nav`
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--black);
    text-transform: uppercase;

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: var(--black);
    display: block;

    @media (max-width: 767px) {
      text-align: center;
    }
  }
`

export const FooterSocial = styled.nav`
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--black);
    text-transform: uppercase;
    margin-bottom: 8px;
    text-align: right;

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  ul {
    display: flex;
    gap: 15px;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }

  a {
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blackTwo);
    display: block;

    @media (max-width: 767px) {
      text-align: center;
    }
  }
`

export const FooterNoweb = styled(Container)`
  border-top: 2px solid #f7f7f7;
  padding-top: 8px;
  padding-bottom: 10px;
  display: grid;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  p {
    color: var(--blackTwo);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  a {
    color: var(--blackTwo);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 4px;

    @media (max-width: 767px) {
      justify-content: center;
    }
  }

  img {
    max-width: 32px;
  }
`
