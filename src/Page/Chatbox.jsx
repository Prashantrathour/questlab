import React, { useEffect, useState } from "react";
import Home from "../ChatboxComponents/Home";
import Messages from "../ChatboxComponents/Messages";
import Help from "../ChatboxComponents/Help";
import News from "../ChatboxComponents/News";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";

function Chatbox({ handleChatboxToggle }) {
  const [activeTab, setActiveTab] = useState("Home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home setActiveTab={setActiveTab} />;
      case "Messages":
        return <Messages />;
      case "Help":
        return <Help />;
      case "News":
        return <News />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="transition-all duration-300">
      {/* Responsive Chatbox */}
      <div
        className={`border border-red fixed ${
          windowWidth < 500
            ? "w-full h-full top-0 left-0 bottom-0 right-0 transition-all duration-300 "
            : "w-96 h-[550px] fixed bottom-16 rounded-xl right-20 transition-all duration-300 "
        } bg-white ${activeTab === "Home" ? "bg-gradient-to-t from-white to-[#183E77]" : ""} md:w-96 md:h-[550px] lg:w-96 lg:h-[550px]`}
      >
        <div className="flex flex-col justify-between w-full">
          <div className={`w-full overflow-auto h-[460px] ${windowWidth < 500 ? "h-screen" : ""}`}>
            {renderTabContent()}
          </div>
          <nav className="absolute border border-t shadow-current p-5 w-full rounded-b-xl bottom-0 left-0 right-0 bg-white">
            <ul className="flex justify-between w-full">
              <li
                className={`cursor-pointer font-medium ${
                  activeTab === "Home" ? " text-blue-600" : ""
                }`}
                onClick={() => setActiveTab("Home")}
              >
                <div className="flex flex-col justify-center items-center">
                  <span className="m-auto text-2xl">
                    <RiHomeSmile2Fill />
                  </span>
                  <span className="">Home</span>
                </div>
              </li>
              <li
                className={`cursor-pointer font-medium ${
                  activeTab === "Messages" ? " text-blue-600" : ""
                }`}
                onClick={() => setActiveTab("Messages")}
              >
                <div className="flex flex-col justify-center items-center">
                  <span className="m-auto text-2xl">
                    <TbMessage />
                  </span>
                  <span className="">Messages</span>
                </div>
              </li>
              <li
                className={`cursor-pointer font-medium ${
                  activeTab === "Help" ? " text-blue-600" : ""
                }`}
                onClick={() => setActiveTab("Help")}
              >
                <div className="flex flex-col justify-center items-center">
                  <span className="m-auto text-2xl">
                    <IoIosHelpCircleOutline />
                  </span>
                  <span className="">Help</span>
                </div>
              </li>
              <li
                className={`cursor-pointer font-medium ${
                  activeTab === "News" ? " text-blue-600" : ""
                }`}
                onClick={() => setActiveTab("News")}
              >
                <div className="flex flex-col justify-center items-center">
                  <span className="m-auto text-2xl">
                    <GrAnnounce />
                  </span>
                  <span className="">News</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
