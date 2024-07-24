import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu">
      <div className="content-wrapper">
        <div className="NavBar">
          <div className="logo">Astro's kitchen</div>
          <ul>
            <li><Link to="/Nutrition">Home</Link></li><li>
              <Link to="/Menu">Menu</Link></li>
            <li><Link to="/Classes">Classes</Link></li>
            <li> <Link to="/Location">Location</Link></li>
            <li> <Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <div className="Header-Content">
          <h1>Delicious Meal Box</h1>
        </div>
        <div className="Parapragh">
          <h3>
            Receive pre-portioned ingredients from Astro's Meal Kits and enjoy
            our
          </h3>
          <h3>best recipes delivered directly to your doorstep!</h3>
          <h3>Experience the convenience and delight of cooking gourmet meals at home.</h3>
        </div>
        <div className="button">
          <button className="Select">Select Program</button>
          <button className="Menu">View Menu</button>
          <Link to="/get-started" className='btn'>
                    Get Started <i className="fas fa-arrow-right"></i>
                </Link>

        </div>
      </div>
    </section>
  );
}
export default Menu;