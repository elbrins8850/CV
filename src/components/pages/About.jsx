import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import iamge from "../data/images/image_me1.jpeg";
import file from "./Mahmoud_CV.pdf";
export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((nal, i) => {
            return (
              <>
                <div className="left">
                  <img src={iamge} alt="" data-aos="fade-down-right" />
                </div>

                <div className="right" data-aos="fade-down-left">
                  <Heading title="About Me" />
                  <p>{nal.desc}</p>
                  <p>{nal.desc1}</p>
                  <a href={file} target="_blank" download="Mahmoud_cv">
                    <button>Download CV</button>
                  </a>
                  <a href={file} target="_blank" >
                    <button className="primaryBtn">Download CV</button>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
