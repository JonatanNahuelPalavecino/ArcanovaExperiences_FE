import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "./CardFleet.scss";

export const CardFleet = ({ name, capacity, prices, images }) => {
  return (
    <div className="fleet-card">
      <div className="fleet-slider">
        <Splide options={{ type: "fade", arrows: false, pagination: false }}>
          {images.map((img, i) => (
            <SplideSlide key={i}>
              <img src={img} alt={name} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="fleet-info">
        <h4>{name}</h4>
        <p>Capacity: {capacity} people</p>
        <ul>
          {Object.entries(prices).map(([time, price]) =>
            price ? (
              <li key={time}>
                {time.replace("_", " ")}: ${price} USD
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
