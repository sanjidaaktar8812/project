import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/Home';
import AddData from './Components/AddData/AddData';
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ShowData from './Components/ShowData/ShowData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/AddData',
        element: <AddData></AddData>
      },
      {
        path: '/ShowData',
        element: <ShowData></ShowData>,
        loader: () => fetch('http://localhost:5000/postdata')
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  ,
)
