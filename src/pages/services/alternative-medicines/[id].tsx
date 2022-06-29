import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import ServicesService from 'services/api/services'
import { DtoSingleServiceResponse } from 'services/api/services/dtoGetSingleServiceResponse'
import Auth from 'shared/auth'

import Base, { BaseAuthProps } from 'templates/Base'
import Service from 'templates/Service'

interface Params extends ParsedUrlQuery {
  id: string
}

interface AlternativeMedicinesServicePageProps extends BaseAuthProps {
  service: DtoSingleServiceResponse
}

const AlternativeMedicinesServicePage: NextPage<
  AlternativeMedicinesServicePageProps
> = props => {
  return (
    <Base variant="purple" user={props.user}>
      <Service
        service={props.service}
        variant="purple"
        type="alternative-medicines"
        user={props.user}
      />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const params = context.params as Params

  const user = await Auth.user(context)

  try {
    const service = await ServicesService.getSingle(params.id)
    if (service.data.type_service !== 1) throw new Error()
    return {
      props: {
        user,
        service
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default AlternativeMedicinesServicePage
