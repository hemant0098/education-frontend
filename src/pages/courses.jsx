import React from 'react';
import '../styles/courses.css';

const Courses = () => {
  const courseData = [
    {
      title: 'React for Beginners',
      description: 'Master React basics and build interactive UIs.',
      duration: '6 weeks',
      level: 'Beginner'
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into ES6+, async, closures, and more.',
      duration: '8 weeks',
      level: 'Advanced'
    },
    {
      title: 'Full Stack Development',
      description: 'Build full-stack MERN apps from scratch.',
      duration: '12 weeks',
      level: 'Intermediate'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Crack coding interviews with DSA skills.',
      duration: '10 weeks',
      level: 'Intermediate'
    },
    {
      title: 'Node.js & Express',
      description: 'Backend development with Node.js & Express.',
      duration: '8 weeks',
      level: 'Intermediate'
    },
    {
      title: 'UI/UX Design Basics',
      description: 'Learn design principles & tools for web apps.',
      duration: '4 weeks',
      level: 'Beginner'
    }
  ];

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-list">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-meta">
              <span><strong>Duration:</strong> {course.duration}</span>
              <span><strong>Level:</strong> {course.level}</span>
            </div>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
