import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {Link} from "react-router-dom";
const Story = () => {
  const [stories, setStories] = useState([]);

   useEffect(() => {
    const getStories = async () =>{
      const res = await axios.get('https://azercell-hackathon.vercel.app/api/stories'); 
      const data = await res.data;
      setStories(data);
    }
    getStories();
   }, []);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {stories.map((item) => (
          <Link to={'/storyview/' + item?._id}>
          <div className="card">
            <div className="cardTitle">
              <h1>{item.createdBy}</h1>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Story;
