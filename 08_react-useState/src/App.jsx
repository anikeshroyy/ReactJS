import { useState } from "react";
import Button from "./components/Button";
import { Counter } from "./components/Counter";

export const App = () => {
  const btn = [
    {
      incrBtn: "Increase",
      decrBtn: "Decrease",
      jump: "Jump By 5",
    },
  ];

  const [num, setNum] = useState(10);

  return (
    <div className=" flex flex-col gap-20 justify-center items-center mt-20">
      <Counter count={num} />

      {/* <h1 className="text-amber-50">{num}</h1> */}
      <div className=" flex gap-4 justify-center items-center">
        <Button
          text={btn[0].incrBtn}
          onclick={() => {
            setNum(num + 1);
          }}
        />
        <Button
          text={btn[0].decrBtn}
          onclick={() => {
            setNum(num - 1);
          }}
        />
        <Button
          text={btn[0].jump}
          onclick={() => {
            setNum(num + 5);
          }}
        />
      </div>
    </div>
  );
};
