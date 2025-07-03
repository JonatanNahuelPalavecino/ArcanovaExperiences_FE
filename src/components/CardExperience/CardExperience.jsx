import "./CardExperience.scss"

export const CardExperience = ({service}) => {
  return (
    <div className="experience-card">
      <div className="image-container">
        <img src={service.foto} alt={service.name} className="card-image" />
        <div className="overlay">
          <p className="description">{service.description}</p>
          <button className="view-more">View More</button>
        </div>
      </div>
      <h3 className="card-title" style={service.type === "private_tour" ? {color: "black"} : undefined}>{service.name}</h3>
    </div>
  );
}
