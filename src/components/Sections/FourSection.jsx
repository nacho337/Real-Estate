import React from "react";
import data from "../../data.json";

function FourSection() {
  const words = data.sections.six.title.split(" ");

  return (
    <div id="marketplace" className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-20 ">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-10 ">
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
          <p className="text-black text-xs mt-7">{data.sections.six.subtitule}</p>
         
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 text-xs justify-end">
        Learn More
      </button>
         
          <h2 className="text-[#080808] sm:mb-60"></h2> 
          
          <img
            src={data.sections.six.image1}
            alt={data.sections.six.alt1}
            width="100%"
            height="auto"
            className="block sm:hidden"
          />
        </div>
        <div className="hidden sm:block mt-0">
          <img src={data.sections.six.image1} alt={data.sections.six.alt1} />
        </div> 
      </div>
    </div>
  );
}

export default FourSection;
          