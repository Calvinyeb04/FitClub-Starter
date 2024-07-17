import React from "react";
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="Reason 1" />
                <img src={image2} alt="Reason 2" />
                <img src={image3} alt="Reason 3" />
            </div>
            <div className="right-r">
                <div>
                    <span className="stroke-text">Why</span>
                    <span className="stroke-text2"> Choose Us?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>FREE PROGRAM FOR NEW MEMBERS</span>
                    </div>
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reasons;
