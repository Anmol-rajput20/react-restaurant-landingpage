import React from 'react';

import {meal} from '../../constants';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo,setPlayVideo] = React.useState(false);
  const vidref = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo){
      vidref.current.pause();
    }else{
      vidref.current.play();
    }
  }
  return(
  <div className="app__video">
    <video
    src={meal}
    ref={vidref}
    type="video/mp4"
    loop
    muted
    />
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center"
      onClick = {handleVideo}
      >
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={30}/>
        ) : <BsFillPlayFill color="#fff" fontSize={30}/>}

      </div>
    </div>
   
  </div>
  )
};

export default Intro;
