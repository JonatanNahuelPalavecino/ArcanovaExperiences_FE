import { Whatsapp } from "../utils/icons/Whatsapp/Whatsapp";
import { Instagram } from "../utils/icons/Instagram/Instagram";
import { Facebook } from "../utils/icons/Facebook/Facebook";
import "./Contact.scss";

export const Contact = () => {
  const style = { width: "75px", height: "75px" };

  return (
    <div className="contact">
      <h3 className="contact-title">
        Ready to Start
        <strong className="contact-titleAt"> Your Journey?</strong>
      </h3>
      <p className="contact-description">
        Let's make your next adventure unforgettable.
        <strong style={{ display: "block" }}>Contact with us.</strong>
      </p>
      <div className="contact-btns">
        <a
          href="https://wa.me/529841794344?text=Hi%20Arcanova%20team,%20I'd%20like%20to%20ask%20you%20about..."
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <Whatsapp style={"contact-btnIcon"} />
          Whatsapp
        </a>
        <a
          href="https://www.facebook.com/arcanovaexperience"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <Facebook style={"contact-btnIcon"} />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/arcanova.experience/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <Instagram style={"contact-btnIcon"} />
          Instagram
        </a>
      </div>
    </div>
  );
};
