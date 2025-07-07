import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Slider } from "../Slider/Slider";
import { AboutUs } from "../AboutUs/AboutUs";
import { Experiences } from "../Experiences/Experiences";
import { Testimonials } from "../Testimonials/Testimonials";
import { Contact } from "../Contact/Contact";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Arcanova Experiences"
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Slider />
      <AboutUs />
      <Experiences />
      <Testimonials />
      <Contact />
    </>
  );
};
