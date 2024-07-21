import React from "react";
import './Plans.css';
import { plansData } from "../../data/plansData";  // Importing plansData


const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
               
            </div>

            {/* Plans */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        <hr></hr>
                        <div className="plan-icon" >{plan.icon}</div>
                        <span className="plan-name">{plan.name}</span>
                        <span className="plan-price">${plan.price}</span>
                        <span className="plan-duration">/month</span>
                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="plan-feature">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="plan-button">CHOOSE PLAN</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
