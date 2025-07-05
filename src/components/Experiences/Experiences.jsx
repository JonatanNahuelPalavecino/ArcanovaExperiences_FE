import { CardExperience } from "../CardExperience/CardExperience";
import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";
import { services } from "../utils/data/services";
import "./Experiences.scss";
import { Waves } from "../utils/otros/Waves/Waves";

export const Experiences = () => {
  const privateExperiences = services.filter(
    (s) => s.type === "private_experiences"
  );
  const privateTours = services.filter((s) => s.type === "private_tour");

  const privateExperiencesStyles = [
    { gridColumn: "1 / 3", gridRow: "1 / 2" },
    { gridColumn: "3 / 5", gridRow: "1 / 3" },
  ];

  const privateToursStyles = [
    { gridColumn: "1 / 3", gridRow: "1 / 3" },
    { gridColumn: "3 / 5", gridRow: "1 / 2" },
    { gridColumn: "3 / 4", gridRow: "2 / 4" },
    { gridColumn: "4 / 5", gridRow: "2 / 4" },
    { gridColumn: "1 / 2", gridRow: "3 / 4" },
    { gridColumn: "2 / 3", gridRow: "3 / 4" },
    { gridColumn: "1 / 3", gridRow: "4 / 5" },
    { gridColumn: "3 / 5", gridRow: "4 / 5" },
    { gridColumn: "1 / 2", gridRow: "5 / 6" },
    { gridColumn: "2 / 5", gridRow: "5 / 6" },
  ];

  return (
    <section id="experiences" className="experiences">
      <h2 className="experiences-title">
        Our <strong style={{ color: "rgb(0, 160, 239)" }}>Experiences</strong>
      </h2>
      <div className="experiences-section">
        <h3 className="experiences-sectionTitle">Private Experiences</h3>
        <div className="experiences-sectionBox">
          {privateExperiences.map((service, index) => {
            const style = privateExperiencesStyles[index] || {
              gridColumn: "auto",
              gridRow: "auto",
            };

            return (
              <AnimatedContainer
                key={service.name}
                direction="bottom"
                delay={index * 0.1}
                backgroundColor={
                  service.name === "Cancún"
                    ? "#C0C0C0"
                    : "rgba(255, 255, 255, .5)"
                }
                boxShadow={
                  service.name === "Cancún" ? "0 0 15px white" : undefined
                }
                style={style}
              >
                <CardExperience service={service} />
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
      <div className="experiences-section">
        <Waves/>
        <h3 className="experiences-sectionTitle">Private Tours</h3>
        <div className="experiences-sectionBox">
          {privateTours.map((service, index) => {
            const style = privateToursStyles[index] || {
              gridColumn: "auto",
              gridRow: "auto",
            };

            return (
              <AnimatedContainer
                key={service.name}
                direction="bottom"
                delay={index * 0.1}
                backgroundColor="rgba(255, 255, 255, .7)"
                style={style}
              >
                <CardExperience service={service} />
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
