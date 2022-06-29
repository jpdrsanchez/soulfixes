import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import * as React from 'react'
import toast from 'react-hot-toast'
import FavoritesService from 'services/api/favorites'

interface useFavoritesParams {
  patient_id: string | number
  professional_id: string | number
}

const useFavorites = (params?: useFavoritesParams) => {
  const router = useRouter()

  const favoriteUser = React.useCallback(async () => {
    try {
      if (!params) throw new Error()
      const cookies = parseCookies()
      await FavoritesService.create(cookies.auth_token, {
        patient_id: params.patient_id,
        professional_id: params.professional_id
      })
      toast.success('Profissional adicionado aos favoritos!', {
        position: 'bottom-center'
      })
    } catch {
      toast.error(
        'É preciso estar logado para adicionar um profissional aos seus favoritos',
        { position: 'bottom-center' }
      )
    }
  }, [params])

  const unfavoriteUser = React.useCallback(
    async (id: string | number) => {
      try {
        const cookies = parseCookies()
        await FavoritesService.delete(cookies.auth_token, id)
        toast.success('Profissional removido dos favoritos!', {
          position: 'bottom-center'
        })
        router.push('/favorites')
      } catch {
        toast.error(
          'É preciso estar logado para adicionar um profissional aos seus favoritos',
          { position: 'bottom-center' }
        )
      }
    },
    [router]
  )

  return {
    favoriteUser,
    unfavoriteUser
  }
}

export default useFavorites
