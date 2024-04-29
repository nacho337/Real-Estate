import React from "react";
import data from "../../data.json";

const OneSection = () => {
  return (
    <div id="galeria">
      <h2 className="subtitle title-gradient mb-[70px]">
        {data.sections.three.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 mt-8">
        {data.sections.three.photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className="object-cover w-full h-full rounded-custom"
          />
        ))}
      </div>
    </div>
  );
};

export default OneSection;