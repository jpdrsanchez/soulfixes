import { useForm } from 'react-hook-form'
import { Inputs } from './types'

const useFilterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  return {
    register,
    handleSubmit,
    watch,
    errors
  }
}

export default useFilterForm
