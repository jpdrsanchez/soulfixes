import Footer from './components/Footer'
import Header from './components/Header'

interface BaseProps {
  children: React.ReactNode
}

const Base = (props: BaseProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
export default Base
