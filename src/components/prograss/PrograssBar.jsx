import React, { useEffect, useState } from "react";
import "./style/prograss.scss";

const PrograssBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function updateScrollPosition() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      const scrollPercent = (scrollY / maxScroll) * 100;
      setScrollPosition(scrollPercent);
    }

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return (
    <div className="progress-bar" style={{ width: `${scrollPosition}%` }}></div>
  );
};

export default PrograssBar;
