import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI/ML Enthusiast",
          "Full Stack Developer",
          "Blockchain Explorer",
          "Tech Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 11,
      }}
    />
  );
}

export default Type;
