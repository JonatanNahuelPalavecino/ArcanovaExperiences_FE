import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./CardFleet.scss";

export const CardFleet = ({ service, name, capacity, prices, images }) => {
  const fleetStyles = [
    { gridColumn: "1 / 3", gridRow: "1 / 3" },
    { gridColumn: "1 / 3", gridRow: "3 / 5" },
    { gridColumn: "3 / 4", gridRow: "1 / 2" },
    { gridColumn: "4 / 5", gridRow: "1 / 2" },
    { gridColumn: "3 / 4", gridRow: "2 / 3" },
    { gridColumn: "4 / 5", gridRow: "2 / 3" },
    { gridColumn: "3 / 4", gridRow: "3 / 4" },
    { gridColumn: "4 / 5", gridRow: "3 / 4" },
    { gridColumn: "3 / 4", gridRow: "4 / 5" },
    { gridColumn: "4 / 5", gridRow: "4 / 5" },
  ];

  return (
    <div className="fleet">
      {name && <h4 className="fleet-title">{name}</h4>}

      <div className="fleet-images">
        <div className="fleet-grid">
          {images?.map((img, i) => (
            <img
              key={i}
              className="fleet-img"
              src={img}
              alt={`${name} ${i + 1}`}
              style={fleetStyles[i] || {}}
            />
          ))}
        </div>
        <div className="fleet-carousel">
          <Splide
            options={{
              type: "fade",
              perPage: 1,
              autoplay: true,
              pauseOnFocus: false,
              pauseOnHover: false,
              interval: 2000,
              arrows: false,
              pagination: false,
              rewind: true,
            }}
          >
            {images?.map((el, i) => (
              <SplideSlide key={i}>
                <img className="fleet-carouselImg" src={el} alt={i} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        {capacity && (
          <div className="fleet-info">
            <div className="fleet-infoBox">
              <p className="fleet-infoBoxDescription">
                Capacity: {capacity} people
              </p>
              <a
                className="fleet-infoBtn"
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/529841794344?text=Hi%20Arcanova%20team,%20I'd%20like%20to%20ask%20you%20about%20${service}%20in%20yacht%20${name}...`}
              >
                View More
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
