import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "./Slider.scss";
import { videosSlider } from "../utils/data/videosSlider";

export const Slider = () => {
  const splideRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;

      const playVisible = (slide) => {
        const video = videoRefs.current[slide.index];
        const textElement = slide.slide.querySelector(".slider-box");

        if (video) {
          video.load();
          video.play().catch(() => {});
        }

        if (textElement) {
          textElement.classList.add("active");
        }
      };

      const pauseHidden = (slide) => {
        const video = videoRefs.current[slide.index];
        const textElement = slide.slide.querySelector(".slider-box");

        if (video) {
          video.pause();
          video.currentTime = 0;
        }

        if (textElement) {
          textElement.classList.remove("active");
        }
      };

      splide.on("visible", playVisible);
      splide.on("hidden", pauseHidden);

      const firstSlide = splide.Components.Slides.getAt(0);
      if (firstSlide) {
        playVisible(firstSlide);
      }

      return () => {
        splide.off("visible", playVisible);
        splide.off("hidden", pauseHidden);
      };
    }
  }, []);

  return (
    <div id="home" className="slider">
      <Splide
        ref={splideRef}
        className="slider-container"
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          interval: 6000,
          arrows: false,
          pagination: false,
          rewind: true,
        }}
      >
        {videosSlider.map((el, index) => (
          <SplideSlide key={el.name} className="slider-img">
            <div className="slider-content">
              <video
                ref={(elRef) => (videoRefs.current[index] = elRef)}
                className="slider-media"
                muted
                loop
                playsInline
                preload="metadata"
                poster={el.poster}
              >
                <source src={el.src} type="video/mp4" />
              </video>
              <div className="slider-box">
                <div className="slider-textOne">
                  <p>{el.title}</p>
                </div>
                <div className="slider-textTwo">
                  <p>{el.subtitle}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
