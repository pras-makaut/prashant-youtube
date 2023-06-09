import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);

  return (
    <div className="m-2 p-2 h-96 w-96 bg-slate-50 border border-black">
      <div>
        <button
          className="p-2 m-2 bg-green-50"
          onClick={() => {
            x = x + 1;
            console.log("x = " + x);
          }}
        >
          increase x
        </button>
        <span className="text-lg font-bold">value of x = {x}</span>
      </div>
      <div>
        <button
          className="p-2 m-2 bg-green-50"
          onClick={() => {
            setY(y + 1);
          }}
        >
          increase y
        </button>
        <span className="text-lg font-bold">value of y = {y}</span>
      </div>
      <div>
        <button
          className="p-2 m-2 bg-green-50"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = " + ref.current);
          }}
        >
          increase ref
        </button>
        <span className="text-lg font-bold">value of ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
