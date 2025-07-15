import { CardExperience } from "../CardExperience/CardExperience";
import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";
import { services } from "../utils/data/services";
import "./Experiences.scss";
import { Waves } from "../utils/otros/Waves/Waves";
import { useState } from "react";

export const Experiences = () => {
  const privateExperiences = services.filter(
    (s) => s.type === "private_experiences"
  );
  const privateTours = services.filter((s) => s.type === "private_tour");

  return (
    <section id="experiences" className="experiences">
      <h2 className="experiences-title">
        Our exclusive <strong className="experiences-titleAt">Experiences</strong>
      </h2>
      <div className="experiences-section">
        <h3 className="experiences-sectionTitle">Yacht's Experiences</h3>
        <div className="experiences-sectionBox">
          {privateExperiences.map((service, index) => (
              <AnimatedContainer
                key={service.name}
                direction="bottom"
                delay={index * 0.1}
                backgroundColor="rgba(255, 255, 255)"
                style="experiences-sectionCard"
              >
                <CardExperience service={service} />
              </AnimatedContainer>
            )
          )}
        </div>
      </div>
      <div className="experiences-section">
        {/* <Waves/> */}
        <h3 className="experiences-sectionTitle">Private Adventures Tours</h3>
        <div className="experiences-sectionBox">
          {privateTours.map((service, index) =>  (
              <AnimatedContainer
                key={service.name}
                direction="bottom"
                delay={index * 0.1}
                backgroundColor="rgba(255, 255, 255)"
                style="experiences-sectionCard"
              >
                <CardExperience service={service} />
              </AnimatedContainer>
            )
          )}
        </div>
      </div>
    </section>
  );
};
