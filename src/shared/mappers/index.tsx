import { ServiceCard } from 'components/ServicesList/interfaces'
import { DtoService } from 'services/api/services/dtoGetServicesResponse'

export default class Mappers {
  static servicesMapper(services: DtoService[]) {
    return services.map<ServiceCard>(service => ({
      id: service.id,
      image: service.image,
      price: service.pricing.toString(),
      slug: service.id.toString(),
      title: service.title,
      categories: [
        service.in_person ? 'In person' : '',
        service.virtual ? 'Virtual' : ''
      ].filter(item => !!item.length),
      isTopService: service.is_top
    }))
  }
}
