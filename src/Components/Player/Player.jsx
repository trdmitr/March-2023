import React from 'react'
import { useState } from "react";
import classes from "./Player.module.css"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Loader from '../Loader/Loader';
// import { Context } from '../context'

import usePlaylist from '../Hooks/usePlaylist';

const Player = () => {
  const [trackIndex, setTrackIndex] = useState(0)
  const counter = React.useRef(0)
  const { audioList, error } = usePlaylist()
  if (!audioList) {
    return <div className='loadBlock'><Loader /></div>
  }
  if (error) {
    return <h1 className='loadBlock' >Ошибка загрузки!</h1>
  }
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? audioList.length - 1 : currentTrack - 1
    );
  };
  
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < audioList.length - 1 ? currentTrack + 1 : 0
    );
  };
  return (

    <div className={classes.player}>
      {/* <h2>Нонстоп Трибьюта!</h2> */}
      <AudioPlayer className={classes.rap_container}
        // style={{ width: "300px" }}
        style={{
          borderTopLeftRadius: "0rem", borderTopRightRadius: "0rem",
          borderBottomLeftRadius: "1em", borderBottomRightRadius: "1em", backgroundColor: "#green"
        }}
        // autoPlay
        // layout="horizontal"
        src={audioList[trackIndex].src}
        // onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Сейчас играет: ${audioList[trackIndex].name}`}
        footer={`${audioList[trackIndex].aud_name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      // other props here
      />
    </div>
  )
}

export default Player