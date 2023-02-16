import React, { Component } from 'react';
import '../App.css';

import video from '../img/about/video_optimen.mp4'

import 'react-html5video/dist/styles.css';
import Optimen from '../img/about/Optimen.jpeg';
import Footer from '../layouts/footer';

export default class About_Us extends Component {
  render() {
    return (
<div className='primerText'>
       
        <div className='card-title'>
        <div>
       
        <div className='prim'  style={{  display: "flex", marginTop:"60px",  justifyContent: "center"}}>
          <div>
            <h1 >WHAT IS OPTIMEN?</h1>
            <p style={{width: "490px", height: "600px"}}>
        Optimen is a Mexican Software Development company that provides 
        resources management and optimization services to different industries.
        The company was designated and approved as an International sService
        Contractor for Jeppesen and Boeing.</p></div>
          <hr></hr>
        <img src={Optimen} alt="imagen" style={{ marginLeft: "50px",width: "580px", left:"10",height:"360px" }}/>
          </div>
      </div> 
    </div> 
<div className='container' >
<div className='col-md-6'>
<div className='column1'>
        <div className='card-body'>
         <div className='card-title'>
           <h3>MISSION</h3>
           <hr style={{ color:"#000000", background:"black" }}></hr>
           <p className="card-text text-secondary">Support and facilitate Air Lines around the  <br/>
              world to maintain reliable and sustainable  <br/>
              operations through Technology, Innovation  <br/>
              and living our Values.
            </p>
          </div>
        </div>
      </div>
      <div className='column2'>
  
        <div className='card-body'>
          <div className='card-title'>
            <h3>VISION</h3>
            <hr></hr>
            <p className='card-text text-secondary'>To be the First option in Software, Technology <br/>
            and Innovation services for the global Airlines in <br/>
            the area of Aeronautical operational control.
            </p>
          </div>
        </div>
      </div>
      <div className='column3'>
        
        <div className='card-body'>
            <div className='card-title'>
              <h3>VALUES</h3>
              <hr ></hr>
              <p className="card-text text-secondary">
                 Trustworthy <br/>
                 Respect <br/>
                 Integrity <br/>
                 Teamwork <br/>
                 InnovationSupport 
              </p>
            </div>
          </div>
        </div>
</div>
</div>

<video id="video" autoPlay loop onCanPlayThrough={()=>{console.log('video play')}} >
  <source src={video} type='video/webm'/>
</video>
        
        <div>
        <h1 >Airline Experience</h1>
        <div className='AE1'  style={{  display: "flex",  justifyContent: "center"}}>
        
          <img></img>
          <p>Associated with long experience in the Airline 
             Industry with high trust and tight relation with
            commercial airlines and industry key players.</p>
        </div>

        <div className='AE2'>
          <p>Broad experience developing software in 
             real Airline Operational Control Systems 
             and implementation of Optimization Software.</p>
             
        </div>

        <div className='AE3'>
          <p>Strong Project Management following the industry best practices</p>
        </div><br/><br/><br/><br/>
        </div>
        <Footer/>
</div>

     
    )
  }
}