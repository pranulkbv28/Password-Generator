import React from "react";
// import '../App.css'

function Genarator({
  length,
  setLength,
  isNumber,
  setIsNumber,
  isSpecialChar,
  setIsSpecialChar,
  password,
  copyPassword,
  btnText,
}) {
  return (
    <div className="w-3/5 mx-auto border-none p-4 rounded-lg bg-gray-800">
      <div className="w-full flex gap-1 justify-center mt-5">
        <input
          type="text"
          className="w-3/5 rounded-l-lg p-3 focus:outline-none text-black bg-white"
          value={password}
          readOnly
          placeholder="Password"
        />
        <button
          onClick={copyPassword}
          className="outline-none text-white bg-gray-800 hover:bg-black hover:text-white duration-200 ease-in-out px-3 py-2 rounded-r-lg"
        >
          {btnText}
        </button>
      </div>
      <div className="w-full flex gap-5 mt-14 px-8 justify-center items-center">
        <div className="flex items-center gap-2">
          <input
            type="range"
            name="length"
            min={8}
            max={100}
            id="length"
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Password Length ({length})</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            defaultChecked={isNumber}
            onChange={() => {
              setIsNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="specialChar"
            id="specialChar"
            defaultChecked={isSpecialChar}
            onChange={() => {
              setIsSpecialChar((prev) => !prev);
            }}
          />
          <label htmlFor="specialChar">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default Genarator;
