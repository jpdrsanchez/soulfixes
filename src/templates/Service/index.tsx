import { IoBriefcase, IoPeople } from 'react-icons/io5'

import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import * as S from './styles'
import { DtoSingleServiceResponse } from 'services/api/services/dtoGetSingleServiceResponse'
import { Variant } from 'templates/Base/components/Background/styles'
import FilterForm from 'components/FilterForm'
import ProfessionalWrapper from './components/ProfessionalWrapper'
import ProfessionalList from './components/ProfessionalList'
import { DtoGetUserResponse } from 'services/api/user/dtoGetUserResponse'

interface ServiceProps {
  service: DtoSingleServiceResponse
  variant: Variant
  type: 'alternative-medicines' | 'esthetic'
  user: false | DtoGetUserResponse
}

const Service = (props: ServiceProps) => {
  return (
    <>
      <S.Main>
        <Container>
          <Breadcrumb
            center
            variant={props.variant}
            paths={[
              { name: 'Home', link: '/' },
              {
                name: 'Alternative Medicine',
                link: `/services/${props.type}`
              },
              {
                name: props.service.data.title,
                link: `/services/${props.type}/${props.service.data.id}`
              }
            ]}
          />
          <S.ServiceCard>
            <S.ServiceImage variant={props.variant}>
              <img
                src={props.service.data.image}
                alt={props.service.data.title}
              />
            </S.ServiceImage>
            <S.ServiceContent variant={props.variant}>
              <h1>{props.service.data.title}</h1>
              <ul>
                <li>
                  <span>
                    <IoPeople />
                  </span>
                  <span>
                    <strong>Professionals:</strong>{' '}
                    {props.service.countProfessionals}
                  </span>
                </li>
                <li>
                  <span>
                    <IoBriefcase />
                  </span>
                  <span>
                    <strong>Attendance type:</strong>
                    {props.service.data.in_person && <span>In person</span>}
                    {props.service.data.virtual && <span>Virtual</span>}
                  </span>
                </li>
              </ul>
              <a href="#">See professionals</a>
            </S.ServiceContent>
          </S.ServiceCard>
          <S.ServiceDescription>
            <h2>Service&rsquo;s description</h2>
            <p>{props.service.data.desc}</p>
          </S.ServiceDescription>
        </Container>
      </S.Main>
      <ProfessionalWrapper>
        <h2>Professionals</h2>
        <FilterForm onSubmit={data => {}} variant={props.variant} />
        <ProfessionalList
          professionals={props.service.data.relations}
          variant={props.variant}
          user={props.user}
        />
      </ProfessionalWrapper>
    </>
  )
}
export default Service
