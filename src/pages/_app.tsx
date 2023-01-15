import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import "../styles/globals.css"
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";


export default function App({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Mumbai;

  // create a client
  const queryClient = new QueryClient()
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
    <QueryClientProvider client={queryClient}>
       <Component {...pageProps} />
    </QueryClientProvider>
    </ThirdwebProvider>
  ) 
}
 