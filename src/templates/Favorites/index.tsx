import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import Image from 'next/image'
import * as S from './styles'

const Favorites = () => {
  return (
    <S.Main>
      <Container>
        <Breadcrumb
          variant="white"
          paths={[
            { name: 'Home', link: '/' },
            { name: 'Favorites', link: 'Favorites' }
          ]}
          center={true}
        />
        <h1>Favorites</h1>
        <S.FavoritesList>
          <h2>Favorites</h2>
          <S.FavoritesHeader>
            <h3>Professional Info</h3>
            <h3>Actions</h3>
          </S.FavoritesHeader>
          <S.FavoritesItem></S.FavoritesItem>
        </S.FavoritesList>
      </Container>
    </S.Main>
  )
}

export default Favorites
