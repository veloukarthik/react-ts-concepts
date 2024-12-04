import React from 'react';
import './App.css'
import {createBrowserRouter,Router, RouterProvider} from 'react-router-dom'
import Person from './Components/Person';
import Counter from './Components/Counter';
import Todos from './Components/Todos';
import Profile from './Components/Profile';

export default function Example() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Person />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/counter",
      element: <Counter />
    },
    {
      path: "/todo",
      element: <Todos />
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}