import React, { useState } from "react";
import logo from "../ChatboxComponents/logo.png";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { RxCaretRight } from "react-icons/rx";
import { RiAlignRight, RiSearchLine, RiSkipLeftFill } from "react-icons/ri";
function Home({setActiveTab}) {
  const [artical,setartical]=useState(false)

  let arr = [
    "Send custom user attributes to Intercom",
    "Tracking user data in Intercom",
    "Customize the pre-made email templates",
    "Forward your email to your team inbox",
  ];
  if(artical){
    return (
      <h1>Artical</h1>
    )
  }
  return (
    <div className="overflow-hidden transition-all duration-300">
      <div className="w-full flex justify-between p-2">
        <img width={"50px"} src={logo} alt="placeholder" />
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
      </div>
      <div className=" flex flex-initial flex-col font-extrabold text-3xl text-white mt-6 text-left">
        <div className="m-6">
          <h1 className="opacity-50">Hello there.</h1>
          <h1>How can we Help? </h1>
        </div>
        <div onClick={()=>setActiveTab("Messages")} className="text-base rounded-xl bg-white shadow-2xl text-black font-normal flex justify-between m-4 p-4 items-center">
          <div>
            <p className="hover:text-blue-700 font-semibold ">
              Send us a message
            </p>
            <p className="text-gray-600">We typically reply within a day</p>
          </div>
          <PiPaperPlaneRightFill fill="blue" />
        </div>
      </div>
      <div className=" m-4 bg-white shadow-2xl  rounded-2xl">
        <img
          className="p-6"
          src="https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=568x"
        />
        <div onClick={()=>setActiveTab("News")} className="text-left border-t w-full hover:bg-blue-100  rounded-b-2xl cursor-pointer">
          <div className="p-4">
            <strong className="hover:text-blue-600">
              The intercom community
            </strong>
            <p className="text-sm font-thin text-gray-700 ">
              Be sure to check out the intercom community for support and plus
              tips&tricks from intercom user and much more
            </p>
          </div>
        </div>
      </div>
      <div className=" m-4 bg-white shadow-2xl  rounded-2xl">
        <div className="border rounded-2xl">
          <div onClick={()=>setActiveTab("Help")} className="  text-base rounded-md bg-slate-200 border hover:bg-blue-200   text-black font-normal flex justify-between m-4 p-1 px-2 items-center">
            <div className="">
              <p className="hover:text-blue-700 font-normal ">
                Search for help
              </p>
            </div>
            <RiSearchLine className="text-blue-500" fill="blue" />
          </div>
          {arr.map((item)=>{
            return(
          <div onClick={()=>setActiveTab("Help")}  className="hover:bg-blue-200  text-base rounded-md  text-black font-normal flex justify-between m-4 p-1 items-center">
            <div>
              <p className="hover:text-blue-700 font-normal text-sm p-1 ">
               {item}
              </p>
            </div>
            <RxCaretRight fill="blue" className="text-blue-500" />
          </div>

            )
          })}
        </div>
      </div>
      <div className=" m-4 bg-white shadow-2xl  rounded-2xl">
        <img
          className="p-6"
          src="https://images.ctfassets.net/xny2w179f4ki/Y779AgRt5sjg2nE9NnWx7/2684a93c01ce95d546deedcc64a0e90d/HBR_Resource_LP_Thumbnail_-_393x250.png"
        />
        <div className="text-left border-t w-full hover:bg-blue-100  rounded-b-2xl cursor-pointer" onClick={()=>setActiveTab("News")} >
          <div className="p-4">
            <strong className="hover:text-blue-600 text-sm">
              Future‑Proofing Businesses with Modern Customer Engagement
            </strong>
            <p className="text-sm font-thin text-gray-700 ">
              Be sure to check out the intercom community for support and plus
              tips&tricks from intercom user and much more See how businesses
              are building unified, efficient customer engagement strategies
              that protect their bottom line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
