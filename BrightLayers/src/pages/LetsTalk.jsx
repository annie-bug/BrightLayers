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
        <div className="w-full mt-80 flex justify-center items-center">
            <div className="self-center w-[1100px] h-[10.125rem] mb-32 text-[#313338] text-center font-[Public Sans] text-[3.4375rem] font-medium leading-[118%] tracking-[0.03438rem]">A call is worth 
                      <span className="text-[#F97316]"> 120 seconds </span>
                      of the fastest most definite call to action you can take ツ
            </div>
        </div>
        

        {/* The form and image div */}
          <div className="mx-auto flex flex-row justify-center gap-28 w-[90%]">
            <div><img className="h-[1012px] w-[695px]" src={rectangle2} alt="" /></div>
            <LetsTalkForm/>
          </div>


        <BlogSpot />



    <div className="w-[90%] mx-auto h-[100vh] flex flex-col justify-center">

        {/*Reach Out To Us */}
        <div className=" w-[416px] text-[#303338] text-[49.43px] font-semibold font-['Public Sans'] leading-[58.33px] tracking-wide">Reach Out To Us</div>

        {/* SVG Line */}
        <svg xmlns="http://www.w3.org/2000/svg" width="878" height="100" viewBox="0 0 878 2" fill="none"> <path d="M0 1H878" stroke="#545454" strokeWidth="2"/>
        </svg>

        {/* Grid for email,contact and address */}
        <div className=" w-[60%] mt-12 grid grid-cols-2 gap-12">   
                  <div> 
                  <div data-layer="Email Address" className=" w-[201px] h-[70px] text-orange-500 text-[25px] font-bold font-['Lato'] leading-loose tracking-tight">Email Address</div>
                  <div data-layer="admin@dunk.agency" className="AdminDunkAgency w-[311px] h-[33px] text-[#535353] text-[25px] font-medium font-['Lato'] leading-loose tracking-tight">admin@dunk.agency</div>
                  </div>


                  <div>
                  <div data-layer="Contact" className=" w-[201px] h-[70px] text-orange-500 text-[25px] font-bold font-['Lato'] leading-loose tracking-tight">Contact</div> 
                  <div data-layer="+61 450 885 458" className=" w-[311px] h-[33px] text-[#535353] text-[25px] font-medium font-['Lato'] leading-loose tracking-tight">+61 450 885 458<br/></div>
                  </div>

                  <div>
                  <div data-layer="Address" className="Address w-[201px] h-[70px] text-orange-500 text-[25px] font-bold font-['Lato'] leading-loose tracking-tight">Address</div>
                  <div data-layer="24/25 Alex Fisher Dr, Burleigh Heads, 4220, Australia" className="25AlexFisherDrBurleighHeads4220Australia w-[754px] h-12 text-[#535353] text-[25px] font-medium font-['Lato'] leading-loose tracking-tight">24/25 Alex Fisher Dr, Burleigh Heads, 4220, Australia</div>
                  </div>
        </div>
    </div>
    

    <Footer/>

    </div>
  )
}

export default LetsTalk