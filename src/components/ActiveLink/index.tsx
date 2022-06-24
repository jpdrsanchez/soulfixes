import * as React from 'react'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'

type ActiveLinkProps = LinkProps & {
  children: React.ReactElement
  activeClassName: string
}

const ActiveLink = (props: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter()

  const child = React.Children.only(props.children)
  const childClassName = child.props.className || ''
  const [className, setClassName] = React.useState(childClassName)

  React.useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${childClassName} ${props.activeClassName}`.trim()
          : childClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    props.activeClassName,
    setClassName,
    className
  ])

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

export default ActiveLink
