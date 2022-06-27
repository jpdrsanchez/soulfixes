import styled from 'styled-components'

export const Categories = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;

  h3 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    color: var(--grayTwo);
    margin-bottom: 30px;
    text-align: center;
    font-family: var(--title);
  }

  h2 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    color: var(--blackTwo);
    margin-bottom: 60px;
    text-align: center;
    font-family: var(--title);
  }
`

export const CategoryList = styled.nav`
  display: grid;
  gap: 30px;
`

export const Category = styled.article`
  border-radius: 60px;
  position: relative;
  overflow: hidden;

  @media (min-width: 748px) {
    padding: 60px 60px 68px;
  }

  &:nth-child(1) {
    background: var(--purpleOne);

    a {
      background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);
    }

    div {
      border: 10px solid #d2b8ec;
    }
  }

  &:nth-child(2) {
    background: var(--orangeOne);

    a {
      background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);
    }

    div {
      border: 10px solid #e2b39d;
    }
  }

  h2 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    text-align: left;
    margin-bottom: 8px;
    max-width: 305px;

    @media (max-width: 767px) {
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 10px;
      text-align: center;
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 505px;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
    margin-bottom: 36px;
    max-width: 305px;

    @media (max-width: 767px) {
      padding-left: 30px;
      padding-right: 30px;
      text-align: center;
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 505px;
    }
  }

  a {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    display: block;
    max-width: max-content;
    color: var(--white);
    padding: 10px 20px;
    border-radius: 60px;

    @media (max-width: 767px) {
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 30px;
    }
  }

  div {
    border-radius: 60px;
    overflow: hidden;
    width: calc(100% + 20px);
    transform: translateY(-10px) translateX(-10px);

    @media (max-width: 747px) {
      aspect-ratio: 1 / 1;
    }

    @media (min-width: 748px) {
      width: 350px;
      height: calc(100% + 20px);
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }

    @media (min-width: 992px) {
      width: 400px;
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
  }
`
