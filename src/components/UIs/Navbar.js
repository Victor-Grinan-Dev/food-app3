import React from 'react';
import logo from '../assets/images/meLogo.png';
import { NavLink } from 'react-router-dom';
import css from './navBar.module.css';
import Insta from '../assets/images/insta-white-border.png';
function Navbar() {
  return (
    <div className={css.navContainer}>

      <div className={css.logo}>
        <NavLink to='/'><img src={logo}/></NavLink> 
      </div>

      <div className={css.navLinkContainer}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="browse">Browse</NavLink>
        <NavLink to='/About'> About </NavLink>
        <NavLink to="/add">Add new recipe</NavLink>
        <a href="https://www.bc.fi/?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L957izCclO7mHzuc9Q4NksNezhLDQ4OZ9Xqjn5T-regQ-2zJDkA69UaAlLQEALw_wcB" target="blank">HBC</a>
        <a href="https://instagram.com/feelit_cookit?igshid=YmMyMTA2M2Y=" target="blank">
            <img src={Insta} className={css.some}/>
        </a>
      </div> 
    </div>
  )
}

export default Navbar;