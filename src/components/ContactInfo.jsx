import React from 'react';
import email from '../assets/images/email.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import instagram from '../assets/images/instagram.svg';

const contactMethods = [
  {
    id: 1,
    icon: email,
    title: 'Email',
    link: 'mailto:shravanirasam0212@gmail.com',
    text: 'shravanirasam0212@gmail.com'
  },
  {
    id: 2,
    icon: linkedin,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/shravanirasam02/',
    text: 'LinkedIn Profile'
  },
  {
    id: 3,
    icon: github,
    title: 'GitHub',
    link: 'https://github.com/ShravaniR2412',
    text: 'GitHub Profile'
  },
  {
    id: 4,
    icon: instagram,
    title: 'Instagram',
    link: 'https://www.instagram.com/your-profile',
    text: 'Instagram Profile'
  }
];

const ContactInfo = () => {
  return (
    <div className="row mb-5">
      {contactMethods.map(method => (
        <div className="col-md-3 mb-4 text-center" key={method.id}>
          <img 
            src={method.icon} 
            alt={`${method.title} Icon`} 
            className="mb-2" 
            style={{ width: '40px' }} 
          />
          <h4>{method.title}</h4>
          <p>
            <a 
              href={method.link} 
              className="text-decoration-none text-dark" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {method.text}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
