import "./eventsStyle.css";
import SiteTopBar from "../../components/SiteTopBar";
import ArrowUpButton from "../../components/ArrowUpButton";
import SiteFootBar from "../../components/SiteFootBar";
import { EventsData } from "../../testData/Data";
import { useContext, useState } from "react";
import OneItem from "../../components/OneItem";
import { WindowSize } from "../../context/screenContext";
import { Menu } from "../../context/menuContext";
import SiteSideBar from "../../components/SiteSideBar";

export default function Events() {
  const [oneEvent, setOneEvent] = useState({
    title: "",
    image: "",
    date: "",
    place: "",
    content1: "",
    content2: "",
    content3: "",
    isOne: false,
  });

  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  function handleOneEventData(item) {
    setOneEvent({
      ...oneEvent,
      title: item.title,
      image: item.image,
      date: item.date,
      place: item.place,
      content1: item.content1,
      content2: item.content2,
      content3: item.content3,
      isOne: true,
    });
  }

  const showEvents = EventsData.map((item, index) => {
    return (
      <div key={index}>
        {EventsData.indexOf(item) % 2 === 0 ? (
          <article className="event-acticle">
            <div className="event-img-div">
              <img src={item.image} alt={item.title} className="event-img" />
            </div>
            <div className="event-content-div">
              <div className="event-content-head">
                <h2 className="event-title">{item.title}</h2>
                <p>date: {item.date}</p>
              </div>
              <div className="event-content-texts">
                <p>place: {item.place}</p>
                <p>{item.content1}</p>
                <button
                  className="event-button"
                  onClick={() => handleOneEventData(item)}
                >
                  Read More
                </button>
              </div>
            </div>
          </article>
        ) : (
          <article className="event-acticle">
            <div className="event-content-div">
              <div className="event-content-head">
                <h2 className="event-title">{item.title}</h2>
                <p>date: {item.date}</p>
              </div>
              <div className="event-content-texts">
                <p>place: {item.place}</p>
                <p>{item.content1}</p>
                <button
                  className="event-button"
                  onClick={() => handleOneEventData(item)}
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="event-img-div">
              <img src={item.image} alt={item.title} className="event-img" />
            </div>
          </article>
        )}
      </div>
    );
  });

  return (
    <div className="event-main">
      <SiteTopBar />

      {windowsize <= 600 && isOpen && <SiteSideBar />}

      {oneEvent.isOne ? (
        <OneItem
          title={oneEvent.title}
          image={oneEvent.image}
          date={oneEvent.date}
          place={oneEvent.place}
          content1={oneEvent.content1}
          content2={oneEvent.content2}
          content3={oneEvent.content3}
          setOneItem={setOneEvent}
        />
      ) : (
        <>
          <section className="events-introduction">
            <h1 className="events-introduction-title">EVENTS</h1>
          </section>
          <section className="events-sec">{showEvents}</section>
        </>
      )}

      <ArrowUpButton />
      <SiteFootBar />
    </div>
  );
}
