import React, { useEffect, useState } from "react";
import StoryCreateCategories from "./StoryCreateCategories";
import logo from "../assets/storyImages/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const StoryCreate = () => {
  const [locations, setLocations] = useState([
    {
      country: "Europe",
    },
    {
      country: "Asia",
    },
    {
      country: "Africa",
    },
    {
      country: "North America",
    },
    {
      country: "South America",
    },
    {
      country: "Australia",
    },
    {
      country: "Antarctica",
    },
  ]);

  const [friends, setFriends] = useState([
    {
      friendName: "Eray",
    },
    {
      friendName: "Senan",
    },
    {
      friendName: "Eraycan",
    },
    {
      friendName: "Eray Ozturk",
    },
    {
      friendName: "Ozcan",
    },
    {
      friendName: "Erkan",
    },
  ]);

  const [mention, setMention] = useState("");
  const [selectedMentions, setSelectedMentions] = useState([]);
  const [mentionToggle, setMentionToggle] = useState(false);
  const [hashtag, setHashtag] = useState("");
  const [hashtagToggle, setHashtagToggle] = useState(false);
  console.log(locations);
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [locationToggle, setLocationToggle] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const story = {
      createdBy: "Kerem Solmaz",
      message: message,
      location: location,
      hashtag: hashtag,
      mentions: selectedMentions,
      type: 2,
      title: "Deneme story",
    };
    axios
      .post("https://azercell-hackathon.vercel.app/api/stories", story)
      .then((res) => navigate(-1))
      .catch((err) => alert(err));
  };

  console.log(location);

  const handleSelect = (item) => {
    setLocation(item);
    setLocationToggle(false);
  };
  const handleSelectFriend = (item) => {
    setSelectedMentions([...selectedMentions, item]);
    setMentionToggle(false);
  };

  console.log(selectedMentions);
  return (
    <React.Fragment>
      <div className="storyCreateContainer relative">
        <div class="insideStoryNavBar">
          <div class="insideLogo">
            <img src={logo} />
          </div>
          <div class="cancelLogo" onClick={() => navigate(-1)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="insideStorySlider instaBgColor text-[white]">
            <div class="flex justify-between   p-[15px]">
              <div class="">
                <p id="username">New Story</p>
              </div>
              <div>
                <div
                  class="buttons pt-2"
                  onClick={() => setLocationToggle(!locationToggle)}
                >
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div
                  class="buttons pt-2"
                  onClick={() => setMentionToggle(!mentionToggle)}
                >
                  <i class="fa-solid fa-quote-left"></i>
                </div>
                <div
                  class="buttons pt-2"
                  onClick={() => setHashtagToggle(!hashtagToggle)}
                >
                  <i class="fa-solid fa-hashtag"></i>
                </div>
              </div>
            </div>
            {location && (
              <div className="w-[80%] bg-[white] p-2 m-auto absolute text-center top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
                <div className="instaBgText flex items-center justify-center">
                  {" "}
                  <CiLocationOn /> {location}
                </div>
              </div>
            )}
            <div className="w-[80%] flex flex-wrap  m-auto absolute text-center  top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
              {selectedMentions &&
                selectedMentions.map((item) => {
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

            {hashtagToggle && (
              <div className=" bg-[white] px-2 m-auto absolute text-center text-center top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
                <div className="instaBgText flex items-center justify-center">
                  {" "}
                  #
                  <input
                    type="text"
                    className="outline-none border-none p-2 rounded-[5px]"
                    value={hashtag}
                    placeholder="Write today's hashtag"
                    onChange={(e) => setHashtag(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="w-[80%] m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <input
                type="text"
                placeholder="Write your content"
                onChange={(e) => setMessage(e.target.value)}
                className="w-[100%] p-[5px] rounded-[10px] border-none outline-none text-center text-[#000] bg-transparent"
              />
            </div>
            <div class="insideStorySliderFooter w-[100%] ">
              <div class="bg-[BurlyWood] text-center w-[100%] flex items-center justify-content-center">
                <button type="submit" className="w-[100%] text-center p-[10px]">
                  Create Story
                </button>
              </div>
            </div>
          </div>
          {locationToggle && (
            <div className="w-[20%] min-h-[300px] p-2 absolute bg-[white] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2>Select your current Location</h2>
              <div>
                <div className="mt-2">
                  <p>Location</p>
                  {locations &&
                    locations?.map((item) => {
                      return (
                        <div
                          className="bg-[bisque] cursor-pointer mt-2"
                          onClick={() => handleSelect(item.country)}
                        >
                          {item.country}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
          {mentionToggle && (
            <div className="w-[20%] min-h-[290px] p-2 absolute bg-[white] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2>Mention someone</h2>
              <div>
                <div className="mt-2">
                  <p>Mention</p>
                  {friends &&
                    friends?.map((item) => {
                      return (
                        <div
                          className="bg-[bisque] cursor-pointer mt-2"
                          onClick={() => handleSelectFriend(item.friendName)}
                        >
                          {item.friendName}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};
export default StoryCreate;
