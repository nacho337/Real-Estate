import React from "react";
import data from "../../data.json";

function OneSection() {
  const words = data.sections.three.title.split(" ");
  return (
    <div className="mt-44 text-7xl text-center">
      <div className="flex flex-col-reverse mx-auto items-center gap-4  sm:gap-8 sm:flex-row">
        {/* <img
          src={data.sections.three.image1}
          alt={data.sections.three.alt1}
          width="35%"
          height="auto"
          className="hidden sm:block mt-3 px-4 sm:px-0 mx-auto "
        /> */}
        <div className="sm:w-full px-4 sm:px-0 object-cover object-center mx-auto col-span-2 sm:col-span-1 ">
          <div className="sm:w-full px-4 sm:px-0 object-cover object-center mx-auto col-span-2 sm:col-span-1">
            <h2 style={{ lineHeight: "1.2" }}>
              {words.map((word, index) => (
                <span
                  key={index}
                  style={{
                    color: word === "Surgery" ? "#2B88D9" : "inherit",
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </h2>
          </div>
          {/* <p className="text-[#6A6A6A] text-xl sm:mb-4 px-4 sm:px-0">
            {data.sections.three.subtitle}
          </p> */}
          <div className="grid grid-cols-3 gap-4 mt-20">
            <img
              src={data.sections.three.image2}
              alt={data.sections.three.alt2}
              className="w-80 h-80"

            />
            <img
              src={data.sections.three.image3}
              alt={data.sections.three.alt3}
              className="w-80 h-80"
            />
            <img
              src={data.sections.three.image1}
              alt={data.sections.three.alt1}
              className="w-80 h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OneSection;