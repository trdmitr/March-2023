import React from 'react'
import classes from "./components.module.css"
import { Link } from 'react-router-dom';

export const HomePage = () => {
    const imgUrl = "https://sun9-15.userapi.com/impg/n273etPwG-4KG8-vuoI-J2HdUR376j0o5cexYg/7TYcKT7xhcE.jpg?size=541x755&quality=96&sign=6c24221744e44f89409d78c9f0c21612&type=album"
    const imgAlt = "Каверы Подземки"
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1U3M7aGhmpFQHd3SNNupwghkrQagbRKq2";
    const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    const yearTrib21 = 21;
    const yearTrib22 = 22;
    const yearTrib23 = 23;
  return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      <span className={classes.navLink}>Каверы датам марта 2023 посвящается!</span>
                      {/* <Link to={"/cavers21"} className={classes.navLink21}
                      onClick={() => {  handleClick(imgAlt);console.log('Клик!', value); }}                 
                    >2021</Link> */}
                     <Link to={`/cavers`} className={classes.navLink21}>Слушать!</Link>
                      {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                      <div className={classes.main}>
                      
                          {/* <div className={classes.article}><p >Вот и всё что было...</p></div> */}
                          <div className={classes.article}><img src={imgUrl} width={100} alt={imgAlt} /></div>

                      </div>
                  </div>
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
