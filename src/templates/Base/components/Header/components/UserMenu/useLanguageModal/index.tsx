import * as React from 'react'

const useLanguageModal = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const open = React.useCallback(() => {
    setIsOpen(true)
  }, [])
  const close = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isOpen,
    open,
    close
  }
}

export default useLanguageModal
