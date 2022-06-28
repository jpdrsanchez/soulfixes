import type { GetServerSideProps, NextPage } from 'next'
import Auth from 'shared/auth'

import Base, { BaseAuthProps } from 'templates/Base'
import History from 'templates/History'

interface HistoryPageProps extends BaseAuthProps {}

const HistoryPage: NextPage<HistoryPageProps> = props => {
  return (
    <Base user={props.user}>
      <History />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await Auth.user(context)

  if (!user)
    return {
      redirect: {
        destination: '/login',
        permanent: true
      }
    }

  return {
    props: {
      user
    }
  }
}

export default HistoryPage
