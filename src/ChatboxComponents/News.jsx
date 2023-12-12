import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

function News() {
  const [singleartical,setsingleartical]=useState(false)
const [id,setid]=useState(null)
  let items = [
    {
      id: 1,
      type: "New",
      labels: ["Beta"],
      heading:
        "Support customers with Fin in 45 languages—join the open beta👇",
      description:
        "Support your customers with Fin in 45 languages—with no extra setup required.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 2,
      type: "Inbox",
      status: "New",
      heading: "Streamline external collaboration with side conversations",
      description:
        "Start a conversation with external partners from within the context of a conversation or ticket.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 3,
      type: "Inbox",
      status: "New",
      heading:
        "Give your customers a centralized view of their tickets with the tickets portal",
      description:
        "When using Intercom tickets in a b2b support use case, the tickets portal enables an external view of all tickets grouped by company.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 4,
      type: "New feature",
      category: "Messenger",
      labels: ["Customization"],
      heading:
        "Set the right expectations by customising the Start Conversation button in the Messenger 💬",
      description:
        "Customize the Start Conversation button in your Messenger 🪄",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 5,
      type: "New",
      labels: ["Beta"],
      heading:
        "Support customers with Fin in 8 more languages—join the open beta👇",
      description:
        "Support your customers with Fin in 8 languages—with no extra setup required.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 6,
      type: "Inbox",
      status: "New",
      heading: "Better tickets for your team and your customers",
      description:
        "We’ve redesigned tickets to help your team solve any type of complex issue faster and more effectively than ever before.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 7,
      type: "AI",
      labels: ["Speed", "Streaming"],
      heading: "Fin just got a whole lot faster with AI Answer streaming 🏎️💨",
      description: "Fin is now streaming AI answers in the web Messenger!",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 8,
      type: "Support",
      category: "New feature",
      labels: ["Automation"],
      heading: "Automatically redirect URLs with Zendesk Articles migration",
      description:
        "When you migrate your articles to Intercom using our Zendesk migration tool – we'll now automatically create URL redirects from your previous URLs to your new Intercom articles.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 9,
      type: "Support",
      status: "New",
      heading: "The State of AI in Customer Service: 2023 Report",
      description:
        "AI is fundamentally changing the customer service industry—so we asked 1,000+ global support professionals how they’re making the most of this once-in-a-generation shift.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 10,
      type: "New product",
      labels: ["Breakthrough", "AI"],
      heading: "Meet Fin: Intercom's breakthrough AI bot 🤖",
      description:
        "Meet Fin - a breakthrough AI bot powered by GPT-4, OpenAI's most advanced AI model.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 11,
      type: "Feature update",
      category: "Outbound Messaging",
      labels: ["Checklists", "Onboarding"],
      heading:
        "Guide your customers to success with our new Checklists features",
      description:
        "Our new features are designed to streamline your onboarding process by making it easier for your customers to complete all necessary checklist steps.⏰ Remind customers about checklistsNudge customers",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 12,
      type: "Apps & API",
      category: "Blog",
      heading: "Announcing new AI features beta",
      description:
        "Built using GPT technology, we're excited to share new Intercom Inbox & Articles features. Currently in beta, the AI powered features help:",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 13,
      type: "Outbound Messaging",
      labels: ["Checklists", "Onboarding"],
      heading: "Turn signups into superusers faster than ever with Checklists",
      description:
        "Effortlessly onboard new users to your product and help them discover value as quickly as possible with personalized, in-context Checklists.",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
    {
      id: 14,
      type: "Messenger",
      category: "New feature",
      labels: ["Compact", "Focused"],
      heading:
        "Introducing the Compact Messenger - A highly focused Messenger for your highly focused customers 🚀",
      description:
        "It may be mini, but the new Compact Messenger is certainly mighty!",
      image:
        "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    },
  ];
function getid(id){
  setsingleartical(!singleartical)
setid(id)
}
if(singleartical&&id){
  let { type, labels, heading, description, image }=items.find((item)=>item.id==id)
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
      <div className="p-2 bg-blue-700 text-white font-extrabold text-3xl">
      <FaAngleLeft className='cursor-pointer' onClick={()=>setsingleartical(!singleartical)}/>
      </div>
    <div className="">
      <div className="">
        <img className="h-48 w-full object-cover " src={image} alt={heading} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{type}</div>
        <div className="mt-2">
          {labels && labels.length > 0 && (
            <div className="flex space-x-2">
              {labels.map((label, index) => (
                <span key={index} className="text-gray-500 text-xs">{label}</span>
              ))}
            </div>
          )}
          <p className="text-2xl text-gray-900 font-bold">{heading}</p>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
  return (
    <div>
      <div>
        <div className=" bg-blue-600 p-4 rounded-t-lg w-full">
          <h1 className="font-semibold text-2xl text-white">News</h1>
        </div>
        <div className="w-full flex justify-between p-2">
          <div className="text-start">
            <strong>Latest</strong>
            <p>From team Intercom</p>
          </div>
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
        <div className="h-[330px] overflow-y-scroll">
          {items.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center p-4 cursor-pointer" onClick={()=>getid(item.id)}>
                {/* Image */}
                <img
                  src={item.image}
                  alt="Sample"
                  className="w-full max-w-lg mb-4"
                />

                <div className="w-full text-start p-1">
                  <div className="mb-2 text-left">
                    {item.labels &&
                      item.labels.map((budget, index) => (
                        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 ml-1">
                          {budget}
                        </span>
                      ))}
                  </div>

                  <strong className="text-gray-600 text-left">
                    {item.heading}
                  </strong>
                  <p className="text-gray-600 text-left">{item.description}</p>
                </div>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default News;
