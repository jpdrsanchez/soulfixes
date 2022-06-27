import Link from 'next/link'
import { Variant } from 'templates/Base/components/Background/styles'
import { v4 as uuid } from 'uuid'

import * as S from './styles'

interface BreadcrumbProps {
  paths: {
    name: string
    link: string
  }[]
  variant?: Variant
}

const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <S.Nav aria-label="breadcrumbs" variant={props.variant}>
      <ol>
        {props.paths.map((path, index) => (
          <li
            key={uuid()}
            style={{
              transform: `translateX(-${index * 40}px)`,
              zIndex: `${700 - index}`
            }}
          >
            <Link
              href={path.link}
              aria-current={
                index === props.paths.length - 1 ? 'location' : false
              }
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ol>
    </S.Nav>
  )
}

export default Breadcrumb
