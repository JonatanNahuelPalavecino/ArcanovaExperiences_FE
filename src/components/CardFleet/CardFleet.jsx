import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./CardFleet.scss";

export const CardFleet = ({ name, capacity, prices, images }) => {
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
      <h4 className="fleet-title">{name}</h4>

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
      </div>

      <div className="fleet-info">
        <h4 className="fleet-infoTitle">Includes</h4>
        <div className="fleet-infoContainer">
          <div className="fleet-infoBox">
            <h4 className="fleet-infoBoxTitle">Capacity</h4>
            <hr className="fleet-infoBoxDivisor" />
            <p className="fleet-infoBoxDescription">{capacity} people</p>
          </div>
          <div className="fleet-infoBox">
            <h4 className="fleet-infoBoxTitle">Prices</h4>
            <hr className="fleet-infoBoxDivisor" />
            {Object.entries(prices).map(([time, price]) =>
              price ? (
                <p key={time} className="fleet-infoBoxDescription">
                  {time.replace("_", " ")}: ${price} USD
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
