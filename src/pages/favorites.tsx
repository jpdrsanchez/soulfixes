import type { NextPage } from 'next'

import Base from 'templates/Base'
import Favorites from 'templates/Favorites'

const HomePage: NextPage = () => {
  return (
    <Base>
      <Favorites />
    </Base>
  )
}

export default HomePage
