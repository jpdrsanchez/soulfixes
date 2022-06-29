import Image from 'next/image'
import * as S from './styles'

interface FavoriteButtonProps {
  favorited: boolean
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  return (
    <S.Button type="button">
      {!props.favorited && (
        <Image
          src="/images/blank-fav.svg"
          alt="Favoritar"
          width={40}
          height={40}
        />
      )}
      {props.favorited && (
        <Image
          src="/images/fill-fav.svg"
          alt="Desfavoritar"
          width={40}
          height={40}
        />
      )}
      {!props.favorited && <span className="visually-hidden">Favoritar</span>}
      {props.favorited && <span className="visually-hidden">Desfavoritar</span>}
    </S.Button>
  )
}
export default FavoriteButton
