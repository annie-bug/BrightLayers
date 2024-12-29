import React from 'react'
import home1 from '../assets/home1.jpg'
import ContactForm from './ContactForm.jsx'
import image from '../assets/image.png'
import DropDown from '../functions/DropDown.jsx'
import { AnimatedLogo } from '../functions/AnimatedLogo.jsx'
import rectangle from '../assets/rectangle.png'
import TakeTheCall from './TakeTheCall.jsx'
import KnowAboutUs from './KnowAboutUs.jsx'
import image25 from '../assets/image25.png'
import image26 from '../assets/image26.png'
import image27 from '../assets/image27.png'
import InfiniteScroll from '../components/card/InfiniteScroll.jsx'
import Footer from '../components/Footer.jsx'
import FounderBio from '../components/FounderBio.jsx'
import BlogSpot from '../components/BlogSpot.jsx'


function Home() {
  return (
    <div className='w-auto h-auto bg-[#ecf0f1] overflow-hidden z-[-1] mt-[10%]'>
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
                          <div className='w-[550px] h-[137px] text-[#303338] text-[45px] font-semibold font-pSans leading-4 tracking-tight mt-10 ml-[146px]'>Service We Provide For Your Brand
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
                                  <div className='flex -my-24'>
                                      <img src={rectangle} alt="image" className='mr-[80px]' />
                                    </div>
                                </div>

                                <div>
                                  <ContactForm />
                                </div>

                                  <div className='w-full flex justify-center'>  
                                    <div className="w-[1139px] h-[313px] text-center text-[#535353] font-medium font-title leading-snug tracking-tight text-[25px]">
                    Our ideal customer personas are small to medium-sized business
                    owners, marketing managers, and ad moguls  looking to make their
                    brand be seen. They value the power of strategy with creativity, and
                    believe in results, rather than buzz. <br />
                    <br />
                    If you&apos;re that persona looking to navigate the digital
                    marketing scene and give your brand the visibility it deserves,
                    you&apos;re the one for us. Hope we&apos;re the one for you too.
              </div>
            </div>     
            <div className='flex flex-row justify-center'>
                <TakeTheCall/>
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="3" height="129" viewBox="0 0 3 129" fill="none" className='ml-16'>
                  <path d="M1.5 0V129" stroke="black" strokeWidth="2" />
                 </svg>
                <KnowAboutUs />
            </div>

            <div className="w-auto h-[36.30px] text-center text-[#303338] text-[37px] font-semibold font-pSans leading-[43.66px] tracking-tight mt-80">What People Are Saying</div>

            <div className='flex justify-center'>
                <div className='w-auto flex flex-row justify-between mt-[8.67rem] space-x-48'>
                  <img src={image26} alt="eureka" className='w-[256px] h-[148px] ml-10'/>
                  <img src={image25} alt="thames" className='w-[256px] h-[69px] mt-[2.5rem]'/>
                  <img src={image27} alt="talash" className='w-[256px] h-[148px]'/>
                </div>
              </div>
            <div>
              <InfiniteScroll/>
            </div>
            <div>
              <FounderBio/>
            </div>
            <div>
                <BlogSpot />
            </div>
            <div>
              <Footer/>
            </div>
            
    </div>
  )
}

export default Home