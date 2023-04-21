import React, { useEffect, useState } from "react";
import "./storyview.css";
import eray from "../assets/storyImages/eray.jpg";
import logo from "../assets/storyImages/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";

const StoryView = () => {
  const navigate = useNavigate();
  const id = useParams();

  const [storyDetails, setStoryDetails] = useState({});
  const date = new Date();
  console.log(date);
  useEffect(() => {
    const getStoryDetails = async () => {
      const res = await axios.get(
        "https://azercell-hackathon.vercel.app/api/stories" + id?.id
      );
      setStoryDetails(res.data);
    };
    getStoryDetails();
  }, [id?.id]);



  return (
    <div>
      <div class="insideStoryContainer relative">
        <div class="insideStoryNavBar">
          <div class="insideLogo">
            <img src={logo} />
          </div>
          <div class="cancelLogo" onClick={() => navigate(-1)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="insideStorySlider">
          <div class="insideStorySliderNavbar">
            <div class="logo">
              <img src={eray} />
              <p id="username">{storyDetails.createdBy}</p>
              <p id="time">1 hour ago</p>
            </div>
            <div class="buttons">
              <a>
                <i class="fa-solid fa-play"></i>
              </a>
              <a>
                <i class="fa-solid fa-volume-high"></i>
              </a>
              <a>
                <i class="fa-solid fa-ellipsis"></i>
              </a>
            </div>
          </div>
          <div className="w-[80%] bg-[white] p-2 m-auto absolute text-center top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
            <div className="instaBgText flex items-center justify-center">
              {" "}
              <CiLocationOn /> {storyDetails.location}
            </div>
          </div>
          <div className="w-[80%] flex flex-wrap  m-auto absolute text-center  top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
            {storyDetails.mentions &&
              storyDetails.mentions.map((item) => {
                return (
                  <div className="bg-[white] m-2 px-2">
                    <div className="instaBgText flex items-center justify-center">
                      {" "}
                      <CiLocationOn /> {item}
                    </div>
                  </div>
                );
              })}
          </div>

          {storyDetails.hashtag && (
            <div className=" bg-[white] px-2 m-auto absolute text-center text-center top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
              <div className="instaBgText flex items-center justify-center">
                {" "}
                #{storyDetails.hashtag}
              </div>
            </div>
          )}

          <div className="w-[80%] m-auto text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p>{storyDetails.message}</p>
          </div>
          <div class="insideStorySliderFooter">
            <div class="content">
              <input type="text" placeholder="Reply to...." />
              <div class="icons">
                <a>
                  <i class="fa-regular fa-heart"></i>
                </a>
                <a>
                  <i class="fa-regular fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoryView;
