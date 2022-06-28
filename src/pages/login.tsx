import type { GetServerSideProps, NextPage } from 'next'
import Auth from 'shared/auth'
import Base from 'templates/Base'
import Login from 'templates/Login'

const HomePage: NextPage = () => {
  return (
    <Base user={false}>
      <Login />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await Auth.user(context)

  if (user)
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }

  return {
    props: {
      user
    }
  }
}

export default HomePage
