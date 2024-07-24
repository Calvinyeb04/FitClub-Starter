import React from "react";
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
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
                        <span>Over 140 Expert Coaches: Benefit from the guidance of experienced fitness professionals.</span>
                    </div>
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>Train Smarter and Faster: Achieve your goals more efficiently with our advanced training techniques.</span>
                    </div>
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>Free Program for New Members: Start your journey with complimentary access to our introductory program.</span>
                    </div>
                    <div>
                        <img src={tick} alt="Tick" />
                        <span>Reliable Partners: Trust in our commitment to support and collaborate with you every step of the way.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reasons;
