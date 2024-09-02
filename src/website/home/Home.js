import SiteFootBar from "../../components/SiteFootBar";
import SiteTopBar from "../../components/SiteTopBar";
import "./homeStyle.css";
import ArrowUpButton from "../../components/ArrowUpButton";
import { useContext, useState } from "react";
import { helpData, storiesData } from "./homeData";
import { WindowSize } from "../../context/screenContext";
import { Menu } from "../../context/menuContext";
import SiteSideBar from "../../components/SiteSideBar";

export default function Home() {
  const [impactData, setImpactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  function handleInboxSubmit(e) {
    e.preventDefault();
  }

  const helpShow = helpData.map((item, index) => {
    return (
      <div className="help-div-item" key={index}>
        <div className="help-div-item-content">
          <h5 className="help-div-item-title">{item.title}</h5>
          <p className="help-div-item-text">{item.text}</p>
        </div>
      </div>
    );
  });

  const storiesShow = storiesData.map((item, index) => {
    return (
      <div className="stories-div-item" key={index}>
        <img
          src={item.image}
          alt={item.title}
          className="stories-div-item-img"
        />
        <h5 className="stories-div-item-title">{item.title}</h5>
        <p className="stories-div-item-text">{item.text}</p>
        <button className="stories-div-item-button">Read More</button>
      </div>
    );
  });

  return (
    <div className="home-main">
      <SiteTopBar />

      {windowsize <= 600 && isOpen && <SiteSideBar />}

      <section className="home-introduction">
        <h1 className="home-introduction-title">No Water, No Life</h1>
        <p className="home-introduction-text">
          we have empowered more than 68 million people with access to safe
          water through affordable financing.
        </p>
      </section>

      <section className="impact">
        <h1 className="impact-title">CHARITY: WATER'S IMPACT TO DATE</h1>
        <div className="impact-div">
          <div className="impact-div-item">
            <h5 className="impact-div-item-title">154,000</h5>
            <p className="impact-div-item-text">WATER PROJECTS FUNDED</p>
          </div>
          <div className="impact-div-item">
            <h5 className="impact-div-item-title">29</h5>
            <p className="impact-div-item-text">countries</p>
          </div>
          <div className="impact-div-item">
            <h5 className="impact-div-item-title">18,608,090</h5>
            <p className="impact-div-item-text">people will be served</p>
          </div>
        </div>
      </section>

      <section className="help">
        <h1 className="help-title">HOW YOU CAN HELP</h1>
        <div className="help-div">{helpShow}</div>
      </section>

      <section className="stories">
        <h1 className="stories-title">
          STAY UPDATED WITH STORIES FROM OUR TEAM
        </h1>
        <div className="stories-div">{storiesShow}</div>
      </section>

      <section className="inbox">
        <h1 className="inbox-title">ADD IMPACT TO YOUR INBOX</h1>
        <form className="inbox-form" onSubmit={handleInboxSubmit}>
          <div className="inbox-form-item">
            <label className="inbox-form-item-label">First Name:</label>
            <input
              type="text"
              placeholder="First Name..."
              className="inbox-form-item-input"
              value={impactData.firstName}
              onChange={(e) =>
                setImpactData({ ...impactData, firstName: e.target.value })
              }
            />
          </div>
          <div className="inbox-form-item">
            <label className="inbox-form-item-label">Last Name:</label>
            <input
              type="text"
              placeholder="Last Name..."
              className="inbox-form-item-input"
              value={impactData.lastName}
              onChange={(e) =>
                setImpactData({ ...impactData, lastName: e.target.value })
              }
            />
          </div>
          <div className="inbox-form-item">
            <label className="inbox-form-item-label">Email:</label>
            <input
              type="email"
              placeholder="Email..."
              className="inbox-form-item-input"
              value={impactData.email}
              onChange={(e) =>
                setImpactData({ ...impactData, email: e.target.value })
              }
            />
          </div>
          <button className="inbox-form-button">Sign up</button>
        </form>
      </section>

      <ArrowUpButton />

      <SiteFootBar />
    </div>
  );
}
