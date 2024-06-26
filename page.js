"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const Home = () => {
  const calcInput = [
    ["C", "%", "⌫", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  const whiteColorGang = ["C", "%", "⌫"];
  const orangeColorGang = ["/", "*", "-", "+", "="];
  let [number, setNumber] = useState("");

  const generateClassName = (val) => {
    if (orangeColorGang.includes(val)) {
      return "p-2 bg-orange-400 m-2 w-18 rounded-xl";
    } else if (whiteColorGang.includes(val)) {
      return "p-2  bg-white m-2 w-18 rounded-xl";
    } else {
      return "p-2 bg-gray-400  m-2 w-18 rounded-xl";
    }
  };

  const calculate = (val) => {
    switch (val) {
      case "C":
        setNumber("");
        break;
      case "⌫":
        const removedStr = number.slice(0, -1);
        setNumber(removedStr);
        break;
      case "%":
        setNumber((eval(number) / 100).toString());
        break;
      case "=":
        setNumber(eval(number).toString());
        break;
      case ".":
        const dotCount = number.split(".").length - 1;
        if (dotCount == 0) {
          setNumber(number + val);
        }
        break;
      case "*":
      case "/":
      case "+":
        if (number) {
          debugger;
          const lastChar = number[number.length - 1];
          if (
            lastChar === val ||
            lastChar == "/" ||
            lastChar == "*" ||
            lastChar == "+"
          ) {
            const removedChar = number.slice(0, -1);
            setNumber(removedChar + val);
          } else {
            setNumber(number + val);
          }
        }
        break;
      default:
        const lastText = number[number.length - 1];
        if (lastText === val) {
          const removedChar = number.slice(0, -1);
          setNumber(removedChar + val);
        } else {
          setNumber(number + val);
        }
    }
  };

  return (
    <div className="m-12 justify-center items-center border border-black w-[30%]  bg-black rounded-lg">
      <div className="text-white border border-white m-2 p-4">{number}</div>
      {calcInput.map((item) => {
        return (
          <div className=" m-2 p-2 ">
            {item.map((val) => {
              return (
                <Button
                  onClick={() => calculate(val)}
                  className={generateClassName(val)}
                >
                  {val}
                </Button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
