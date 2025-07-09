import { Whatsapp } from "../utils/icons/Whatsapp/Whatsapp"
import "./WhatsappComponent.scss";

export const WhatsappComponent = () => {

  return (
    <a
      href="https://wa.me/529841794344?text=Hola%20equipo%20de%20Arcanova,%20quisiera%20consultarte%20por..."
      className="wpp-content"
      target="_blank"
      rel="noreferrer"
    >
      <div className="wpp-btn">
        <Whatsapp style={"wpp-btnIcon"}/>
      </div>
    </a>
  );
};
