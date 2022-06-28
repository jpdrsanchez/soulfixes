import type { GetServerSideProps, NextPage } from 'next'

import Auth from 'shared/auth'
import Base, { BaseAuthProps } from 'templates/Base'

import Home from 'templates/Home'

interface HomePageProps extends BaseAuthProps {}

const HomePage: NextPage<HomePageProps> = props => {
  return (
    <Base user={props.user}>
      <Home />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await Auth.user(context)

  return {
    props: {
      user
    }
  }
}

export default HomePage
