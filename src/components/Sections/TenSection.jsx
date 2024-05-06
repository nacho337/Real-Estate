import React from "react";
import data from "../../data.json";

function TenSection() {
  const words = data.sections.twelve.title.split(" ");

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-20">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
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
          <p className="text-black text-xs mt-7">{data.sections.twelve.subtitule}</p>
          <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 text-xs">
        
        <a href="mailto:correo@example.com">Get in touch</a>
      </button>
      <div className="text-xl mt-7 text-center">
      <p></p>
      
    </div>
         </div>
          <h2 className="text-[#080808] sm:mb-60"></h2>
          <img
            src={data.sections.twelve.image3}
            alt={data.sections.twelve.alt1}
            width="100%"
            height="auto"
            className="block sm:hidden"
          />
        </div>
        <div className="hidden sm:block">
          <img src={data.sections.twelve.image3} alt={data.sections.twelve.alt1} />
        </div>
      </div>
    </div>
  );
}

export default TenSection;
          