// import { useState } from 'react'
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Genarator from "./components/Genarator";

function App() {
  let [length, setLength] = useState(8);
  let [isNumber, setIsNumber] = useState(false);
  let [isSpecialChar, setIsSpecialChar] = useState(false);
  let [password, setPassword] = useState("");
  let [btnText, setBtnText] = useState("Copy");
  // const btn = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "1234567890";
    if (isSpecialChar) str += "=+-_)(*&^%$#@!`~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumber, isSpecialChar, setPassword]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText("Copy");
    }, 2000);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isSpecialChar, passwordGenerator]);

  return (
    <div className="bg-black text-white w-full h-screen pt-8">
      <h1 className="kode-mono-500 text-center text-4xl h-auto">
        Password Generator
      </h1>
      <div className="flex justify-center w-full py-[100px] items-center">
        <Genarator
          length={length}
          setLength={setLength}
          isNumber={isNumber}
          setIsNumber={setIsNumber}
          isSpecialChar={isSpecialChar}
          setIsSpecialChar={setIsSpecialChar}
          password={password}
          copyPassword={copyPassword}
          btnText={btnText}
        />
      </div>
    </div>
  );
}

export default App;
