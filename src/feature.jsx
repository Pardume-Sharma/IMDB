import React from 'react'
import './global.css'
import RRR from './assets/RRR.jpg'
import shubh from './assets/shubh.jpg'
import kaagaz from './assets/kaagaz.jpg'
import storm from './assets/storm.jpg'

const Feature = () => {
  return (
    <>
    <div className="feature">
        <div className="hero-head">
            Feature Today
        </div>
        <div className="feature-container">
            <div className="ftr-img">
                <img src={RRR} alt="" className='movie-img' />
                <div className="hero-head">
                    RRR
                </div>
                <div className="ftr-name">
                    Lorem ipsum dolor sit, amet 
                </div>
            </div>
            
            <div className="ftr-img">
                <img src={shubh} alt="" className='movie-img' />
                <div className="hero-head">
                    Shubh Mangal Zyada Savdhaan
                </div>
                <div className="ftr-name">
                    Lorem ipsum dolor sit, amet 
                </div>
            </div>
            <div className="ftr-img">
                <img src={kaagaz} alt="" className='movie-img' />
                <div className="hero-head">
                    Kaagaz
                </div>
                <div className="ftr-name">
                    Lorem ipsum dolor sit, amet 
                </div>
            </div><div className="ftr-img">
                <img src={storm} alt="" className='movie-img' />
                <div className="hero-head">
                    Storm
                </div>
                <div className="ftr-name">
                    Lorem ipsum dolor sit, amet 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Feature