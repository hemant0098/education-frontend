import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Empowering learners around the world to achieve their goals through quality education.</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>We aim to provide accessible, affordable, and practical learning opportunities for everyone — whether you're a beginner looking to start a new journey or a professional sharpening your skills.</p>

        <h2>Who We Are</h2>
        <p>We are a team of passionate educators, developers, and designers dedicated to crafting high-quality educational content. Our courses are designed to be interactive, engaging, and hands-on.</p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Expert-led courses designed for real-world application</li>
          <li>✔️ Flexible learning from anywhere, anytime</li>
          <li>✔️ Supportive community and mentorship</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
