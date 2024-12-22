import React from 'react'
import home1 from '../assets/home1.jpg'
import ContactForm from './ContactForm.jsx'

function Home() {
  return (
    <div className='w-auto h-auto bg-[#ecf0f1] overflow-hidden'>
      <div className='w-auto flex items-center justify-center h-[500px] BrightLayers'>
        <div className='w-[1215px] text-center'>
          <span className='text-[#303338] text-[55px] font-medium, font-pSans leading-[64.90px] tracking-wide'>
          We are Bright Layers, a dynamic social media agency since 2019,
            dedicated to elevating brands through creative content and strategic
            digital marketing
          </span>
          <span className="text-[#303338] text-[66px] font-medium font-pSans leading-[77.88px] tracking-wide">
            {" "}
          </span>
          <span className="text-[#303338] text-[49px] font-medium font-pSans leading-[57.82px] tracking-wide">
            ツ
          </span>
        </div>
      </div>
      <div className="w-full h-[222px] flex justify-end mt-36">
        <img
          src={home1}
          className=" w-[1200px] h-[222px] object-cover"
          alt="assets"
        />
      </div>


      <div className="w-auto h-[324px] flex flex-col mt-36 px-4">
              <div
                className="w-[495px] h-[19px] text-right text-[#da5428] 
                text-[25px] font-semibold font-pSans
                capitalize leading-[29.5px] tracking-tight">
                What do we do?
              </div>

              <div
                className="w-[863px] h-[364px] text-[#535353] 
                text-[24.5px] font-medium font-title leading-9 tracking-tight text-left mt-4 mx-auto">
                In the last 5 years, the country has seen trendsetting marketing
                campaigns — but what&apos;s missing is &quot;the beyonds&quot; of a campaign. Does it
                end after a post, a hoarding, an ad? So we just want likes & comments?
                Maybe an app download? No. That can&apos;t be all.
                <br />
                <br />
                There&apos;s more to your brand than this — and we want to bring that to the
                front too. Beyond just campaigns. Just like our name, we are here to
                brighten up your social media presence with a layered approach that
                works exclusively for you.
              </div>
              <div className='flex justify-end'>
                <a href='#examples' className="w-[151px] h-[29px] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4">
                    check examples
                </a>
              </div>
          </div>

          <div className=''>

          </div>
      <ContactForm />
    </div>
  )
}

export default Home