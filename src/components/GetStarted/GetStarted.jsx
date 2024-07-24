import React, { useState } from "react";
import './GetStarted.css';


const GetStarted = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className={`get-started ${isLogin ? 'login-bg' : 'signup-bg'}`}>
            <div className="form-container">
                <div className={`form-box ${isLogin ? 'login' : 'signup'}`}>
                    <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form>
                        {!isLogin && (
                            <input type="text" placeholder="Full Name" required />
                        )}
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        {!isLogin && (
                            <input type="password" placeholder="Confirm Password" required />
                        )}
                        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                    </form>
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={toggleForm} className="toggle-link">
                            {isLogin ? 'Sign Up' : 'Login'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;