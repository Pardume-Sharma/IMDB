import React from 'react'
// import './script.js'
import RRR from './assets/RRR.jpg'

console.log(RRR);

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-left">
            <div className="img-container">
                <img src={RRR} alt="" />                
            </div>
        </div>
        <div className="hero-right">
            <div className="hero-head">
                Up Next
            </div>
            <div className="box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, provident!
            </div>
            <div className="box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, provident!
            </div> <div className="box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, provident!
            </div>
            <div className="box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, provident!
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero