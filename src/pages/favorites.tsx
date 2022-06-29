import type { GetServerSideProps, NextPage } from 'next'
import { DtoFavoritesResponse } from 'services/api/favorites/dtoFavoritesResponse'
import Auth from 'shared/auth'

import Base, { BaseAuthProps } from 'templates/Base'
import Favorites from 'templates/Favorites'

interface FavoritesPageProps extends BaseAuthProps {
  favorites: DtoFavoritesResponse
}

const FavoritesPage: NextPage<FavoritesPageProps> = props => {
  return (
    <Base user={props.user}>
      <Favorites favorites={props.favorites} user={props.user} />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await Auth.userFavorites(context)

  if (!response)
    return {
      redirect: {
        destination: '/login',
        permanent: true
      }
    }

  return {
    props: {
      user: response[0],
      favorites: response[1]
    }
  }
}

export default FavoritesPage
