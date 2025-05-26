import { useContext, createContext, useEffect, useState } from 'react'

import { FullScreenLoading } from '@components/Loading'

// import { FullScreenLoading } from '@/components/Common/Loading/FullScreenLoading'

type FullScreenLoadingContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  setOpen: (isOpen: boolean) => void
}

const FullScreenLoadingContext = createContext<FullScreenLoadingContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
  setOpen: () => {},
})

export const FullScreenLoadingProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <FullScreenLoadingContext.Provider
      value={{
        isOpen: isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        setOpen: (isOpen) => setIsOpen(isOpen),
      }}
    >
      {isOpen && <FullScreenLoading />}
      {children}
    </FullScreenLoadingContext.Provider>
  )
}

export const useFullScreenLoading = () => useContext(FullScreenLoadingContext)
