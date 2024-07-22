import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import GetStarted from './components/GetStarted/GetStarted';

// Import your CSS files here
import './App.css';
import './components/Hero/Hero.css';
import './components/Programs/Programs.css';
import './components/Reasons/Reasons.css';
import './components/Plans/Plans.css';
import './components/GetStarted/GetStarted.css';


// New Home component
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
    element: <Home />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;