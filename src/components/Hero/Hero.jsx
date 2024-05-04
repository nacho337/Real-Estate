import React from "react";
import data from "../../data.json";

function Hero() {
  const words = data.sections.one.title.split(" ");

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-44">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
          <h2 style={{ lineHeight: "1.2" }}>
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  color: word === "expertise" ? "#080808" : "inherit",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="text-black text-xl mt-7">{data.sections.one.subtitule}</p>
          <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 text-xs">
        Get Started
      </button>
         </div>
          <h2 className="text-[#080808] sm:mb-60"></h2>
          <img
            src={data.sections.one.image}
            alt={data.sections.one.alt}
            width="100%"
            height="auto"
            className="block sm:hidden"
          />
        </div>
        <div className="hidden sm:block mt-0">
          <img src={data.sections.one.image} alt={data.sections.one.alt} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
          




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
    
