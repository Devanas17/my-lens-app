import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  // create a client
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
       <Component {...pageProps} />
    </QueryClientProvider>
  ) 
}
 