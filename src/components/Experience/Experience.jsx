import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { services } from "../utils/data/services";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { CardFleet } from "../CardFleet/CardFleet";
import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";
import "./Experience.scss";

export const Experience = () => {
  const { experience } = useParams();

  const e = services.find((e) => e.path === experience);
  const { name, images, description, include, options, fleet } = e;

  useEffect(() => {
    document.title = `${name} - Arcanova Experiences`;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="experience">
      <Splide
        className="experience-slider"
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          interval: 4000,
          arrows: false,
          rewind: true,
        }}
      >
        {images.map((el, i) => (
          <SplideSlide key={i} className="experience-sliderImg">
            <img className="experience-sliderMedia" src={el} alt={i} />
          </SplideSlide>
        ))}
      </Splide>

      <h2 className="experience-title">{name}</h2>
      <p className="experience-description">{description}</p>

      {include && (
        <section className="experience-include">
          <h2 className="experience-includeTitle">Included</h2>
          <div className="experience-includeSection">
            {include?.map((item, i) => (
              <AnimatedContainer
                key={i}
                direction="bottom"
                backgroundColor="rgb(255, 255, 255)"
                borderRadius="25px"
              >
                <div className="experience-includeCard">
                  <strong className="experience-includeCardTitle">
                    {item.type.replace("_", " ").toUpperCase()}
                  </strong>
                  <p className="experience-includeCardDescription">
                    {item.description}
                  </p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </section>
      )}
      {options && (
        <section className="experience-options">
          <h2 className="experience-optionsTitle">Options</h2>
          <div className="experience-optionsSection">
            {options?.map((opt, i) => (
              <AnimatedContainer
                key={i}
                direction="bottom"
                backgroundColor="rgb(255, 255, 255)"
                borderRadius="25px"
              >
                <div className="experience-optionsCard">
                  <strong className="experience-optionsCardTitle">
                    {opt.title}
                  </strong>
                  <p className="experience-optionsCardDescription">
                    {opt.description}
                  </p>
                  <p className="experience-optionsCardDuration">
                    Duration: {opt.duration}
                  </p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </section>
      )}

      {fleet?.length > 0 && (
        <section className="experience-fleet">
          <h2 className="experience-fleetTitle">Fleet</h2>
          {fleet.map((item, i) => (
            <CardFleet key={i} {...item} />
          ))}
        </section>
      )}

      <section className="experience-cta">
        <h2 className="experience-ctaTitle">
          Ready for an{" "}
          <strong style={{ color: "rgb(0, 160, 239)" }}>
            unforgettable experience?
          </strong>
        </h2>
        <button type="button" className="experience-ctaButton">
          Book Now
        </button>
      </section>
    </main>
  );
};

//DEFINIR ESTE COMPONENTE, ESTILARLO EN FUNCION DE LAS EXPERIENCIAS PRIVADAS, LUEGO ESTILAR EN FUNCION DE LOS TOURS PRIVADOS
