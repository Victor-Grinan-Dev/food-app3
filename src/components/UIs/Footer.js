import React from 'react';
import css from './footer.module.css';
import Insta from '../assets/images/insta-white-border.png';




function Footer() {
  return (
    <div className={css.footer}>
        <p>created with love in Finland</p>
        <a href="https://instagram.com/feelit_cookit?igshid=YmMyMTA2M2Y=" target="blank">
            <img src={Insta} className={css.some}/>
        </a>

    </div>
  )
}

export default Footer;


/*
        <a href="https://www.linkedin.com/in/victor-gri%C3%B1an-892a741b7/" target="blank">
            <img src={Linkedin} className={css.someIcon}/>
        </a>
*/