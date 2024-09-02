import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SiteBarsStyle.css";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export default function SiteFootBar() {
  return (
    <div className="footbar">
      <section>
        <img
          src={require("../assets/logo-removebg-preview.png")}
          alt="logo"
          className="foot-img"
        />
      </section>
      <section className="foot-contact">
        <FontAwesomeIcon icon={faFacebookF} className="foot-contact-icon" />
        <FontAwesomeIcon icon={faYoutube} className="foot-contact-icon" />
        <FontAwesomeIcon icon={faXTwitter} className="foot-contact-icon" />
        <FontAwesomeIcon icon={faInstagram} className="foot-contact-icon" />
      </section>
      <div className="foot-line" />
      <section className="foot-contact2">
        <div className="foot-contact2-item">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="foot-contact2-icon"
          />
          <p className="foot-contact2-text">city-town</p>
        </div>
        <div className="foot-contact2-item">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="foot-contact2-icon"
          />
          <p className="foot-contact2-text">(000) 123-456-789</p>
        </div>
        <div className="foot-contact2-item">
          <FontAwesomeIcon icon={faAt} className="foot-contact2-icon" />
          <p className="foot-contact2-text">test@test.com</p>
        </div>
      </section>
    </div>
  );
}
