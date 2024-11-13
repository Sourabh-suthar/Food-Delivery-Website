import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { red } from '@mui/material/colors'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-downlond'>
        <p>For Better Experience Download <br /> <span style={{color:"tomato"}}>Tomato</span>  App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload