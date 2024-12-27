import React from 'react'
import home1 from '../assets/home1.jpg'
import ContactForm from './ContactForm.jsx'
import image from '../assets/image.png'
import DropDown from '../functions/DropDown.jsx'
import { AnimatedLogo } from '../functions/AnimatedLogo.jsx'
import rectangle from '../assets/rectangle.png'


function Home() {
  return (
    <div className='w-auto h-auto bg-[#ecf0f1] overflow-hidden  z-[-1]'>
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
                    className="w-[1200px] h-[222px] object-cover"
                    alt="assets"
                  />
              </div>


            <div className="w-auto h-[324px] flex flex-col mt-36 px-4">
                    <div
                      className="w-[495px] h-[19px] text-right text-[#da5428] 
                      text-[25px] font-semibold font-pSans
                      capitalize leading-[29.5px] tracking-tight">
                      What Do We Do?
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
                <div className='w-full h-[222px] flex justify-start mt-40'>
                    <img src={image} alt="assets"  className='w-[1200px] h-[222px] object-cover'/>
                  </div>
                    <div className='w-auto h-[324px] flex flex-col mt-36 px-4'>
                        <div className='w-[509px] h-[19px] text-right text-[#da5428] 
                          text-[25px] font-semibold font-pSans
                          capitalize leading-[29.5px] tracking-tight'>How Do We Do It?</div>
                            <div className='w-[863px] h-[364px] text-[#535353] 
                                text-[24.5px] font-medium font-title leading-9 tracking-tight text-left mt-4 mx-auto'>Our approach is different - a boutique-style agency that prioritizes understanding our   clients as intimately as our own business. This approach has not only made us experts in our field but has allowed us to build genuine partnerships.</div>
                                <div className='flex justify-end'>
                                      <a href='#examples' className="w-[151px] h-[156px] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4">
                                          check services
                                        </a>
                                    </div>
                                </div>
                          <div className='w-[550px] h-[137px] text-[#303338] text-[45px] font-semibold font-pSans leading-4     tracking-tight mt-10 ml-[146px]'>Service We Provide For Your Brand
                                <span className="text-[#303338] text-[66px] font-medium font-pSans leading-[77.88px] tracking-wide">
                                    {" "}
                                  </span>
                                <span className="text-[#303338] text-[47px] font-bold font-pSans leading-[57.82px] tracking-wide">
                                    ツ
                                  </span>
                                    <AnimatedLogo />
                          </div>
                              <div className='flex items-center justify-between'>
                                  <DropDown />
                                  <div className='flex justify-end'>
                                      <img src={rectangle} alt="image" className='mr-[80px]' />
                                    </div>
                                </div>

                          
    </div>
  )
}

export default Home