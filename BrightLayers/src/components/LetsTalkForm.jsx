import ToggleCheckbox from "./ToggleCheckbox.jsx";

function LetsTalkForm() {
  return (
    <div className="w-[48.15625rem]">
      {/* Grid for Form Fields */}
      <div className="grid grid-cols-2 gap-x-[2.44rem] mt-10">
        {/* First Name */}
        <div className="relative z-0">
          <input
            type="text"
            className="block pl-2 pt-6 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="absolute pointer-events-none text-2xl text-[#535353] duration-300 transform origin-left -translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
            First Name
          </label>
        </div>

        {/* Last Name */}
        <div className="relative z-0 mb-8">
          <input
            type="text"
            className="block pl-2 pt-6 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="absolute pointer-events-none text-2xl text-[#535353] duration-300 transform origin-left -translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
            Last Name
          </label>
        </div>
      </div>

      {/* Email */}
      <div className="relative z-0 mb-8">
        <input
          type="text"
          className="block pl-2 pt-6 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-2xl text-[#535353] duration-300 transform origin-left -translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Email
        </label>
      </div>

      {/* Phone Number */}
      <div className="relative z-0 mb-20">
        <input
          type="text"
          className="block pl-2 pt-6 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-2xl text-[#535353] duration-300 transform origin-left -translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Phone Number
        </label>
      </div>

      {/* Tell Us About Your Brand */}
      <div className="relative z-0 mb-20">
        <textarea
          className="block pl-2 pt-4 w-full h-40 text-2xl text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-600 peer resize-none"
          placeholder=" "
          required
        ></textarea>
        <label className="absolute pointer-events-none text-2xl text-[#535353] duration-300 transform -translate-y-8 scale-75 origin-left -top-2 peer-placeholder-shown:left-4 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Tell Us About Your Brand
        </label>
      </div>

      {/* Services Inquiry */}
      <div className="relative z-0 mb-6">
        <input
          type="text"
          className="block pl-2 pt-6 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-2xl text-[#535353] duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          What Service Are You Inquiring About?
        </label>
      </div>

      {/* Checkboxes */}
      <div className="grid grid-cols-2 gap-8 py-8">
        {[
          "Social Media Marketing",
          "Branding & Imagery",
          "Email Marketing",
          "Social Media Adverts",
          "Strategy Development",
        ].map((label, index) => (
          <label
            key={index}
            className={`flex items-center space-x-2 ${
              label === "Strategy Development" ? "col-span-2" : ""
            }`}
          >
            <ToggleCheckbox />
            <span className="text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">
              {label}
            </span>
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <div className="text-left">
        <button
          type="submit"
          className="mt-8 px-10 py-2 bg-[#d9d9d9] text-[#535353] font-medium text-xl hover:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LetsTalkForm;