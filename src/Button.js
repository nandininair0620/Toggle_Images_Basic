import React from "react";
const on = require("./on.PNG");
const off = require("./off.PNG");
export function Button() {
  let [item, setItem] = React.useState(0);
  const images = [on, off];
  const update = () => {
    setItem((item + 1) % 2);
  };
  return (
    <div>
      <img src={images[item]} alt="" />
      <button onClick={update}>Switch</button>
    </div>
  );
}
