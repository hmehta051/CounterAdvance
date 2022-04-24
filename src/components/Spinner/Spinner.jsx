import React from "react";
import "./spinner.css";
function Spinner({ visibility }) {
  return (
    <div
      className='up'
      style={{ visibility: visibility ? "visible" : "hidden" }}
    >
      <div className='my'>
        <div className='my-ring'></div>
        <div className='my-ring'></div>
        <div className='my-ring'></div>
        <div className='my-ring'></div>
        <div className='my-ring'></div>
        <div className='my-ring'></div>
      </div>
      Saving counter value
    </div>
  );
}

export default Spinner;
