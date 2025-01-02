
import rectangle187 from '../assets/rectangle187.png'
import rectangle188 from '../assets/rectangle188.png'
import rectangle189 from '../assets/rectangle189.png'
import rectangle190 from '../assets/rectangle190.png'
import rectangle191 from '../assets/rectangle191.png'

function BlogSpot() {
  return (

    <div className='mb-12'>
            <div className='text-center text-[2.6519rem] font-medium font-pSans leading-[3.6456rem] tracking-wide'>Blog</div>
            <div className='m-auto flex justify-between w-[89%] mt-20'>
                <div>
                    <div className='relative w-[25.5rem] h-[24.5rem] '>
                        <img src={rectangle187} alt="dummyImg1" className='w-[25.5rem] h-[24.5rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0 hover:mb-4'/>
                        <img
                        src={rectangle191}
                        alt="hoverImg1"
                        className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100 hover:mb-4'/>
                    </div>
                    
                    <p className='text-[1.125rem] mt-4 w-[25.5rem] text-[#535353] font-title leading-relaxed tracking-tight'>
                    With a blend of innovation, strategy, and creativity, we specialize in crafting bespoke social media campaigns that not only captivate audiences but also drive measurable results.
                    </p>
                </div>
                <div>
                    <div className='relative w-[25.5rem] h-[24.5rem]'>
                        <img src={rectangle188} alt="dummyImg2" className='w-[25.5rem] h-[24.5rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0'/>
                        <img src={rectangle190} alt="hoverImg2" className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100'/>
                    </div>
                    <p className='text-[1.125rem] mt-4 w-[25.5rem] text-[#535353] font-title leading-relaxed tracking-tight'>
                    With a blend of innovation, strategy, and creativity, we
                    specialize in crafting bespoke social media campaigns that
                    not only captivate audiences but also drive measurable
                    results.
                    </p>
                </div>
                <div>
                    <div className='relative w-[25.5rem] h-[24.5rem]'>
                        <img src={rectangle188} alt="dummyImg3" className='w-[25.5rem] h-[24.5rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0'/>
                        <img src={rectangle189} alt="hoverImg2" className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100'/>
                    </div>
                    
                    <p className='text-[1.125rem] mt-4 w-[25.5rem] text-[#535353] font-title leading-relaxed tracking-tight'>
                    With a blend of innovation, strategy, and creativity, we
                    specialize in crafting bespoke social media campaigns that
                    not only captivate audiences but also drive measurable
                    results.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default BlogSpot