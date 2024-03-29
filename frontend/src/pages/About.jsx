import React, { useEffect } from "react";
import aboutuspage from "../image/Aboutuspage.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Style/about.css'

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="aboutpage">
      <h1 data-aos="flip-right" className="aboutpageheading">
        {" "}
        <span
          style={{ color: "rgb(31, 173, 33)", textDecoration: "underLine" }}
        >
          About section
        </span>{" "}
        
      </h1>
      <div className="about_image_and_text">
        
        <div data-aos="fade-right">
          <img src={aboutuspage} alt="" />
        </div>
        <div data-aos=" flip-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          repellat voluptatem placeat nihil cupiditate quo, sint ducimus velit
          rem deserunt!
        </div>
      </div>
    </div>
  );
}
// flip-right
// fade-top
// zoom-in
