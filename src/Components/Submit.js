import React from "react";

export default function Submit(props) {
  return (
    <button onClick={props.data} className="finish btn">
      Finish section
    </button>
  );
}
