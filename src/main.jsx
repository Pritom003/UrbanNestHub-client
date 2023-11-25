import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs';
import AuthiProvider from './Providers/AuthiProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>



     <div className='max-w-screen-xl mx-auto'>

     <QueryClientProvider client={queryClient}>
     <AuthiProvider>   <RouterProvider router={router} /></AuthiProvider>
    </QueryClientProvider>
    
     </div>
  </React.StrictMode>,
)
