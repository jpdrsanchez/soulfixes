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

export const FavoritesList = styled.nav`
  h2 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    margin-bottom: 41px;
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
`

export const FavoritesItem = styled.a`
  display: block;
  padding: 30px 20px;
  border-radius: 15px;
  background: var(--white);
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 14px;
`
