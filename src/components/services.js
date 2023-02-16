import React from 'react'
import Card from 'react-bootstrap/Card';
import Auditing from '../img/servicio/Auditing.jpg';
import Consultancy from '../img/servicio/Consultancy.jpg';
import Implementation from'../img/servicio/Implementation.jpg';
import Interfaces from '../img/servicio/Interfaces.jpg';
import Innovation from '../img/servicio/Innovation.jpg';
import Business from '../img/servicio/Business.jpg';
import PS from '../img/servicio/PS.jpg';
import Footer from '../layouts/footer';

const Services = () => {
    return (
      <div>
        <br></br>
        <div className='imagen'  style={{  display: "flex",height:"440px"}} >
        <br></br>
          <img src={PS}alt="imagen" style={{ width: "420px", height: "420px"}}/>
          <br></br>
         <div id="tex" style={{marginTop:"5.8%",marginLeft:"10%"}}><h1>4OPS</h1>
          <hr></hr> 
          <p style={{width: "490px", height: "480px"}}>Facilitate resource allocation and 
          personnel assignment while maintaining reliable and sustainable operations, using optimizers
           based on artificial intelligence and advanced mathematical models.</p>
           </div> 
          </div>
          <h1>Our Services</h1>
      <div className="card-container" style={{marginBottom:"10px"}}>
        <div id="card" ><Card.Img variant="top" src={Auditing}  height= "170px" object-position="50% 50%"/>AUDITING</div>
        <div id="card"><Card.Img variant="top" src={Consultancy}  width= "9px" height= "180px" object-position="50% 50%"/>CONSULTANCY</div>
        <div id="card"><Card.Img variant="top" src={Implementation}  width= "200px" height= "170px" object-position="50% 50%"/>IMPLEMENTATION OUTSOURCING</div>
        <div id="card"><Card.Img variant="top" src={Interfaces}  width= "10px" height= "200px" object-position="50% 50%"/>INTERFACES DEVELOPMENT</div>
        <div id="card"><Card.Img variant="top" src={Innovation}  width= "10px" height= "200px" object-position="50% 50%"/>INNOVATION</div>
        <div id="card"><Card.Img variant="top" src={Business}  width= "8px" height= "160px" object-position="50% 50%"/>BUSINESS RULES DEVELOPMENT</div>
      </div>

      
     
      <Footer/>
    </div>
 
    );
    }
    

export default Services

