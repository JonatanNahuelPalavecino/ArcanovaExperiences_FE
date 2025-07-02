import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";
import image_uno from "../../assets/images/pexels-emiliano-lg-74516068-32784351.jpg";
import image_dos from "../../assets/images/pexels-rpnickson-2631613.jpg";
import "./AboutUs.scss"
import { WaveLines } from "../utils/otros/WaveLines/WaveLines";

export const AboutUs = () => {
  return (
    <section className="about">
      <h2 className="about-title">
        Experience Mexico with the Comfort
        <strong style={{color: "#6679db", display: "block"}}> You Deserve</strong>
      </h2>
      <div className="about-container">
        <AnimatedContainer
          direction="bottom"
          backgroundColor="rgba(0, 0, 0, 0)"
          borderRadius="none"
          boxShadow="none"
        >
          <p className="about-text">
            At Arcanova Experiences, we specialize in creating unforgettable,
            all-inclusive vacations in the heart of the Mexican Caribbean.
          </p>
        </AnimatedContainer>
        <div className="about-box">
          <WaveLines />
          <AnimatedContainer
            direction="left"
            backgroundColor="rgba(255, 255, 255, 0.9)"
            borderRadius="none"
            boxShadow="none"
          >
            <p className="about-text about-limit">
              From private yacht tours in Cancún to luxury accommodations,
              airport transfers, and curated excursions — we handle every
              detail, so you can focus on what truly matters:
              <strong> relaxation, discovery, and peace of mind.</strong>
            </p>
          </AnimatedContainer>
          <AnimatedContainer
            direction="right"
            backgroundColor="rgb(255, 255, 255)"
            borderRadius="25px"
          >
            <img className="about-img" src={image_uno} alt="Imagen-Uno" />
          </AnimatedContainer>
        </div>
        <div className="about-box">
          <AnimatedContainer
            direction="left"
            backgroundColor="rgb(255, 255, 255)"
            borderRadius="25px"
          >
            <img className="about-img" src={image_dos} alt="Imagen-Dos" />
          </AnimatedContainer>
          <AnimatedContainer
            direction="right"
            backgroundColor="rgba(0, 0, 0, 0)"
            borderRadius="none"
            boxShadow="none"
          >
            <p className="about-text about-limit">
              With years of experience hosting travelers from the U.S., Canada, Alaska, and Europe, we offer safe, seamless, and personalized service tailored to your pace and preferences. Whether you're seeking adventure or serenity, we make sure your Mexico experience feels effortless and extraordinary.
            </p>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};
