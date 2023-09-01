import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="mako-2023-tiffany.au.auth0.com"
      clientId="VOMccxQ0w3ZlvECsZpew7AMKQ7a5YEAg"
      redirectUri={window.location.origin}
      audience="https://zombies/api"
    >
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
