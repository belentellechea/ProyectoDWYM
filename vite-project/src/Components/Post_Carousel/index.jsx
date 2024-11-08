import React from "react";
import { Carousel } from "antd";
import style from "./Carousel.module.css";

export function PostCarousel({ post }) {
  return (
    <>
      <>
        <Carousel arrows infinite={false}>
          <div>
            <p className={style.carouselContent}> foto 2</p>
          </div>
          <div>
            <p className={style.carouselContent}> foto 3</p>
          </div>
          <div>
            <p className={style.carouselContent}> foto 4</p>
          </div>
        </Carousel>
      </>
    </>
  );
}
