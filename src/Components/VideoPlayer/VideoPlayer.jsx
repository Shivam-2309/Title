import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/title-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
      console.log(e);
      console.log(player);
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay controls className="video-element"></video>
        </div>
    );
};

export default VideoPlayer;
