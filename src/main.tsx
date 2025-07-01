import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; 
import Root from './page&components/Pages/Root';
import Home from './page&components/Pages/Home';
import AddBooks from './page&components/Pages/AddBooks';
import BorrowBooks from './page&components/Pages/BorrowBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addBooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/borrowBooks',
        element: <BorrowBooks></BorrowBooks>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <RouterProvider router={router} />
  </StrictMode>,
)
