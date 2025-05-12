// src/components/Testimonials.jsx
import React from 'react';
import '../styles/testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Amit Sharma",
      text: "The courses here transformed my career. The instructors are top-notch and content is practical!",
      image: "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",  
    },
    {
      name: "Priya Verma",
      text: "Amazing platform! Learned full-stack development and cracked my first job.",
      image: "https://t3.ftcdn.net/jpg/05/06/81/08/240_F_506810874_vHcJf2g6lKU2Zy4Hy0XmsKqsWP9TWD2Y.jpg",  
    },
    {
      name: "Rahul Mehta",
      text: "Best online courses with real-world projects. Support team is super helpful too!",
      image: "https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg",  
    },
  ];

      return (
    <section className="testimonials-section">
      <h2>What Our Learners Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <img className="reviewer-image" src={review.image} alt={review.name} />
            <h4 className="reviewer-name">{review.name}</h4>
            <p className="review-text">“{review.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
