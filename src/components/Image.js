import * as React from "react";

const Image = ({ src, className, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className={className}
      alt={alt}
    />
  );
};

export default Image;