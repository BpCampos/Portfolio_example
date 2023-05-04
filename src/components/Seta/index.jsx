import React, { useEffect, useState } from "react";
import styles from "./Seta.module.css";

export default function Seta() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <img
      className={showButton ? styles.arrow : styles.hide}
      src="../../images/seta-para-cima.png"
      alt="seta para cima"
      onClick={handleScrollToTop}
    />
  );
}
