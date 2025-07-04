import { Whatsapp } from "../utils/icons/Whatsapp/Whatsapp"
import "./WhatsappComponent.scss";

export const WhatsappComponent = () => {

  const style = {width: '40px', height: '40px', display: 'block'}
  return (
    <a
      href="https://wa.me/529841794344?text=Hola%20equipo%20de%20Arcanova,%20quisiera%20consultarte%20por..."
      className="wpp-content"
      target="_blank"
      rel="noreferrer"
    >
      <div className="wpp-btn">
        <Whatsapp style={style}/>
      </div>
    </a>
  );
};
