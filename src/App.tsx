import React, { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import "./styles/home.css";

TopBarProgress.config({
  barColors: {
    "0": "#54b689",
    "1.0": "#70c29c",
  },
  shadowColor: "#54b689",
  shadowBlur: 2,
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);
  return (
    <div className="background">
      <div>{isLoading && <TopBarProgress />}</div>
      <div className="title-wrapper">
        <span className="title">Daniel Olavio</span>
        <div>
          <span className="color-title">full-stack </span>
          <span className="title">developer</span>
        </div>
      </div>
      <div className="button-wrapper">
        <a
          href="https://github.com/danielolaviobr"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://br.linkedin.com/in/daniel-olavio"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default App;
