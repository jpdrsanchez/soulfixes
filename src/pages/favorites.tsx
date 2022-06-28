import type { GetServerSideProps, NextPage } from 'next'
import Auth from 'shared/auth'

import Base, { BaseAuthProps } from 'templates/Base'
import Favorites from 'templates/Favorites'

interface FavoritesPageProps extends BaseAuthProps {}

const FavoritesPage: NextPage<FavoritesPageProps> = props => {
  return (
    <Base user={props.user}>
      <Favorites />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await Auth.user(context)

  if (!user)
    return {
      redirect: {
        destination: '/login',
        permanent: true
      }
    }

  return {
    props: {
      user
    }
  }
}

export default FavoritesPage
