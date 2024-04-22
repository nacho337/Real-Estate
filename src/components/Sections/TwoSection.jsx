import React from "react";
import data from "../../data.json";
//import { IoPlaySharp } from "react-icons/io5";

function TwoSection() {
  return (
    <div className="relative flex justify-center items-center mt-8 sm:mt-20 px-4 sm:px-0 mb-8">
      <div
        className="absolute inset-0 z-40 flex justify-center items-center left-4 sm:left-0 right-4 sm:right-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 14.9%, rgba(255, 255, 255, 0) 36.77%, rgba(33, 137, 226, 0.85) 89.57%)",
        }}
      >
          
      </div>
      <img
        src={data.sections.four.image}
        alt={data.sections.four.alt}
        width="100%"
        height="auto"
        className="mx-auto relative z-10"
      />
      <div className="absolute grid grid-cols-2 z-50 bottom-[2%] md:bottom-[5%] lg:bottom-[10%] gap-10 px-6 lg:px-0 lg:pl-14">
        <p className="text-left text-white text-xs md:text-3xl lg:text-4xl font-bold">
          {data.sections.four.title}
        </p>
        <div className="flex flex-col">
          <p className="text-left text-white text-xs md:text-xl lg:text-2xl">
            {data.sections.four.subtitle}
          </p>
          <div className="hidden sm:flex items-center justify-start gap-12 pr-24 mt-1 text-xs md:text-base">
            <div className="flex items-center">
              {/* <img
                src={data.sections.four.band}
                alt={data.sections.four.band_alt}
                width={36}
                height={36}
                className="h-9 w-9"
              /> */}
              <div className="text-white flex flex-col sm:-space-y-1 ml-4">
                <p className="font-semibold">{data.sections.four.band_text1}</p>
                <p className="tracking-wider" style={{ lineHeight: "1" }}>
                  {data.sections.four.band_text2}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {/* <img
                src={data.sections.four.pill}
                alt={data.sections.four.pill_alt}
                width={36}
                height={36}
                className="h-9 w-9"
              /> */}
              <div className="text-white flex flex-col sm:-space-y-1 ml-4">
                <p className="font-semibold">{data.sections.four.pill_text1}</p>
                <p className="tracking-wider" style={{ lineHeight: "1" }}>
                  {data.sections.four.pill_text2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoSection;