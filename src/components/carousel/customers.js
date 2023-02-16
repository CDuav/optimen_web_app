import React,{Fragment} from "react";
import "./Css/Casouser.css";
import Carousel from "react-elastic-carousel";
import uno from "../../img/customers/1.jpg";
import dos from "../../img/customers/2.jpg";
import tres from "../../img/customers/3.jpg";
import cuatro from "../../img/customers/4.jpg";
import cinco from "../../img/customers/5.jpg";
import seis from "../../img/customers/6.jpg";
import siete from "../../img/customers/7.jpg";

const breakPoints=[
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3}
];

const Customers = () => {
    return(
        <Fragment>
            <section>
                <div className="row">
                    <Carousel breakPoints={breakPoints} dot="noActive">
                    <div className="customer">
                         <div className="img">
                             <img src={uno} alt="1"/>
                         </div>
                    </div>
                    <div className="customer">
                        <div className="img">
                         <img src={dos} alt="Ahora pasa"></img>
                        </div>
                    </div>
                    <div className="customer">
                        <div className="img">
                       <img src={siete} alt="ALTAM"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={cuatro} alt="nada"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={cinco} alt="sisisi"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={seis} alt="ggg"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={tres} alt="ggg"></img>
                        </div>
                    </div>
                    </Carousel>
                </div>
            </section>
        </Fragment>
    )
}

export default Customers