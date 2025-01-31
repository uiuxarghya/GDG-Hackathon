import React from 'react';
import '../css/footer.css';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="title">Connect <span className='text-purple-600'>With Us</span></h1>
        <div className="divider-container">
          <hr className="divider" />
        </div>
        <h2 className="subtitle">CONTACT US!</h2>
        
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-header">
            <h3>DROP A MAIL</h3>
            <Mail className="icon" color="purple" size={32} />
          </div>
          <button className="contact-button">MAIL US</button>
        </div>

        <div className="contact-card">
          <div className="card-header">
            <h3>CATCH A CALL</h3>
            <Phone className="icon" color="purple" size={32} />
          </div>
          <button className="contact-button">CALL US</button>
        </div>

        <div className="contact-card">
          <div className="card-header">
            <h3>JOIN OUR DISCORD</h3>
            <MessageSquare className="icon" color="purple" size={32} />
          </div>
          <button className="contact-button">LET'S CHAT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
