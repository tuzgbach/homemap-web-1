import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../layoutscss/HandmadeCarousel.css";

export default function CarouselComp() {
  return (
    <div className="max-w-[1200px] mx-auto mt-6 carousel-container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="carousel">
        <div className="carousel-slide">
          <img
            src="/images/banner/1.svg"
            alt="Hình ảnh 1"
            className="carousel-image"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="/images/banner/2.svg"
            alt="Hình ảnh 2"
            className="carousel-image"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="/images/banner/3.svg"
            alt="Hình ảnh 3"
            className="carousel-image"
          />
        </div>
      </Carousel>
    </div>
  );
}
