import React from "react";
import data from "../../data.json";

const OneSection = () => {
  return (
    <div id="team">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 mt-8">
        {data.sections.three.photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className="object-cover w-full h-full rounded-custom"
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