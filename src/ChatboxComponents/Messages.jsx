      
    
      import { IoAttach, IoTimerOutline } from 'react-icons/io5';
      import { MdOutlineInsertEmoticon, MdOutlineGifBox } from 'react-icons/md';
      import { FaAngleLeft } from "react-icons/fa6";
       
import React, { useState } from 'react'
import { GrMicrophone, GrSend } from 'react-icons/gr';
import { PiCamera, PiPaperPlaneRightFill } from "react-icons/pi";
import { RiLoopLeftFill, RiMessageFill, RiSkipLeftFill } from 'react-icons/ri';
import { TbArrowLeftBar } from 'react-icons/tb';
function Messages() {
  let [messagebox,setmessagebox]=useState(false)
  if(messagebox){
    return (
     <ChatBox setmessagebox={setmessagebox} messagebox={messagebox}/>
    )
  }

  return (
    <div>
      <div className=' bg-blue-600 p-4 rounded-t-lg'>
        <h1 className='font-semibold text-2xl text-white'>Messages</h1>
      </div>
      <div className='w-full flex flex-col  justify-center items-center h-96 border'>
        <div className='flex flex-col gap-4 justify-center items-center text-center '>
        <span className='text-3xl'><RiMessageFill/></span>
      <p className='text-xl font-semibold '>No messages</p>
      <p>
Messages from the team will be shown here

      </p>

        </div>
      <button onClick={()=>setmessagebox(!messagebox)} className='flex justify-center items-center bg-blue-700 gap-2 p-2 mt-36 rounded-lg text-white px-2'><span>Send a message</span> <span><PiPaperPlaneRightFill/></span></button>
      </div>
    </div>
  )
}

export default Messages

const ChatBox = ({setmessagebox, messagebox}) => {
  const [messages, setMessages] = useState([]);
  const [typedMessage, setTypedMessage] = useState('');

  const addUserMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser: false }]);
  };

  const respondToUser = (userMessage) => {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addBotMessage('This is a response from the chatbot.');
    }, 500);
  };

  const sendbtn = () => {
    if (typedMessage.trim() !== '') {
      addUserMessage(typedMessage);
      respondToUser(typedMessage);
      setTypedMessage('');
    }
  };

  return (
    <div className=''>
  
      <div>
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
         <FaAngleLeft className='cursor-pointer' onClick={()=>setmessagebox(!messagebox)}/>
            <div>
            <div className="w-full flex justify-between p-2 gap-2">
        
        <div class="flex -space-x-4 rtl:space-x-reverse">
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://static.intercomassets.com/avatars/5279685/square_128/Screenshot_20230525-194301-1685040295.png"
            alt=""
          />
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://static.intercomassets.com/avatars/5279685/square_128/Screenshot_20230525-194301-1685040295.png"
            alt=""
          />
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://static.intercomassets.com/avatars/5279685/square_128/Screenshot_20230525-194301-1685040295.png"
            alt=""
          />
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://static.intercomassets.com/avatars/5279685/square_128/Screenshot_20230525-194301-1685040295.png"
            alt=""
          />
        </div>
        <div className='flex flex-col'>

            <p className="text-lg font-semibold">Intercom</p>
           <p className='flex justify-center items-center gap-2 text-center'><span><IoTimerOutline/></span><span>Within a day</span></p> 
        </div>
      </div>
            </div>
         
          </div>
          <div id="chatbox" className="p-2 h-[310px] overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={message.isUser ? 'mb-2 text-right' : 'mb-2'}>
                <p className={`bg-'gray-400' text-${message.isUser ? 'black-700' : 'gray-700'} rounded-lg py-2 px-4 inline-block`}>{message.text}</p>
              </div>
            ))}
          </div>
        
          <div className="flex justify-between items-center p-2  bottom-0 w-full bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
                className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-400 text-gray-900 w-full"
                style={{ fontSize: '11px' }}
                placeholder="Type a message..."
              />
              <IoAttach className="text-gray-700 font-bold text-3xl cursor-pointer" />
              <MdOutlineInsertEmoticon className="text-gray-700 font-bold text-3xl cursor-pointer" style={{ fontSize: '17px', fontWeight: 'bold' }} />
              <MdOutlineGifBox className="text-gray-700 font-bold text-3xl cursor-pointer" />
              <div>
                <GrSend className='cursor-pointer' onClick={sendbtn}/>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};







