import React from 'react'
import Login from './Pages/Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Register from './Pages/Login/Register'
import Home from './Pages/Home/Home'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Register />
        },
        {
          path: 'home',
          element: <Home />
        }
      ]
    }
  ])
  return (
    <div className='max-w-[1440px] w-full mx-auto'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App