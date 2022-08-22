import React from "react";
import "./Contact.scss";
export default function Contact() {
  return (
    <div className="contact" id="contact">

        <h1 className="color-white display-4 fw-bold">Get In Touch</h1>

        <p className="color-white text-center my-5" style={{maxWidth:'550px'}}>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you asap!</p>

      <button className="btn-special my-4">
        <a className="nav-link  " href="mailto:abdelazizmohamed12121@gmail.com">
          Say Hello
        </a>
      </button>

      <div className="icons  my-5">
        <a href="https://github.com/abdelaziz123456"  target={'_blank'}><i className="fa fa-github hovered-text fa-2x " aria-hidden="true"></i></a>
        <a href="tel:+201158793928"  target={'_blank'} rel={'noreferrer'}><i className="fa fa-phone hovered-text fa-2x" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/abdelaziz12315/"  target={'_blank'}><i className="fa fa-linkedin-square hovered-text fa-2x" aria-hidden="true"></i></a>
      
       
      </div>

      
    </div>
  );
}
