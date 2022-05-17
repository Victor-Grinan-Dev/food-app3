import React from 'react';
import Video from '../assets/videos/Video';
import css from './home.module.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className={css.homeBox}>
        <Video/>
        <div className={css.boxWrapper}>
          <Link to='/add'><div className={css.box}> Add recipe </div></Link>
          <Link to='/browse' ><div className={css.box}> Browse </div></Link>
          <Link to='/about' > <div className={css.box}> About </div></Link>       
        </div>
    </div>
  )
}

export default Home;