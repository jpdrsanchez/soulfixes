import { ServiceCard } from 'components/ServicesList/interfaces'

const services: ServiceCard[] = Array.from<ServiceCard>({ length: 8 }).fill({
  id: 1,
  title: 'Chiropractic',
  slug: 'chiropractic',
  categories: ['In person', 'Virtual'],
  price: '$62',
  image: '/images/Services/service.jpg'
})

export default services
