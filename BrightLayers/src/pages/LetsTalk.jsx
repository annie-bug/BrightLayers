import Navbar from "../components/Navbar"
import rectangle2 from "../assets/rectangle2.png"
import LetsTalkForm from "../components/LetsTalkForm"
import Footer from "../components/Footer"
import BlogSpot from '../components/BlogSpot.jsx'

function LetsTalk() {
  return (
    <div>
        {/* <Navbar/> */}
        <Navbar />
        {/* The Title in the middle  */}
        <div className="w-full mt-[23.5rem]  mb-[11.19rem] flex justify-center items-center">
            <div className="self-center w-[75.9375rem] h-[8.125rem]  text-[#313338]
             text-center font-pSans text-[3.4375rem] 
             font-medium leading-[118%] tracking-[0.03438rem]">A call is worth 
                      <span className="text-[#F97316]"> 120 seconds </span>
                      of the fastest most definite call to action you can take ツ
            </div>
        </div>
        

        {/* The form and image div */}
          <div className="flex flex-row pl-[5.5rem] h-[67.5625rem] w-[70%] gap-x-[4.25rem]">
            <div><img className="h-[64.5625rem] w-[40.1875rem]" src={rectangle2} alt="" /></div>
            <div className="w-[35%] mr-7"><LetsTalkForm/></div>
            
          </div>



        <div className="mt-40">
        <BlogSpot />

        </div>

       


    <div className="w-[90%] mx-auto h-[100vh] flex flex-col justify-center">

        {/*Reach Out To Us */}
        <div className=" w-[26rem] text-[#303338] text-[3.0894rem] font-semibold font-['Public Sans'] leading-[3.6456rem] tracking-wide">Reach Out To Us</div>

        {/* SVG Line */}
        <svg xmlns="http://www.w3.org/2000/svg" width="878" height="100" viewBox="0 0 878 2" fill="none"> <path d="M0 1H878" stroke="#545454" strokeWidth="2"/>
        </svg>

        {/* Grid for email,contact and address */}
        <div className=" w-[85%] mt-12 grid grid-cols-2 gap-12">   
                  <div> 
                  <div data-layer="Email Address" className=" w-[12.5625rem] h-[3.4375rem] text-orange-500 text-[1.5625rem] font-bold font-title leading-loose tracking-tight">Email Address</div>
                  <div data-layer="admin@dunk.agency" className="AdminDunkAgency w-[19.4375rem] h-[2.0625rem] text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">admin@dunk.agency</div>
                  </div>


                  <div>
                  <div data-layer="Contact" className=" w-[12.5625rem] h-[3.4375rem] text-orange-500 text-[1.5625rem] font-bold font-title leading-loose tracking-tight">Contact</div> 
                  <div data-layer="+61 450 885 458" className=" w-[19.4375rem] h-[2.0625rem] text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">+61 450 885 458<br/></div>
                  </div>

                  <div>
                  <div data-layer="Address" className="Address w-[12.5625rem] h-[3.4375rem] text-orange-500 text-[1.5625rem] font-bold font-title leading-loose tracking-tight">Address</div>
                  <div data-layer="24/25 Alex Fisher Dr, Burleigh Heads, 4220, Australia" className="25AlexFisherDrBurleighHeads4220Australia w-[47.125rem] h-12 text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">24/25 Alex Fisher Dr, Burleigh Heads, 4220, Australia</div>
                  </div>
        </div>
    </div>
    

    <Footer/>

    </div>
  )
}

export default LetsTalk