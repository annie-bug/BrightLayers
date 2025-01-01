import React from 'react'

function KnowAboutUs() {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 mt-[0.2rem] ml-16">
              <div className="flex flex-col items-center justify-center space-y-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44 42V38C43.9987 36.2275 43.4087 34.5056 42.3227 33.1046C41.2368 31.7037 39.7163 30.7031 38 30.26" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                    <div className="w-[4.5rem] h-[5.5rem] text-orange-500 text-sm font-medium font-inter uppercase leading-tight tracking-wide">
                    Who Are We?
                    </div>
                </div>
                <div
                    data-layer="Know About Us"
                    className=" w-[13.44rem] text-[#303338] text-[3.0894rem] font-semibold font-pSans leading-[3.5219rem] mb-12">
                    Know
                    <br />
                    About Us
                </div>
            </div>
  )
}

export default KnowAboutUs