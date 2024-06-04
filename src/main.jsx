import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Featured from './Featured.jsx'
import TwoArmRobotProject from './TwoArmRobotProject.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Featured",
    element: <Featured />,
  },
  {
    path: "TwoArmRobotProject",
    element: <TwoArmRobotProject />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)