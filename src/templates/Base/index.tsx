import Background from './components/Background'
import { Variant } from './components/Background/styles'
import Footer from './components/Footer'
import Header from './components/Header'

interface BaseProps {
  children: React.ReactNode
  variant?: Variant
}

const Base = (props: BaseProps) => {
  return (
    <>
      <Header />
      <Background variant={props.variant}>{props.children}</Background>
      <Footer />
    </>
  )
}
export default Base
