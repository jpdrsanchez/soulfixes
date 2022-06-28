import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { IoStar } from 'react-icons/io5'
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
        <S.FavoritesContent>
          <h2>Favorites</h2>
          <S.FavoritesHeader>
            <h3>Professional Info</h3>
            <h3>Actions</h3>
          </S.FavoritesHeader>
          <S.FavoritesItem>
            <S.FavoritesIcon>
              <button type="button">
                <Image
                  src="/images/fill-fav.svg"
                  alt="Favoritar"
                  width={34}
                  height={34}
                  quality={100}
                />
              </button>
            </S.FavoritesIcon>
            <S.FavoritesData>
              <div>
                <img src="/images/Favorites/profile.png" alt="Profile" />
              </div>
              <div>
                <h3>Maria Caroline</h3>
                <p>
                  <span>
                    <IoStar />
                  </span>
                  4.5
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
        </S.FavoritesContent>
      </Container>
    </S.Main>
  )
}

export default Favorites
