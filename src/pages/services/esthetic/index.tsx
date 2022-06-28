import { ServiceCard } from 'components/ServicesList/interfaces'
import { GetServerSideProps, NextPage } from 'next'
import ServicesService from 'services/api/services'
import Auth from 'shared/auth'
import Mappers from 'shared/mappers'
import Base, { BaseAuthProps } from 'templates/Base'
import Esthetic from 'templates/Services/Esthetic'

interface EstheticPageProps extends BaseAuthProps {
  services: ServiceCard[]
}

const EstheticPage: NextPage<EstheticPageProps> = props => {
  return (
    <Base variant="orange" user={props.user}>
      <Esthetic services={props.services} />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await Auth.user(context)
  const response = await ServicesService.get(2)

  const services = Mappers.servicesMapper(response)

  return {
    props: {
      user,
      services
    }
  }
}

export default EstheticPage
