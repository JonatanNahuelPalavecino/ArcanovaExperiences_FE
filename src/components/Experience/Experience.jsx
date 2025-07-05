import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { services } from "../utils/data/services";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { CardFleet } from "../CardFleet/CardFleet";
import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";

export const Experience = () => {
  const { experience } = useParams();

  const e = services.find((e) => e.path === experience);
  const { name, images, description, include, options, fleet } = e;

  useEffect(() => {
    document.title = `${name} - Arcanova Experiences`;
  }, []);

  return (
    <main className="experience-page">
      <Splide
        className="slider-container"
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          interval: 4000,
          arrows: false,
          pagination: false,
          rewind: true,
        }}
      >
        {images.map((el, i) => (
          <SplideSlide key={i} className="slider-img">
            <div className="slider-content">
              <img className="slider-media" src={el} alt={i} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <h2>{name}</h2>

      <section className="description">
        <p>{description}</p>
      </section>

      <section className="include-section">
        <h2>Included</h2>
        <div className="includes">
          {include?.map((item, i) => (
            <AnimatedContainer key={i}>
              <div className="include-card">
                <strong>{item.type.replace("_", " ").toUpperCase()}</strong>
                <p>{item.description}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </section>

      <section className="options-section">
        <h2>Options</h2>
        <div className="options">
          {options?.map((opt, i) => (
            <AnimatedContainer key={i}>
              <div className="option-card">
                <h4>{opt.title}</h4>
                <p>{opt.description}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </section>

      {fleet?.length > 0 && (
        <section className="fleet-section">
          <h2>Fleet</h2>
          <div className="fleet-grid">
            {fleet.map((item, i) => (
              <CardFleet key={i} {...item} />
            ))}
          </div>
        </section>
      )}

      <section className="cta-section">
        <h2>Ready for an unforgettable experience?</h2>
        <button className="book-button">Book Now</button>
      </section>
    </main>
  );
};

//DEFINIR ESTE COMPONENTE, ESTILARLO EN FUNCION DE LAS EXPERIENCIAS PRIVADAS, LUEGO ESTILAR EN FUNCION DE LOS TOURS PRIVADOS
