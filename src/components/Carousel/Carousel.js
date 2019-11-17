import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import ImageFile from "../../ImageFile";
import Card from "../Card/Card";

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#eaecec" }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#eaecec" }}
      onClick={onClick}
    ></div>
  );
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0",
  lazyload: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
        centerMode: false,
        infinite: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
        centerMode: false,
        infinite: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
        centerMode: false,
        infinite: false
      }
    }
  ]
};

const Images = images => {
  return images.rooms.map((url, index) => {
    return <Card key={index} url={url} />;
  });
};

const Carousel = () => {
  return <Slider {...settings}>{Images(ImageFile)}</Slider>;
};

export default Carousel;
