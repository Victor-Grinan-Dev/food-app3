import React from 'react';

import logo from '../assets/images/meLogo.png';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={css.header}>
        <div className={css.logo}>
           <Link to='/'><img src={logo}/></Link> 
        </div> 
        <nav className={css.nav}>
                <ul className={css.ul}>
                    <li className={css.li}> <Link to='/' className={({isActive}) => (isActive ? "active" : "")}> Home </Link></li>
                    <li className={css.li}> <Link to='/browse'> Browse </Link></li>
                    <li className={css.li}> <Link to='/About'> About </Link></li>
                    <li> <a href="https://www.bc.fi/?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L957izCclO7mHzuc9Q4NksNezhLDQ4OZ9Xqjn5T-regQ-2zJDkA69UaAlLQEALw_wcB" target="blank">HBC</a> </li>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar;