import React from "react";
import data from "../../data.json";

const NineSection = () => {
  return (
    <div id="galeria">
      <div className=" grid grid-cols-8 gap-4">
        {data.sections.eleven.photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className="object-cover w-full h-full rounded-custom"
          />
        ))}
      </div>
      <h2 className="subtitle title-gradient mb-[70px] text-center mt-9">
        {data.sections.eleven.title}
      </h2>
    </div>

  );
};

export default NineSection;