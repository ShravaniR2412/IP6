import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import pg1 from '../assets/images/pg1.png';
import pg2 from '../assets/images/pg2.png';
import pg3 from '../assets/images/pg3.png';

const projects = [
  {
    id: 1,
    title: 'Waste Wise Web',
    description: 'Waste Wise Web is dedicated to addressing the global waste crisis by providing accurate information on proper waste disposal. Our platform empowers communities to combat misinformation, fostering a collective effort for a cleaner planet.',
    img: pg1
  },
  {
    id: 2,
    title: 'Green Guide',
    description: 'GreenGuide emerges as a solution, addressing the urgent need for afforestation. With each tree planted, we strive to safeguard our environment, ensuring a sustainable future for all.',
    img: pg2
  },
  {
    id: 3,
    title: 'SkillSpire',
    description: 'SkillSpire is a web application which aims to develop a software solution facilitating seamless connections between students and suitable internship opportunities.',
    img: pg3
  }
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <Footer />
    </>
  );
};

export default Home;
