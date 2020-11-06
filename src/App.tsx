import React from "react";
import { GitHub, Linkedin } from "react-feather";

import { HomeMain } from "./styles/home";

function App() {
  return (
    <HomeMain>
      <div className="content-wrapper">
        <h1>Under Construction</h1>
        <h3>Download my CV</h3>
        <a
          className="resume"
          href="https://drive.google.com/uc?export=download&id=1Uxu-eBFdtR4W43ed-MU5zMcVZjwHrao_"
        >
          Download
        </a>
        <div className="socials">
          <a href="https://github.com/danielolaviobr" target="_blank">
            <GitHub /> GitHub
          </a>
          <a href="https://br.linkedin.com/in/daniel-olavio" target="_blank">
            <Linkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </HomeMain>
  );
}

export default App;
