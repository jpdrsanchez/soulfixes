import type { NextPage } from 'next'
import Base from 'templates/Base'

import Home from 'templates/Home'

const HomePage: NextPage = () => {
  return (
    <Base>
      <Home />
    </Base>
  )
}

export default HomePage
