import { Whatsapp } from "../utils/icons/Whatsapp/Whatsapp";
import "./WhatsappComponent.scss";

export const WhatsappComponent = () => {
  return (
    <a
      href="https://wa.me/529841794344?text=Hi%20Arcanova%20team,%20I'd%20like%20to%20ask%20you%20about..."
      className="wpp-content"
      target="_blank"
      rel="noreferrer"
    >
      <div className="wpp-btn">
        <Whatsapp style={"wpp-btnIcon"} />
      </div>
    </a>
  );
};
