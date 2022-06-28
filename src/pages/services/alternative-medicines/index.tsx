import { ServiceCard } from 'components/ServicesList/interfaces'
import { GetServerSideProps, NextPage } from 'next'
import ServicesService from 'services/api/services'
import { DtoService } from 'services/api/services/dtoGetServicesResponse'
import Auth from 'shared/auth'
import Mappers from 'shared/mappers'

import Base, { BaseAuthProps } from 'templates/Base'
import AlternativeMedicine from 'templates/Services/AlternativeMedicine'

interface AlternativeMedicinePageProps extends BaseAuthProps {
  services: ServiceCard[]
}

const AlternativeMedicinePage: NextPage<
  AlternativeMedicinePageProps
> = props => {
  return (
    <Base variant="purple" user={props.user}>
      <AlternativeMedicine services={props.services} />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await Auth.user(context)
  const response = await ServicesService.get(1)

  const services = Mappers.servicesMapper(response)

  return {
    props: {
      user,
      services
    }
  }
}

export default AlternativeMedicinePage
