import "./contactUsStyle.css";
import SiteTopBar from "../../components/SiteTopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import ArrowUpButton from "../../components/ArrowUpButton";
import SiteFootBar from "../../components/SiteFootBar";
import { useContext, useState } from "react";
import { WindowSize } from "../../context/screenContext";
import { Menu } from "../../context/menuContext";
import SiteSideBar from "../../components/SiteSideBar";

export default function ContactUs() {
  const [massage, setMassage] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    massage: "",
  });

  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  return (
    <div className="contact-main">
      <SiteTopBar />

      {windowsize <= 600 && isOpen && <SiteSideBar />}

      <section class="contact-introduction"></section>

      <h1 className="contact-title">We Are Always Here To Help You</h1>
      <section className="contact-first-sec">
        <div className="contact-item">
          <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
          <h3>Phone</h3>
          <p>(000) 123-456-789</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhoneVolume} className="contact-icon" />
          <h3>Address</h3>
          <p>city-town</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faAt} className="contact-icon" />
          <h3>Email</h3>
          <p>test@test.com</p>
        </div>
      </section>

      <h1 className="contact-title">Get in Touch With Us</h1>
      <section className="contact-second-sec">
        <form>
          <div className="contact-second-sec-form">
            <input
              type="text"
              className="contact-form-input"
              placeholder="Name..."
              value={massage.name}
              onChange={(e) => setMassage({ ...massage, name: e.target.value })}
            />
            <input
              type="email"
              className="contact-form-input"
              placeholder="Email..."
              value={massage.email}
              onChange={(e) =>
                setMassage({ ...massage, email: e.target.value })
              }
            />
            <input
              type="number"
              className="contact-form-input"
              placeholder="Phone Number (potential)..."
              value={massage.phoneNumber}
              onChange={(e) =>
                setMassage({ ...massage, phoneNumber: e.target.value })
              }
            />
            <textarea
              className="contact-form-text-area"
              placeholder="Massage..."
              value={massage.massage}
              onChange={(e) =>
                setMassage({ ...massage, massage: e.target.value })
              }
            />
          </div>
          <button className="contact-form-button">Send To Us</button>
        </form>
      </section>

      <ArrowUpButton />
      <SiteFootBar />
    </div>
  );
}
