import { NextPage } from 'next'

import Base from 'templates/Base'
import Service from 'templates/Service'

const AlternativeMedicinesServicePage: NextPage = () => {
  return (
    <Base variant="purple" user={false}>
      <Service />
    </Base>
  )
}

export default AlternativeMedicinesServicePage
