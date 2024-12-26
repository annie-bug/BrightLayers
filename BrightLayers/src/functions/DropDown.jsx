import React, { useState } from "react";

const DropdownMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    "SOCIAL MEDIA MARKETING",
    "EMAIL MARKETING",
    "STRATEGY DEVELOPMENT",
    "BRANDING AND IMAGERY",
    "SOCIAL MEDIA ADVERTISEMENTS",
  ];

  return (
    <div className="w-80 mx-auto mt-10 space-y-2 font-sans">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 pb-2"
        >
          <div
            className="flex justify-between items-center cursor-pointer py-2 px-3"
            onClick={() => toggleDropdown(index)}
          >
            <span className="text-lg font-medium">{item}</span>
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>
          <div
            className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
              activeIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 text-gray-600">
              <p>{`${item} details go here.`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
