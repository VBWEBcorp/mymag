import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/layouts/root-layout'
import { HomePage } from '@/pages/home-page'
import { CreatePage } from '@/pages/create-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/create',
    element: <CreatePage />,
  },
])
