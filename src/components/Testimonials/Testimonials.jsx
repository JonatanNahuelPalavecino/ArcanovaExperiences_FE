import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {testimonials} from "../utils/data/testimonials"
import { FaStar } from "react-icons/fa"
import './Testimonials.scss';


export const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonial-section">
      <h2 className="testimonial-title">Unforgettable Moments,<strong className='testimonial-titleAt'> Told by You</strong></h2>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          pauseOnHover: true,
          gap: '1rem',
          arrows: true,
          pagination: true
        }}
        className="testimonial-slider"
      >
        {testimonials.map((t, index) => (
          <SplideSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-comment">“{t.comment}”</p>
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }, (_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-name">{t.firstName}</p>
              <p className="testimonial-tour">{t.tour}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}
