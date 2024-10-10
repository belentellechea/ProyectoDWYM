import React from "react";
import { Carousel } from "antd";
import "./Carousel.css";

export function PostCarousel() {
  return (
    <>
      <div className="carouselDiv">
        <Carousel arrows infinite={false}>
          <div>
            <h3 className="carouselContent"> foto 1</h3>
          </div>
          <div>
            <h3 className="carouselContent"> foto 2</h3>
          </div>
          <div>
            <h3 className="carouselContent"> foto 3</h3>
          </div>
          <div>
            <h3 className="carouselContent"> foto 4</h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}
