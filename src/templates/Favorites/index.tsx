import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import FavoriteButton from 'components/FavoriteButton'
import useFavorites from 'hooks/useFavorites'
import Link from 'next/link'
import { IoStar } from 'react-icons/io5'
import { DtoFavoritesResponse } from 'services/api/favorites/dtoFavoritesResponse'
import { DtoGetUserResponse } from 'services/api/user/dtoGetUserResponse'
import * as S from './styles'

interface FavoritesProps {
  favorites: DtoFavoritesResponse
  user: false | DtoGetUserResponse
}

const Favorites = (props: FavoritesProps) => {
  const favorites = useFavorites()

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
        <S.FavoritesContent>
          <h2>Favorites</h2>
          <S.FavoritesHeader>
            <h3>Professional Info</h3>
            <h3>Actions</h3>
          </S.FavoritesHeader>
          <S.FavoritesList>
            {props.favorites.favorites.map(favorite => (
              <S.FavoritesItem key={favorite.id}>
                <S.FavoritesIcon>
                  <FavoriteButton
                    favorited
                    onClick={() => {
                      favorites.unfavoriteUser(favorite.professional_id)
                    }}
                  />
                </S.FavoritesIcon>
                <S.FavoritesData>
                  <div>
                    <img src={favorite.profs.image} alt={favorite.profs.name} />
                  </div>
                  <div>
                    <h3>{favorite.profs.name}</h3>
                    <p>
                      <span>
                        <IoStar />
                      </span>
                      {favorite.profs.average}
                    </p>
                  </div>
                </S.FavoritesData>
                <S.FavoriteLinks>
                  <Link href="/chat">Chat</Link>
                  <Link href="/profile/1" passHref>
                    <a>
                      <span>See profile</span>
                    </a>
                  </Link>
                </S.FavoriteLinks>
              </S.FavoritesItem>
            ))}
          </S.FavoritesList>
        </S.FavoritesContent>
      </Container>
    </S.Main>
  )
}

export default Favorites
