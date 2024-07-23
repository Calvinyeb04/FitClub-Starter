import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import GetStarted from './components/GetStarted/GetStarted';
import HealthWellness from './components/HealthWellness/HealthWellness';

// Import your CSS files here
import './App.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/Programs/Programs.css';
import './components/Reasons/Reasons.css';
import './components/Plans/Plans.css';
import './components/GetStarted/GetStarted.css';
import './components/HealthWellness/HealthWellness.css';

// Layout component that includes the Header and Outlet
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

// Home component
const Home = () => (
  <div>
    <Hero />
    <Programs />
    <Reasons />
    <Plans />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/get-started",
        element: <GetStarted />,
      },
      {
        path: "/health-wellness",
        element: <HealthWellness />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;