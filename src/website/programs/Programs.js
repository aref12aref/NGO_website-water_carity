import "./ProgramsStyle.css";
import SiteTopBar from "../../components/SiteTopBar";
import ArrowUpButton from "../../components/ArrowUpButton";
import SiteFootBar from "../../components/SiteFootBar";
import { programs } from "../../testData/Data";
import { useContext, useState } from "react";
import OneItem from "../../components/OneItem";
import { WindowSize } from "../../context/screenContext";
import { Menu } from "../../context/menuContext";
import SiteSideBar from "../../components/SiteSideBar";

export default function Programs() {
  const [oneProgramData, setOneProgramData] = useState({
    title: "",
    image: "",
    content1: "",
    content2: "",
    content3: "",
    isOne: false,
  });

  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  function handleOneProgramData(item) {
    setOneProgramData({
      ...oneProgramData,
      title: item.title,
      image: item.image,
      content1: item.content1,
      content2: item.content2,
      content3: item.content3,
      isOne: true,
    });
  }

  const showEvents = programs.map((item, index) => {
    return (
      <div key={index}>
        <article className="program-acticle">
          <h2 className="program-title">{item.title}</h2>

          <img src={item.image} alt={item.title} className="program-img" />

          <div className="program-content-texts">
            <p>{item.content1}</p>
            <button
              className="program-button"
              onClick={() => handleOneProgramData(item)}
            >
              Read More
            </button>
          </div>
        </article>
      </div>
    );
  });

  return (
    <div className="program-main">
      <SiteTopBar />

      {windowsize <= 600 && isOpen && <SiteSideBar />}

      {oneProgramData.isOne ? (
        <OneItem
          title={oneProgramData.title}
          image={oneProgramData.image}
          content1={oneProgramData.content1}
          content2={oneProgramData.content2}
          content3={oneProgramData.content3}
          setOneItem={setOneProgramData}
        />
      ) : (
        <>
          <section className="programs">
            <h1 className="programs-title">Programs</h1>
            <div className="programs-sec">{showEvents}</div>
          </section>
        </>
      )}

      <ArrowUpButton />
      <SiteFootBar />
    </div>
  );
}
