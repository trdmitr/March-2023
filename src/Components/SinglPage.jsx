import React from 'react'
import SingContent from './SingContent';
const SinglPage = () => {  
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">
          <SingContent/>
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

export default SinglPage