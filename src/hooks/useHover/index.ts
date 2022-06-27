import * as React from 'react'

const useHover = () => {
  const [isHovered, setIsHovered] = React.useState(false)

  const onHover = React.useCallback(() => {
    setIsHovered(true)
  }, [])

  const onBlur = React.useCallback(() => {
    setIsHovered(false)
  }, [])

  return {
    isHovered,
    onHover,
    onBlur
  }
}

export default useHover
