import React from 'react';
import classes from './video.module.css'
import video from './video.mp4';

function Video() {

  return (
    <div className={classes.videoContainer}>
        <video
            autoPlay
            muted
            loop
            className={classes.video}
            src={video}
            type='video/mp4'
        />

            <h1 className={classes.title}>"Feel it, Cook it"</h1>
            <p className={classes.slogan}> "A site for your favorite food" </p>
       
        
    </div>
  )
}

export default Video;