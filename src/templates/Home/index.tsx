import { BaseAuthProps } from 'templates/Base'
import Categories from './components/Categories'
import Main from './components/Main'
import Search from './components/Search'

interface HomeProps extends BaseAuthProps {}

const Home = (props: HomeProps) => {
  return (
    <>
      <Main />
      <Search user={props.user} />
      <Categories />
    </>
  )
}
export default Home
