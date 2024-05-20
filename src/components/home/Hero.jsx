import React from "react";
import Typewriter from "typewriter-effect";
import { home } from "../data/dummydata";
export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => {
          return (
            <div className="heroContent" key={i}>
              <h1   data-aos="fade-right">{val.text}</h1>
              <h3>
                <Typewriter
                  options={{
                    strings: [`${val.name}, ${val.post}, ${val.design}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <p data-aos="fade-left">{val.desc}</p>
              <button className="primaryBtn" data-aos="fade-up-left">Download CV</button>
            </div>
          );
        })}
      </section>
    </>
  );
};
