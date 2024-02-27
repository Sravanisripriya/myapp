import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Counter from './counter';
import Todo from './todos';
import Countries from "./countries"
import CountryDetails from './countriesDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'counter',
        element:<Counter></Counter>
      },
      {
        path:'todos',
        element:<Todo></Todo>
      },
      {
        path:'countries',
        element:<Countries></Countries>,
        children:[
          {
            path:'details/:cname',
            element:<CountryDetails></CountryDetails>
          }
        ]
      }
    ]
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 