import React from 'react';
import './App.css'
import {createBrowserRouter,Router, RouterProvider} from 'react-router-dom'
import Person from './Components/Person';
import Counter from './Components/Counter';

export default function Example() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Person />
    },
    {
      path: "/counter",
      element: <Counter />
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}