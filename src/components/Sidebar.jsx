import React from 'react';
import logo from '../assets/Instagram_logo.svg.png';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  return(
    <div className="sideBarContainer">
      <div className="navigation">
        <div className="logo">
          <img src={logo}/>
        </div>
        <nav>
          <ul>
            <li><a  className="navigation-link"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a  className="navigation-link"><i class="fa-solid fa-magnifying-glass"></i> Search</a></li>
            <li><a  className="navigation-link"><i class="fa-regular fa-compass"></i> Explore</a></li>
            <li><a  className="navigation-link"><i class="fa-solid fa-film"></i> Reels</a></li>
            <li><a  className="navigation-link"><i class="fa-brands fa-facebook-messenger"></i> Messages</a></li>
            <li><a  className="navigation-link"><i class="fa-regular fa-heart"></i> Notifications</a></li>
            <Link to="/create">
            <li className="navigation-link"><i class="fa-solid fa-circle-plus"></i> Create</li>              
            </Link>
            <li><a className="navigation-link"><i class="fa-regular fa-circle-user"></i> Profile</a></li>
          </ul>
        </nav>
        <a href="/" className="navigation-link logout">
            <i class="fa-solid fa-bars"></i>
            <span>More</span>
        </a>
      </div>
    </div>
  );
}
export default Sidebar;