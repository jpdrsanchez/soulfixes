import { NextPage } from 'next'
import Base from 'templates/Base'
import Esthetic from 'templates/Services/Esthetic'

const EstheticPage: NextPage = () => {
  return (
    <Base variant="orange">
      <Esthetic />
    </Base>
  )
}

export default EstheticPage
