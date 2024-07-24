import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import HealthWellness from './components/HealthWellness/HealthWellness';
import GetStarted from "./components/GetStarted/GetStarted";
import WorkoutPlan from "./components/WorkoutPlan/WorkoutPlan";
import Nutrition from "./components/Nutrition/Nutrition";
import Menu from "./components/Menu/Menu";

// Import your CSS files here
import './App.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/Programs/Programs.css';
import './components/Reasons/Reasons.css';
import './components/Plans/Plans.css';
import './components/HealthWellness/HealthWellness.css';
import './components/GetStarted/GetStarted.css';
import './components/WorkoutPlan/WorkoutPlan.css';
import './components/Nutrition/Nutrition.css';
import './components/Menu/Menu.css';



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
      },
      {
        path: "/workout-plan",
        element: <WorkoutPlan />,
      },
      {
        path: "/Nutrition",
        element: <Nutrition />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;