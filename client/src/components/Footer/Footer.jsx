import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
    const [input, setInput] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        setInput("");
    };
    return (
        <div className="contact-conatiner">
            <div className="contact-body">
                <div className="contact-header">
                    <h4>News Letter</h4>
                    <h2>Sign Up For free</h2>
                </div>
                <form onSubmit={formSubmit} action="">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="input"
                        type="text"
                    />
                    <button className="form-btn">Submit</button>
                </form>
                <p className="contact-policy">Will be use Accourding policy</p>
            </div>
        </div>
    );
};

export default Footer;
