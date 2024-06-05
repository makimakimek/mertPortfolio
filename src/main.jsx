import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Featured from './Featured.jsx'
import TwoArmRobotProject from './TwoArmRobotProject.jsx';
import AirCompressorModelling from './AirCompressorModelling.jsx';
import BallBalancer from './BallBalancer.jsx';
import BridgeCable from './BridgeCable.jsx';
import FluidFlowSimulation from './FluidFlowSimulation.jsx';
import InvertedPendulum from './InvertedPendulum.jsx';

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
  {
    path: "AirCompressorModelling",
    element: <AirCompressorModelling />,
  },
  {
    path: "BallBalancer",
    element: <BallBalancer />,
  },
  {
    path: "BridgeCable",
    element: <BridgeCable />,
  },
  {
    path: "FluidFlowSimulation",
    element: <FluidFlowSimulation />,
  },
  {
    path: "InvertedPendulum",
    element: <InvertedPendulum />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)