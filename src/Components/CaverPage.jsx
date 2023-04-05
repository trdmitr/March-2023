import React, { useContext, useMemo, useState } from 'react'
import { Link} from 'react-router-dom';
import classes from "./CaverPage.module.css"
import { Context } from './context'
import Player from './Player/Player';
import RoundLoader from './Loader/RoundLoader';
import Img from './UI/Img';
import Modal from './UI/Modal/Modal';
import About from './UI/About';
import PlayButton from './UI/Modal/PlayButton';

export const CaverPage = () => {
  // const [data, setData] = useState({});
  // const [songError, setSongError] = useState(false);
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
 
  // const urlParse = urlLoc.includes('cavers21') ? urlParse21 : urlLoc.includes('cavers22') ? urlParse22 : urlLoc.includes('cavers23') ? urlParse23 : "";
  const { data: songs, loading, error } = useContext(Context);
  // const songs = Array.from(data);
  const singContent = useMemo(() => {
    if (loading) {
      return <div className='loadBlock'><RoundLoader /></div>
    }
    if (error) {
      return <div className='loadBlock'>Ошибка загрузки!</div>
    }
    return songs.map((song, i) => {
      return (
      
        <Link key={i} to={`/cavers/${song.id}`}>
          <div className={classes.media}>
            <div className={classes.mediaImage}>
              {/* <img src={song.photo} width={100} alt={song.name} /> */}
              <Img imgUrl={song.photo} imgAlt={song.name} />
            </div>
            <div>
              <p> {song.name} </p>
            </div>
          </div>
        </Link>
      )

    })

  }, [songs])
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">
       
          <div className={classes.row}>
            <Modal visible={modal} setVisible={setModal}>
              <About />
            </Modal>
            <PlayButton onClick={() => setModal(true)}>
            <span role="img" aria-label="emoji name"> 📌 </span>
            </PlayButton>
            <div className={classes.column50}>
            {/*  */}
              {error ? <h2>Ошибка загрузки!</h2> : ""}
              {singContent}
            </div>
            <Player songs={songs} />
          </div>
          <Link to="/"><button className={classes.btnHome}>Главная</button></Link>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header">
        <div className="device-sensors"></div>
      </div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  )
}
