// src/components/Testimonials.jsx
import React from 'react';
import '../styles/testimonials2.css';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      name: "Amit Sharma",
      text: "The courses here transformed my career. The instructors are top-notch and content is practical!",
      image: "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",  
    },
    {
      name: "Ananya Rathee",
      text: "they have very unique designed, and i have learnt many new things from them. My suggestion is that any should vist them at least 1 time.",
      image: "https://t4.ftcdn.net/jpg/11/78/32/55/240_F_1178325588_aJhjvaEz5wXB1lqJEtHXtapqiF4r1Lf4.jpg"
    },
    {
      name: "Priya Verma",
      text: "Amazing platform! Learned full-stack development and cracked my first job.",
    //   image: "/images/priya.jpg",
      image: "https://t3.ftcdn.net/jpg/05/06/81/08/240_F_506810874_vHcJf2g6lKU2Zy4Hy0XmsKqsWP9TWD2Y.jpg",  

    },
    {
      name: "Rahul Mehta",
      text: "Best online courses with real-world projects. Support team is super helpful too!",
      image: "/images/rahul.jpg",
      image: "https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg",  

    },
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Learners Say</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img className="reviewer-image" src={review.image} alt={review.name} />
              <h4 className="reviewer-name">{review.name}</h4>
              <p className="review-text">“{review.text}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
