import React from 'react';
import video from '../assets/videos/video.mp4';
import css from './home.module.css';

function Home() {
  return (
    <div className={css.homeBox}>
        <div className={css.videoContainer}>
            <video
                autoPlay
                muted
                loop
                className={css.video}
                src={video}
                type='video/mp4'
            />

            <h1 className={css.title}>"Feel it, Cook it"</h1>
            <p className={css.slogan}> "A site for your favorite food" </p>
        </div>
    </div>
  )
}

export default Home;