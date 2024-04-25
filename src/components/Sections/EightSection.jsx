import React, { useState } from "react";
import data from "../../data.json";

function EightSection() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(input));
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:${email}`;
    } else {
      alert(data.sections.eight.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-12 px-8 gap-2">
      <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {data.sections.eight.title}
      </p>
      <p className="text-xs sm:text-md md:text-xl lg:text-2xl text-gray_light">
        {data.sections.eight.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-12 gap-2 sm:gap-4 ">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="bg-[#F4F4F4] text-black p-3 px-5 border-solid border border-[#CFCFCF] placeholder-black"
          placeholder={data.sections.eight.input_placeholder}
        />
        <button
          className="bg-primary text-white p-3 px-10"
          onClick={handleButtonClick}
        >
          {data.sections.eight.button}
        </button>
      </div>
      {!isValidEmail && email !== "" && (
        <p className="text-red-500 text-sm mt-2">{data.sections.eight.error}</p>
      )}
    </div>
  );
}
 export default EightSection