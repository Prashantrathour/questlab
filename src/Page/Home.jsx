
import React, { useState } from "react";
import Chatbox from "./Chatbox";
import { GrChat } from "react-icons/gr";

const Home = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const handleChatboxToggle = () => {
    setChatboxOpen(!chatboxOpen);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8"> Website</h1>

      
      <p> homepage content goes here.</p>

    
      <button
        className="fixed bottom-4 right-10 p-4 bg-blue-500 text-white rounded-full transition-all duration-300"
        onClick={handleChatboxToggle}
      >
        <GrChat/>
      </button>

    
      {chatboxOpen && (
        <Chatbox handleChatboxToggle={handleChatboxToggle}/>
      )}
    </div>
  );
};

export default Home;
