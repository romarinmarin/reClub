import React from "react";
import { Link } from "react-router-dom";
export const Tag = ({
  background,
  children,
  isLinked,
  linkTo,
  fontSize,
  color,
  add
}) => {
  let innerHtml = (
    <div
      style={{
        background,
        fontSize,
        color,
        padding: "5px 10px",
        display: "inline-block",
        ...add
      }}
    >
      {children}
    </div>
  );

  if (isLinked) {
    return <Link to={linkTo}>{innerHtml}</Link>;
  } else {
    return innerHtml;
  }
};
