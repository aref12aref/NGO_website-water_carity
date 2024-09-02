import "./aboutUsStyle.css";
import SiteTopBar from "../../components/SiteTopBar";
import SiteFootBar from "../../components/SiteFootBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowUpButton from "../../components/ArrowUpButton";
import { infosData } from "./aboutData";
import { WindowSize } from "../../context/screenContext";
import { Menu } from "../../context/menuContext";
import SiteSideBar from "../../components/SiteSideBar";
import { useContext } from "react";

export default function AboutUs() {
  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const infosShow = infosData.map((item, index) => {
    return (
      <div className="about-infos-item" key={index}>
        <FontAwesomeIcon icon={item.icon} className="about-infos-icon" />
        <h3 className="about-infos-title">{item.title}</h3>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <div className="about-main">
      <SiteTopBar />

      {windowsize <= 600 && isOpen && <SiteSideBar />}

      <section className="intro">
        <video playsInline muted loop autoPlay className="intro-video">
          <source
            src={require("../../assets/about-video.mp4")}
            type="video/mp4"
          ></source>
        </video>
        <div className="intro-content">
          <h1 className="intro-title">Water Charity</h1>
          <div className="intro-line" />
          <p className="intro-text">
            we are a nonprofit dedicated to helping people access clean drinking
            water and improved sanitation. In 17 years of work, we have done
            over 11,900 water, sanitation, and public health projects in 87
            countries, benefiting more than 12 million people directly!
          </p>
          <Link to={"/donate"} className="intro-link">
            Donate Now!
          </Link>
        </div>
      </section>

      <section className="story">
        <h1 className="story-title">Our Story</h1>
        <div className="story-line" />
        <p className="story-text">
          We've never been the type of charity to beg you for money. We don’t
          flood your inbox with pleas and sad tales. We do projects. Often, we
          fund projects out of pocket and never get repaid by donors! In fact,
          we don’t want you to give us your last few dollars. We want partners
          in doing real, professional water development projects. We do water
          infrastructure, sanitation, and disaster relief… that’s it. Our donors
          don’t need gala benefits, shiny plaquards, or ego-based stories. This
          isn’t about us.
        </p>
        <br />
        <p className="story-text">
          With our entire focus on doing low cost, high impact projects, Water
          Charity built upon successes, and grew without much fanfare. Now we
          are not only doing projects all around the world, but we are doing
          bigger, and even more impactful projects with our Water For Everyone
          Initiative. As an official partner of the National Peace Corps
          Association, and a host of water based charities, we are able to
          leverage on the ground assets and keep project costs at an
          industry-wide low. Please join us as we push to scale up our already
          impressive achievements, and continue to have a substantial impact on
          the World Water Crisis!
        </p>
      </section>

      <section className="about-impact">
        <img
          src={require("../../assets/world_impact.webp")}
          alt="world"
          className="about-impact-img"
        />
        <div className="about-impact-content">
          <h3 className="about-impact-content-title">
            Scaling impact around the world
          </h3>
          <p className="about-impact-content-text">
            We’ve empowered more than 68 million people across 4 continents with
            access to safe water or sanitation, and the hope, health and
            opportunities they bring. And we are expanding our work and reaching
            more people in need, faster.
          </p>
        </div>
      </section>

      <section className="about-infos">{infosShow}</section>

      <ArrowUpButton />
      <SiteFootBar />
    </div>
  );
}
