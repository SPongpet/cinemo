import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { Provider } from 'react-redux'

import { FullScreenLoadingProvider } from '@providers/FullScreenLoadingProvider'
import { store } from '@store/index'
import { ThemeProvider } from '@theme/theme-provider'

type AppProps = {
  children: React.ReactNode
}

export default function App({ children }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider store={store}>
      <ThemeProvider>
        <FullScreenLoadingProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </FullScreenLoadingProvider>
      </ThemeProvider>
    </Provider>
  )
}
