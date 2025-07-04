import { Whatsapp } from "../utils/icons/Whatsapp/Whatsapp";
import { Instagram } from "../utils/icons/Instagram/Instagram";
import "./Contact.scss";

export const Contact = () => {

  const style = { width: "75px", height: "75px" };

  return (
    <div className="contact">
      <h3 className="contact-title">
        Ready to Start
        <strong style={{ color: "rgb(0, 160, 239)" }}> Your Journey?</strong>
      </h3>
      <div>
        <h5 className="contact-description">
          Let's make your next adventure unforgettable.<strong style={{display: "block"}}>Contact with us.</strong>
        </h5>
      </div>
      <div className="contact-btns">
        <a href="https://wa.me/529841794344?text=Hola%20equipo%20de%20Arcanova,%20quisiera%20consultarte%20por..." target="_blank" rel="noreferrer" className="contact-btn">
          <Whatsapp style={style} />
          Whatsapp
        </a>
        <a href="" target="_blank" rel="noreferrer" className="contact-btn">
          <Instagram style={style} />
          Instagram
        </a>
      </div>
    </div>
  );
};
