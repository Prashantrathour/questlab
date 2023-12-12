import React from 'react'
import { GrSearch, GrSearchAdvanced } from 'react-icons/gr'
import { RxCaretRight } from "react-icons/rx";
function Help() {

  let category=
  [
    {
      "title": "Intercom Overview",
      "description": "See how your customer service solution works.",
      "articles": 17
    },
    {
      "title": "Getting Started",
      "description": "Everything you need to know to get started with Intercom",
      "articles": 65
    },
    {
      "title": "Help Desk",
      "description": "Boost productivity with a workspace that connects your inbox, tickets, and help center",
      "articles": 89
    },
    {
      "title": "AI Chatbot",
      "description": "Cut support volume and increase efficiency with an AI chatbot and automations",
      "articles": 33
    },
    {
      "title": "Proactive Support",
      "description": "Get ahead of support volume with product tours, outbound messages, and more",
      "articles": 160
    },
    {
      "title": "Automation",
      "description": "Automate simple processes, speed up your workflows and offer proactive support",
      "articles": 34
    },
    {
      "title": "Articles",
      "description": "Use Articles in your Help Center to allow customers to self-serve.",
      "articles": 40
    },
    {
      "title": "Reports",
      "description": "Measuring the performance of your teams, messages, articles and automations.",
      "articles": 32
    },
    {
      "title": "Contacts",
      "description": "Tracking your customers in the Intercom platform for better relationships.",
      "articles": 49
    },
    {
      "title": "Messenger",
      "description": "Setting up and customizing your Messenger to start chatting with customers",
      "articles": 30
    },
    {
      "title": "App Store",
      "description": "Learn about Intercom's app store, adding apps to your workspace and building your own custom apps.",
      "articles": 50
    },
    {
      "title": "Phone",
      "description": "Make every call count. Solve customer problems faster with phone calls, video calls, and screen sharing.",
      "articles": 8
    },
    {
      "title": "Switch",
      "description": "Reduce hold times for your customers and move phone conversations to Messenger.",
      "articles": 6
    },
    {
      "title": "Custom Actions & Objects",
      "description": "Boost your bot's effectiveness and resolve more customer questions automatically.",
      "articles": 18
    },
    {
      "title": "Intercom in your App",
      "description": "Everything you need to know about installing and using Intercom in your mobile app.",
      "articles": 20
    },
    {
      "title": "Community",
      "description": "FAQs from the Intercom Community forum",
      "articles": 20
    },
    {
      "title": "Academy",
      "description": "Using Intercom Academy to level up and learn new skills.",
      "articles": 2
    },
    {
      "title": "Privacy & Terms",
      "description": "Updating your privacy policy to include Intercom, and our own terms and privacy policies.",
      "articles": 15
    }
  ]

  return (
    <div>
      <div className=' bg-blue-600 p-4 rounded-t-lg w-full'>
        <h1 className='font-semibold text-2xl text-white'>Help</h1>
        
        <div className="flex justify-center items-center w-full bg-white border border-gray-300 rounded p-2 mt-2">
      <input
        type="text"
        className="w-full border-none outline-none"
        placeholder="Search..."
      />
      <div className="ml-2 cursor-pointer"><GrSearch/></div>
    </div>

      </div>
      <div className='h-[345px] overflow-y-scroll'>
        <p className='text-left p-4'>{category.length +"  " }collections</p>
      {category.map((item)=>{
        return(
      <div className='border flex justify-between items-center hover:bg-green-200 cursor-pointer'>
        <div className='w-full text-start p-3'>
        <strong className='hover:text-blue-600'>{item.title}</strong>
        <p className='text-sm font-normal'>{item.description}</p>
        <p className='text-sm font-light text-gray-500'>{item.articles} articals</p>

        </div>
        <div className='text-lg p-3'>
    <RxCaretRight/>
        </div>
      </div>

        )
      })}
    </div>

      </div>
  )
}

export default Help