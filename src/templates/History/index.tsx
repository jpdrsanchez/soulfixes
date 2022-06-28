import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import * as S from './styles'

const History = () => {
  return (
    <S.History>
      <Container>
        <Breadcrumb
          center
          paths={[
            { name: 'Home', link: '/' },
            { name: 'History', link: '/history' }
          ]}
        />
        <h1>History</h1>
      </Container>
    </S.History>
  )
}

export default History
