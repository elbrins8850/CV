import React from "react";
import { project } from "../data/dummydata";
import { Heading } from "../common/Heading";
export const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <h1>
          <Heading  title="Skills"  />
          </h1>
        <div className="container grid3 grid4">
          {project.map((item) => {
            return (
              <>
                <div className="box" data-aos="flip-left">
                  <i className="Icon">{item.icon}</i>
                  <h3 className="text">{item.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
