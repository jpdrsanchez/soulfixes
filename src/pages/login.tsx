import type { NextPage } from 'next'
import Base from 'templates/Base'
import Login from 'templates/Login'

const HomePage: NextPage = () => {
  return (
    <Base>
      <Login />
    </Base>
  )
}

export default HomePage
