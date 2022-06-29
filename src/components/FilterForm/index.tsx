import * as React from 'react'
import { v4 as uuid } from 'uuid'

import { Inputs } from './useFilterForm/types'
import fields from './constants/fields'
import * as S from './styles'
import useFilterForm from './useFilterForm'
import { Variant } from 'templates/Base/components/Background/styles'

interface FilterFormProps {
  onSubmit: (data: Inputs) => void
  variant: Variant
}

const FilterForm = (props: FilterFormProps) => {
  const filterForm = useFilterForm()
  const watchFilters = filterForm.watch(['type', 'price', 'rating'])

  return (
    <S.FilterForm onSubmit={filterForm.handleSubmit(props.onSubmit)}>
      {fields.map((field, index) => {
        const Icon = field.icon
        const Dropdown = field.dropdownIcon
        const currentPlaceholder = (value?: string) => {
          const item = field.items.find(item => item.value === value)
          return item?.name
        }

        return (
          <S.FilterInput key={field.id}>
            <span>
              <Icon />
            </span>
            <div
              className={
                !!currentPlaceholder(watchFilters[index]) ? 'active' : ''
              }
            >
              {currentPlaceholder(watchFilters[index]) || field.placeholder}
            </div>
            <S.DropdownList>
              {field.items.map(item => (
                <label key={uuid()}>
                  <input
                    className="visually-hidden"
                    type="radio"
                    {...filterForm.register(field.name)}
                    value={item.value}
                  />
                  <span>{item.name}</span>
                </label>
              ))}
            </S.DropdownList>
            <span>
              <Dropdown />
            </span>
          </S.FilterInput>
        )
      })}
      <S.FilterButton type="submit" variant={props.variant}>
        Apply Filters
      </S.FilterButton>
    </S.FilterForm>
  )
}

export default FilterForm
