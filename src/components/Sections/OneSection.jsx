import React from "react";
import data from "../../data.json";

const OneSection = () => {
  return (
    <div id="team">
      <div className="flex w-full h-auto md:w-auto lg:w-auto xl:w-auto mt-8 w-16 h-16 ">
        {data.sections.three.photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className="object-cover w-full h-full rounded-custom w-48"
          />
        ))}
      </div>
      <h2 className="subtitle title-gradient mb-[70px] text-center mt-9">
        {data.sections.three.title}
      </h2>
    </div>

  );
};

export default OneSection;