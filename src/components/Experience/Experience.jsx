import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { services } from "../utils/data/services";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { CardFleet } from "../CardFleet/CardFleet";
import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./Experience.scss";

export const Experience = () => {
  const { experience } = useParams();

  const e = services.find((e) => e.path === experience);
  const { extra_fee_note, name, images, description, include, options, fleet } =
    e;

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
            <img
              className="experience-sliderMedia"
              src={`${el}?f_auto&q_auto`} // mejora en Cloudinary
              alt={`Slide ${i}`}
              loading="lazy"
              width="1920"
              height="1080"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transition: "opacity 0.5s ease-in-out",
                opacity: 0,
              }}
              onLoad={(e) => (e.currentTarget.style.opacity = 1)}
            />
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
                  {opt.duration && (
                    <p className="experience-optionsCardDuration">
                      Duration: {opt.duration}
                    </p>
                  )}
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </section>
      )}

      {fleet?.length > 0 && (
        <section className="experience-fleet">
          <h2 className="experience-fleetTitle">Fleet</h2>
          {fleet.slice(0, 5).map((item, i) => (
            <CardFleet key={i} service={name} {...item} />
          ))}
        </section>
      )}

      {extra_fee_note && (
        <div className="experience-extra">
          <PriorityHighIcon className="experience-extraIcon" />
          <p className="experience-extraText">{extra_fee_note}</p>
        </div>
      )}

      <section className="experience-cta">
        <h2 className="experience-ctaTitle">
          Ready for an{" "}
          <strong className="experience-ctaTitleAt">
            unforgettable experience?
          </strong>
        </h2>
        <a
          className="experience-ctaButton"
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/529841794344?text=Hi%20Arcanova%20team,%20I'd%20like%20to%20ask%20you%20about%20${name}...`}
        >
          Book Now
        </a>
      </section>
    </main>
  );
};
