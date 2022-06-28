import { DtoGetUserResponse } from 'services/api/user/dtoGetUserResponse'
import Background from './components/Background'
import { Variant } from './components/Background/styles'
import Footer from './components/Footer'
import Header from './components/Header'

export interface BaseAuthProps {
  user: false | DtoGetUserResponse
}

interface BaseProps extends BaseAuthProps {
  children: React.ReactNode
  variant?: Variant
}

const Base = (props: BaseProps) => {
  return (
    <>
      <Header user={props.user} />
      <Background variant={props.variant}>{props.children}</Background>
      <Footer />
    </>
  )
}
export default Base
