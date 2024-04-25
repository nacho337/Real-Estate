import React from "react";
import data from "../../data.json";

function Hero() {
  const words = data.sections.one.title.split(" ");

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-20">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          <h2 style={{ lineHeight: "1.2" }}>
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  color: word === "expertise" ? "#2B88D9" : "inherit",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <h2 className="text-[#F2F2F2] sm:mb-60"></h2>
          <img
            src={data.sections.one.image}
            alt={data.sections.one.alt}
            width="100%"
            height="auto"
            className="block sm:hidden"
          />
        </div>
        <div className="hidden sm:block">
          <img src={data.sections.one.image} alt={data.sections.one.alt} />
        </div>
      </div>
      <div
        className="sm:absolute backdrop-blur-[0.5px] top-0 sm:top-[50%] md:top-[70%] left-0 bg-white bg-opacity-85 w-full h-auto py-4 z-10"
        style={{
          boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="py-4 px-12 grid">
          <p className="text-5xl font-[500] mb-3 mt-11 tracking-normal text-center">
            {data.sections.two.title}
          </p>
          <div className="grid grid-cols-3 gap-4 "></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>




          {/* <div className="flex flex-col sm:flex-row border-s-[#DDDDDD]">
            {Object.entries(data.sections.two.filtersbar).map(
              ([filterTitle, options]) => (
                <select
                  key={filterTitle}
                  className={`border border-gray_light text-gray_default px-6 py-3.5 w-full sm:w-[18%] cursor-pointer`}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )
            )}
            {/* <button className="bg-primary sm:ml-4 mt-2 sm:mt-0 w-full sm:w-1/5 py-3 text-white">
              {data.sections.two.button} */}
            {/* </button> */}
          {/* </div> */} 
        </div>
      </div>
    </div>
  );
}

export default Hero;
