import Head from "next/head";
import React from "react";
import { GitHub, Linkedin } from "react-feather";
import { motion } from "framer-motion";

import { HomeMain } from "../styles/home";

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  );
}
