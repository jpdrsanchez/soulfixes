import { NextPage } from 'next'

import Base from 'templates/Base'
import AlternativeMedicine from 'templates/Services/AlternativeMedicine'

const AlternativeMedicinePage: NextPage = () => {
  return (
    <Base variant="purple">
      <AlternativeMedicine />
    </Base>
  )
}

export default AlternativeMedicinePage
