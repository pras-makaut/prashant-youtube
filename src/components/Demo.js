import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/constants";

const Demo = () => {
  const [text, setText] = useState(0);
  const [toggle, setToggle] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={
        "h-96 w-96 p-2 m-2 border border-black " +
        (toggle && "bg-gray-900 text-white")
      }
    >
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <input
        className={"border border-black w-72 p-2" + (toggle && "text-white")}
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h1 className={"font-bold text-lg" + (toggle && "text-black")}>
        {prime}
      </h1>
    </div>
  );
};

export default Demo;
