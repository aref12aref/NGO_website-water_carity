import "./oneItemStyle.css";

export default function OneItem({
  title,
  image,
  date,
  place,
  content1,
  content2,
  content3,
  setOneItem,
}) {
  function handleBack() {
    setOneItem({ isOne: false });
  }
  return (
    <div>
      <section className="oneItem-intro">
        {date && (
          <h3>
            <strong className="oneItem-date">date:</strong> {date}
          </h3>
        )}
        <img src={image} alt={title} className="oneItem-img" />
        <button onClick={handleBack} className="oneItem-back-but">
          Go Back
        </button>
      </section>

      <h1 className="oneItem-title">{title}</h1>

      <section className="oneItem-content">
        {place && (
          <p className="oneItem-place">
            <strong>place:</strong> {place}
          </p>
        )}
        <p>{content1}</p>
        <p>{content2}</p>
        <p>{content3}</p>
      </section>
    </div>
  );
}
