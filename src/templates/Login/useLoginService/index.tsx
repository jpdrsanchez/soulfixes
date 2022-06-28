import * as React from 'react'
import toast from 'react-hot-toast'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode'

import { Inputs } from './types'
import schema from './validations'
import LoginService from 'services/api/login'
import Cookies from 'shared/utils/cookies'

interface useLoginParams {
  loginType: 1 | 2
}

const useLoginService = (params: useLoginParams) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur'
  })
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = React.useState<boolean>()

  const onSubmit: SubmitHandler<Inputs> = React.useCallback(
    async data => {
      try {
        setIsSubmitting(true)
        const login = await LoginService.login({
          type_user: params.loginType,
          ...data
        })

        const decodedToken = JSON.stringify(jwtDecode(login.token))

        Cookies.set(login.token, 'auth_token')
        Cookies.set(decodedToken, 'user_info')

        toast.success('login realizado com sucesso', {
          position: 'bottom-center'
        })

        router.push('/')
      } catch (error) {
        toast.error('Credenciais incorretas', {
          position: 'bottom-center'
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [params.loginType, router]
  )

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    dirtyFields,
    isSubmitting
  }
}

export default useLoginService
