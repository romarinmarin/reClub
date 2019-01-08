import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ url, width,height, isLinked, linkedTo }) => {
  let html = (
    <div className="img_cover" style={{ backgroundImage: `url(${url})`, height: `${height}`, width: `${width}`}} />
  );

  if (isLinked) {
    return (
      <Link className="link_logo" to={linkedTo}>
        {html}
      </Link>
    );
  }

  return <div>{html}</div>;
};

export default Icon;
