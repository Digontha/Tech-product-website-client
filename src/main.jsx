import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Route.jsx'
import { HelmetProvider } from 'react-helmet-async'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './AuthProvider/AuthProvider.jsx'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <div>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
