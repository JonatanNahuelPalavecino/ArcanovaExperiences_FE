import { CardExperience } from "../CardExperience/CardExperience";
import AnimatedContainer from "../utils/otros/AnimatedContainer/AnimatedContainer";
import { services } from "../utils/data/services";
import "./Experiences.scss";

export const Experiences = () => {
  const privateExperiences = services.filter(
    (s) => s.type === "private_experiences"
  );
  const privateTours = services.filter((s) => s.type === "private_tour");

  const gridStyles = [
    { gridColumn: "1 / 3", gridRow: "1 / 3" },
    { gridColumn: "3 / 5", gridRow: "1 / 2" },
    { gridColumn: "3 / 4", gridRow: "2 / 4" },
    { gridColumn: "4 / 5", gridRow: "2 / 4" },
    { gridColumn: "1 / 2", gridRow: "3 / 4" },
    { gridColumn: "2 / 3", gridRow: "3 / 4" },
    { gridColumn: "1 / 3", gridRow: "4 / 5" },
    { gridColumn: "3 / 5", gridRow: "4 / 5" },
  ];

  return (
    <section className="experiences">
      <h2 className="experiences-title">
        Our <strong style={{ color: "rgb(0, 160, 239)" }}>Experiences</strong>
      </h2>
      <div className="experiences-section">
        <h3 className="experiences-sectionTitle">Private Experiences</h3>
        <div className="experiences-sectionBox">
          {privateExperiences.map((service, index) => (
            <AnimatedContainer
              key={service.name}
              direction="bottom"
              delay={index * 0.1}
              backgroundColor={
                service.name === "Cancún"
                  ? "#C0C0C0"
                  : "rgba(255, 255, 255, .5)"
              }
              boxShadow={service.name === "Cancún" ? "0 0 15px white" : "none"}
            >
              <CardExperience service={service} />
            </AnimatedContainer>
          ))}
        </div>
      </div>
      <div className="experiences-section">
        <h3 className="experiences-sectionTitle">Private Tours</h3>
        <div className="experiences-sectionBox tours-grid">
          {privateTours.map((service, index) => {

            const style = gridStyles[index] || {gridColumn: "auto", gridRow: "auto"}

            return (
            <AnimatedContainer
              key={service.name}
              direction="bottom"
              delay={index * 0.1}
              backgroundColor="rgb(255, 255, 255)"
              boxShadow="none"
              style={style}
            >
              <CardExperience service={service} />
            </AnimatedContainer>
            )
          })}
        </div>
      </div>
    </section>
  );
};
