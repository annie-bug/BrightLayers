import React, { useState } from "react";

const DropdownMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: 'SOCIAL MEDIA MARKETING',
      content: 'Giving your brand the social media oomph it deserves. We handle everything from content strategy to execution, ensuring your social presence aligns perfectly with your brand ethos and goals.'
    },
    {
      title: 'EMAIL MARKETING',
      content: 'We craft compelling email campaigns that convert. From engaging newsletters to automated sequences, we help your brand be seen, known, and heard all the way from awareness to purchase.'
    },
    {
      title: 'STRATEGY DEVELOPMENT',
      content: 'Aesthetic is nothing without substance. We create tailored strategies combining expertise, tools, and creative vision to tell your brand story effectively and achieve measureable results.'
    },
    {
      title: 'BRANDING AND IMAGERY',
      content: `Whether creating from scratch or working with existing guidelines, we ensure your brand's essence shines through. We build and maintain strong, consistent brand identities that resonate.`
    },
    {
      title: 'SOCIAL MEDIA ADVERTISEMENTS',
      content: `Convert, don't confuse - that's our strategy with paid ads. We optimize your ad budget accross platforms to ensure maximize ROI and imapct, turning viewers into valuable customers.`
    }
  ];

  return (
    <div className="w-[32rem] ml-[138px] mt-10 font-sans">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="pb-[1.5rem]"
        >
          <div
            className="flex justify-between items-center py-2 px-2"
          >
            <span 
              className="text-[22px] font-medium font-title cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              {item.title}
            </span>
            <span
              className={`transform transition-transform duration-500 cursor-pointer ${
                activeIndex === index ? "-rotate-180" : "rotate-0"
              }`}
              onClick={() => toggleDropdown(index)}
            >
              ▼
            </span>
          </div>
          <div
            className={`transition-all duration-1000 ease-in-out overflow-hidden ${
              activeIndex === index
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 text-gray-600 text-[20px] font-title">
              <p className={`transition-opacity duration-1000 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;

