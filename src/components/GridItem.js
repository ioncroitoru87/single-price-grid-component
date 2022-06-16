import React from "react";

const GridItem = ({
  title,
  price,
  heading,
  paragraph,
  children,
  number,
  text,
}) => {
  return (
    <div className={`item item-${number}`}>
      <h1>{title}</h1>
      <h2>{heading}</h2>
      <p>
        <span>{price} </span>
        {text}
      </p>
      <p>{paragraph}</p>
      {children}
    </div>
  );
};

export default GridItem;
