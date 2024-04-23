import React from "react";
import data from "../../data.json";

function FourSection() {
  return (
    <div
      className="w-full h-full p-8 py-20 sm:py-32"
      style={{
        backgroundImage: `url(${data.sections.backgrounds[1]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
<img
src={data.sections.six.image1}
alt={data.sections.six.alt1}
className="sm:w-full px-4 sm:px-0 object-cover object-center mx-auto col-span-2 sm:col-span-1"
/>
</div>
      <div className="sm:grid sm:grid-cols-2 gap-6">
        <p className="text-green col-span-2 text-2xl w-full lg:w-1/2 py-6">
          {data.sections.six.title}
        </p>
        <div className="flex items-center sm:items-end gap-6 sm:gap-3 py-6 justify-center">
          <p className="text-green text-7xl">01.</p>
          <div className="flex flex-col gap-4">
            <p className="text-green text-xl">{data.sections.six.subtitle1}</p>
            <p className="text-green text-md">
              {data.sections.six.description}
            </p>
          </div>
        </div>
        <div className="flex items-center sm:items-end gap-3 py-6 justify-center">
          <p className="text-green text-7xl">02.</p>
          <div className="flex flex-col gap-4">
            <p className="text-green text-xl">{data.sections.six.subtitle2}</p>
            <p className="text-green text-md">
              {data.sections.six.description}

            
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourSection;
