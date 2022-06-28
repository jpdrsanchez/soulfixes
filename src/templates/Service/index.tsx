import { IoBriefcase, IoPeople } from 'react-icons/io5'

import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import * as S from './styles'

const Service = () => {
  return (
    <S.Main>
      <Container>
        <Breadcrumb
          center
          variant="purple"
          paths={[
            { name: 'Home', link: '/' },
            {
              name: 'Alternative Medicine',
              link: '/services/alternative-medicines'
            },
            { name: 'Chiropractic', link: '/services/alternative-medicines/1' }
          ]}
        />
        <S.ServiceCard>
          <S.ServiceImage>
            <img src="/images/Services/service.jpg" alt="Chiropractic" />
          </S.ServiceImage>
          <S.ServiceContent>
            <h1>Chiropractic</h1>
            <ul>
              <li>
                <span>
                  <IoPeople />
                </span>
                <span>
                  <strong>Professionals:</strong> 56
                </span>
              </li>
              <li>
                <span>
                  <IoBriefcase />
                </span>
                <span>
                  <strong>Attendance type:</strong>
                  <span>In person</span>
                </span>
              </li>
            </ul>
            <a href="#">See professionals</a>
          </S.ServiceContent>
        </S.ServiceCard>
        <S.ServiceDescription>
          <h2>Service&rsquo;s description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum in
            eu volutpat dignissim at. Faucibus ut urna proin amet orci. Vitae
            aliquam at vitae, ut arcu lectus. Iaculis eget iaculis interdum
            cursus ut lectus vel fringilla. Purus neque, egestas sollicitudin
            morbi et quis auctor posuere odio. Cursus amet, quis interdum non,
            rutrum in ante. Donec leo a tellus, tincidunt ultrices sed ipsum
            arcu tristique. Eu tellus proin adipiscing nunc in vulputate eget
            metus viverra. In justo, eget justo, duis amet, feugiat amet. Odio
            nisl tellus ut dolor leo pharetra urna et. Vitae amet, amet ut
            augue. Scelerisque nibh donec pharetra, lectus ridiculus condimentum
            scelerisque quam.
          </p>
        </S.ServiceDescription>
      </Container>
    </S.Main>
  )
}
export default Service
