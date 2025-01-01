import React from 'react';

function TakeTheCall() {
  return (
    <div className="w-[19.3125rem] h-[8.375rem] relative group parent">
      <div className="w-[12.875rem] h-[6.875rem] absolute text-right text-[#303338] text-[3.0894rem] font-semibold font-pSans leading-[3.6456rem] tracking-wide">
        Take <br /> <span className='un'>The Call</span>
      </div>
      <div className="absolute left-[14.8125rem] top-[0.625rem] flex flex-col justify-start">
        <svg
          width="42"
          height="43"
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition ease-in-out duration-500 group-hover:-rotate-12 mb-[1.2rem]"
        >
          <g id="Cup Icon">
            <path
              id="Vector"
              d="M28 15C28.5304 15 29.0391 15.2107 29.4142 15.5858C29.7893 15.9609 30 16.4696 30 17V33C30 35.1217 29.1571 37.1566 27.6569 38.6569C26.1566 40.1571 24.1217 41 22 41H10C7.87827 41 5.84344 40.1571 4.34315 38.6569C2.84285 37.1566 2 35.1217 2 33V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H32C34.1217 15 36.1566 15.8429 37.6569 17.3431C39.1571 18.8434 40 20.8783 40 23C40 25.1217 39.1571 27.1566 37.6569 28.6569C36.1566 30.1571 34.1217 31 32 31H30"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M16 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M24 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_4"
              d="M8 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <div className="w-[4.5rem] h-[5.5rem] text-orange-500 text-sm font-medium font-inter uppercase leading-tight tracking-wide">
          Tea or Coffee?
        </div>
      </div>
    </div>
  );
}

export default TakeTheCall;
