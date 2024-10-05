// src/pages/Contact.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Here, you can integrate with a backend service or email API to send the feedback.
    // For this example, we'll just log the data and show a success message.

    console.log('Feedback submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setStatus('Thank you for your feedback!');
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center mb-5">Contact Me</h2>
        <ContactInfo /> {/* Display contact methods */}
        <form onSubmit={handleSubmit}>
          {status && <div className="alert alert-info">{status}</div>}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
