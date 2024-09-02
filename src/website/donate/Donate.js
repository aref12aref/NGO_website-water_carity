import "./donateStyle.css";
import SiteTopBar from "../../components/SiteTopBar";
import ArrowUpButton from "../../components/ArrowUpButton";
import SiteFootBar from "../../components/SiteFootBar";
import { useContext, useState } from "react";
import { WindowSize } from "../../context/screenContext";
import { Menu } from "../../context/menuContext";
import SiteSideBar from "../../components/SiteSideBar";

export default function Donate() {
  const [donateData, setDonateData] = useState({
    amount: "",
    frequency: "",
    method: "",
    cardNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  function handleData(e) {
    setDonateData({ ...donateData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="donate-main">
      <SiteTopBar />

      {windowsize <= 600 && isOpen && <SiteSideBar />}

      <section className="donate-main-text">
        <h1 className="donate-title">Donate and Help Lifes</h1>
        <p className="donate-subtitle">
          Your donation empowers families living in poverty with lasting access
          to safe water and the hope, health and opportunity it brings.
        </p>
      </section>

      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="amount">
          <h3>Choose or Enter a Donation Amount</h3>
          <div className="amount-buttons">
            <button
              className="amount-button"
              onClick={(e) => {
                e.preventDefault();
                setDonateData({ ...donateData, amount: "20" });
              }}
              name="amount"
            >
              25$
            </button>
            <button
              className="amount-button"
              onClick={(e) => {
                e.preventDefault();
                setDonateData({ ...donateData, amount: "100" });
              }}
              name="amount"
            >
              100$
            </button>
            <button
              className="amount-button"
              onClick={(e) => {
                e.preventDefault();
                setDonateData({ ...donateData, amount: "250" });
              }}
              name="amount"
            >
              250$
            </button>
            <button
              className="amount-button"
              onClick={(e) => {
                e.preventDefault();
                setDonateData({ ...donateData, amount: "500" });
              }}
              name="amount"
            >
              500$
            </button>
          </div>
          <div>
            <label>Custom Donation Amount</label>
            <div className="custom-amount">
              <p className="custom-amount-d">$</p>
              <input
                type="number"
                className="custom-amount-inp"
                name="amount"
                value={donateData.amount}
                onChange={handleData}
                required
              />
              <p className="custom-amount-usd">USD</p>
            </div>
          </div>
        </div>

        <div className="frequency-container">
          <h3>Frequency</h3>
          <div className="frequency">
            <div className="frequency-item">
              <input
                type="radio"
                name="frequency"
                value={donateData.frequency}
                onChange={handleData}
              />
              <label>One-time donation</label>
            </div>
            <div className="frequency-item">
              <input
                type="radio"
                name="frequency"
                value={donateData.frequency}
                onChange={handleData}
              />
              <label>Monthly donation</label>
            </div>
          </div>
        </div>

        <div className="method">
          <h3>Payment Method</h3>
          <div className="method-buttons">
            <button
              className="method-button"
              name="method"
              value={donateData.method}
              onClick={(e) => {
                e.preventDefault();
                setDonateData({ ...donateData, method: "credit card" });
              }}
            >
              Credit Card
            </button>
          </div>
          <div className="card">
            <label>Card Number</label>
            <input
              type="number"
              className="card-inp"
              name="cardNumber"
              value={donateData.cardNumber}
              onChange={handleData}
              required
            />
          </div>
        </div>

        <div className="personal-inputs-container">
          <div className="personal-inputs-item">
            <label>First Name</label>
            <input
              type="text"
              className="personal-input"
              name="firstName"
              value={donateData.firstName}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>Last Name</label>
            <input
              type="text"
              className="personal-input"
              name="lastName"
              value={donateData.lastName}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>Email</label>
            <input
              type="email"
              className="personal-input"
              name="email"
              value={donateData.email}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>Street Adress</label>
            <input
              type="text"
              className="personal-input"
              name="street"
              value={donateData.street}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>City</label>
            <input
              type="text"
              className="personal-input"
              name="city"
              value={donateData.city}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>State</label>
            <input
              type="text"
              className="personal-input"
              name="state"
              value={donateData.state}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>Zip Code</label>
            <input
              type="number"
              className="personal-input"
              name="zipCode"
              value={donateData.zipCode}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>Country</label>
            <input
              type="text"
              className="personal-input"
              name="country"
              value={donateData.country}
              onChange={handleData}
              required
            />
          </div>

          <div className="personal-inputs-item">
            <label>Phone Number</label>
            <input
              type="number"
              className="personal-input"
              name="phoneNumber"
              value={donateData.phoneNumber}
              onChange={handleData}
            />
          </div>
        </div>
        <button className="form-button">Donate</button>
      </form>

      <ArrowUpButton />
      <SiteFootBar />
    </div>
  );
}
