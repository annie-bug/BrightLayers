import ToggleCheckbox from "./ToggleCheckbox.jsx";

function LetsTalkForm() {
  return (
    <div className="">         
      <div className="w-full flex flex-col sm:flex-row">    {/*pr-[8.78rem]*/}
        
        <div className="grid md:grid-cols-2 w-full">  {/*Made a grid for the form layout */}

          {/* First Name and Last Name */}
          <div className="relative z-0 mb-12 group">
            <input
              type="text"
              className="block pt-6 text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-2xl text-[#535353] dark:text-[#535353] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 mb-12 group">
            <input
              type="text"
              className="block pt-6 text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-2xl text-[#535353]   dark:text-[#535353] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
      </div>

      {/* <!-- Email --> */}
      <div className="mb-12 relative z-0">
        <input
          type="email"
          className="block pt-6 px-0 text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-2xl text-[#545454] dark:text-[#535353] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
          Email Address
        </label>
      </div>

      {/* <!-- Phone Number --> */}
      <div className="mb-12 relative z-0 w-full">
        <input
          type="number"
          className="block pt-6 px-0 text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-2xl text-[#535353] dark:text-[#535353] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
          Phone Number
        </label>
      </div>

      {/* <!-- Brand Website --> */}
      <div className="mb-12 relative z-0 w-full">
        <input
          type="email"
          className="block pt-6 px-0 text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-2xl text-[#535353] dark:text-[#535353] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
          Brand Website
        </label>
      </div>

      {/* <!-- About Brand --> */}

      <div className="flex flex-col items-end gap-6">
  <div className="relative w-[48.15625rem]">
    <textarea
      className="peer h-[15rem] resize-none rounded-md border border-gray-300 bg-transparent px-3 py-3 text-2xl text-gray-700 focus:outline-none focus:border-2 dark:focus:border-blue-500"
      placeholder="Tell Us About Your Brand"
    ></textarea>
    <label
      className="absolute text-2xl text-gray-500 "
    >
    </label>
  </div>
</div>





      {/* <!-- Services Inquiry --> */}
      <div className="mb-6 mt-20">
        {/* What Service Are You Inquiring About?*/}
        <div className="mb-12 relative z-0 w-full">
          <input
            type="email"
            className="block pt-6 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
            What Service Are You Inquiring About?
          </label>
        </div>



  {/* The checkbox part */}
        <div className="grid grid-cols-2 gap-4 ">
          <label className="flex items-center space-x-2">
            <ToggleCheckbox />
            <span className="text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">
              Social Media Marketing
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <ToggleCheckbox />
            <span className="text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">
              Branding & Imagery
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <ToggleCheckbox />
            <span className="text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">
              Email Marketing
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <ToggleCheckbox />
            <span className="text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">
              Social Media Adverts
            </span>
          </label>
          <label className="flex items-center space-x-2 col-span-2">
            <ToggleCheckbox />
            <span className="text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">
              Strategy Development
            </span>
          </label>
        </div>
      </div>

      {/* <!-- Submit Button --> */}
      <div className="text-left">
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-[#d9d9d9] text-[#535353] font-medium hover:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LetsTalkForm;