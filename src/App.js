import { Route, Routes } from "react-router-dom";
import Home from "./website/home/Home";
import Events from "./website/events/Events";
import Programs from "./website/programs/Programs";
import Donate from "./website/donate/Donate";
import ContactUs from "./website/contactUs/ContactUs";
import AboutUs from "./website/aboutUs/AboutUs";
import "./globalCss/media.css";

export default function App() {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
