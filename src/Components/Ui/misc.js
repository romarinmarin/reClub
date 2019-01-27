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

export const firebaseLooper = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push(childSnapshot.val());
  });
  return data;
};

export const reverser = arr => {
  let newArr = [];
  for (let i = arr.length - 1; i > 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
