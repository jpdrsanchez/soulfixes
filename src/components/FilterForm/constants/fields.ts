import { IconType } from 'react-icons'
import {
  IoBriefcase,
  IoChevronDownOutline,
  IoCash,
  IoSwapVertical,
  IoStar
} from 'react-icons/io5'
import { v4 as uuid } from 'uuid'
import { Inputs } from '../useFilterForm/types'

interface Field {
  id: string
  icon: IconType
  label: string
  placeholder: string
  dropdownIcon: IconType
  type: 'category' | 'default'
  items: { value: string; name: string }[]
  name: keyof Inputs
}

const fields: Field[] = [
  {
    id: uuid(),
    icon: IoBriefcase,
    label: 'Select type',
    placeholder: 'Select type',
    dropdownIcon: IoChevronDownOutline,
    type: 'category',
    items: [
      { value: '1', name: 'In person' },
      { value: '0', name: 'Virtual' }
    ],
    name: 'type'
  },
  {
    id: uuid(),
    icon: IoCash,
    label: 'Sort by price',
    placeholder: 'Sort by price',
    dropdownIcon: IoSwapVertical,
    type: 'default',
    items: [
      { value: 'ASC', name: 'Low to High' },
      { value: 'DESC', name: 'High to Low' }
    ],
    name: 'price'
  },
  {
    id: uuid(),
    icon: IoStar,
    label: 'Sort by rating',
    placeholder: 'Sort by rating',
    dropdownIcon: IoSwapVertical,
    type: 'default',
    items: [
      { value: 'ASC', name: 'Low to High' },
      { value: 'DESC', name: 'High to Low' }
    ],
    name: 'rating'
  }
]

export default fields
