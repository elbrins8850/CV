import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../common/Header";
import Home from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "../common/Footer";
export const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
