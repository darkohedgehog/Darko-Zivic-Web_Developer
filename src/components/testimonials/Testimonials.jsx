import "./testimonials.css";
import AVTR1 from "../../assets/ztm2.jpg";
import AVTR2 from "../../assets/w3sch.jpg";
import AVTR3 from "../../assets/jsinfo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,    
    name: "Andrei Neagoie & Zero To Mastery"
    
  },
  {avatar: AVTR2,    
    name: "W3 Schools"   
  },
  {
    avatar: AVTR3,    
    name: "JavaScript.info"    
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Study Recommendations</h5>
      <h2>Special Thanks</h2> 

      <Swiper className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}   
      >
      {
        data.map (({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt='' />
            </div>
            <h5 name="true">{name}</h5>
            <small className='client_review'>
              {review}
            </small>         
        </SwiperSlide>    
          )             
        })
        
      }
      </Swiper>
    </section>
  )
}

export default Testimonials;