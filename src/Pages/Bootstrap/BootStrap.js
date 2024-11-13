import React, { useState } from "react";
import "./boot.css";

const BootStrap = () => {
  const [getclick, setClick] = useState(false);

  return (
    <div className="div">
      <div className="block">Hover</div>
    </div>
  );
};

export default BootStrap;

{
  /* <div className={getclick ? "sidebartoggle" : "sidebar"}>
        <button
          className={"btn btn-primary b1"}
          onClick={() => setClick(!getclick)}
        >
          toggle
        </button>
      </div> */
}
