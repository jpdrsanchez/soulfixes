import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 90px;
  padding-bottom: 90px;

  h1 {
    color: var(--brownTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 48px;
    line-height: 1.25;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (min-width: 576px) {
      font-size: 72px;
      line-height: 90px;
    }
  }
`

export const FavoritesContent = styled.div`
  h2 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    margin-bottom: 41px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`

export const FavoritesHeader = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 100px;

  h3 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const FavoritesList = styled.ul`
  display: grid;
  gap: 45px;
`

export const FavoritesItem = styled.li`
  display: block;
  padding: 30px 20px;
  border-radius: 15px;
  background: var(--white);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
  }
`

export const FavoritesIcon = styled.div`
  justify-content: center;

  button {
    width: 34px;
    height: 34px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    outline: 0px;
    cursor: pointer;
  }
`

export const FavoritesData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    &:first-child {
      width: 63px;
      height: 63px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 24px;
    }

    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
  }
`

export const FavoriteLinks = styled.nav`
  display: grid;
  align-items: center;
  gap: 10px 30px;

  @media (min-width: 576px) {
    display: flex;
    width: max-content;
  }

  @media (max-width: 767px) {
    grid-column: span 2;
  }

  a {
    width: 100%;
    text-align: center;

    @media (min-width: 576px) {
      width: 147px;
    }

    &:nth-child(1) {
      font-weight: 700;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: var(--white);
      background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%)
          padding-box,
        linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%) border-box;
      border-radius: 60px;
      display: block;
      padding: 2px 10px;
      border: 2px solid transparent;
    }

    &:nth-child(2) {
      border-radius: 60px;
      display: block;
      padding: 2px 10px;
      border: 2px solid transparent;
      background: linear-gradient(#fff, #fff) padding-box,
        linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%) border-box;

      span {
        background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: -0.02em;
      }
    }
  }
`
