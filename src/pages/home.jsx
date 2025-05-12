import React from 'react';
import '../styles/home.css';
// import Testimonials from './testimonials';
import Testimonials from './testimonials2';
import Blog from './blog';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}

      <section className="hero-section">
        <div className="video-container">
          <video autoPlay muted loop className="bg-video">
            <source src="https://static.vecteezy.com/system/resources/previews/046/364/385/mp4/female-student-reading-book-searching-information-in-university-campus-library-blurry-bookshelf-background-for-education-and-publication-concept-back-to-school-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div> {/* blur layer */}
        </div>

        <div className="hero-content">
          <h1>Learn Anytime, Anywhere</h1>
          <p>Join thousands of learners and upgrade your skills today!</p>
          {/* <button className="cta-button">Get Started</button> */}
          <Link className="cta-button" to="/Courses">Get Started</Link>
        </div>
      </section>

      {/* <section className="hero-section">
        <h1>Learn Anytime, Anywhere</h1>
        <p>Join thousands of learners and upgrade your skills today!</p>
        <button className="cta-button">Get Started</button>
      </section> */}

      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>React for Beginners</h3>
            <p>Master React basics with practical projects</p>
          </div>
          <div className="course-card">
            <h3>Advanced JavaScript</h3>
            <p>Deep dive into ES6+, async, and more</p>
          </div>
          <div className="course-card">
            <h3>Full Stack Development</h3>
            <p>Build real-world apps with MERN stack</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li> Expert Instructors</li>
          <li> Lifetime Access</li>
          <li> 100% Practical Projects</li>
        </ul>
      </section>

      {/* testimonials section */}
      <Testimonials />
      <Blog />

    </div>
  );
};

export default Home;
