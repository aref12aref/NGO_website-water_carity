import { useRef } from "react";

export default function ArrowUpButton() {
  const upBut = useRef();

  function handleUp() {
    upBut.current.style.display = "none";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  window.onscroll = function () {
    let y = window.scrollY;
    if (y > 100) {
      if (upBut.current !== null) {
        upBut.current.style.display = "block";
      }
    } else {
      if (upBut.current !== null) {
        upBut.current.style.display = "none";
      }
    }
  };

  const butStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "rgb(0, 187, 255)",
    color: "white",
    textAlign: "center",
    fontSize: "25px",
    lineHeight: "40px",
    border: "2px solid white",
    borderRadius: "50%",
    position: "sticky",
    zIndex: "5",
    left: "10px",
    bottom: "10px",
    transition: "0.5s",
    cursor: "pointer",
  };

  return (
    <button ref={upBut} onClick={handleUp} style={butStyle}>
      ^
    </button>
  );
}
