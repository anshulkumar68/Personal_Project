import React from 'react'

const InputTimer = ({invalid, handleInput, handleStart}) => {

  return (
    <div>
      <span className="flex text-[#000000] justify-center text-[20px] font-bold my-5 ">
        {invalid}
      </span>
      <p className="flex gap-16 justify-center py-4">
        <input
          //   type="text"
          onChange={handleInput}
          id="hours"
          placeholder="HH"
          className="outline-none w-[50px] h-[50px] text-[20px] text-center"
        />
        <input
          //   type="text"
          onChange={handleInput}
          id="minutes"
          placeholder="MM"
          className="outline-none w-[50px] h-[50px] text-[20px] text-center"
        />
        <input
          //   type="text"
          onChange={handleInput}
          id="seconds"
          placeholder="SS"
          className="outline-none w-[50px] h-[50px] text-[20px] text-center"
        />
      </p>
      <p className="flex justify-center gap-16 py-4">
        <button
          className="rounded-full bg-[green] px-7 py-[6px] font-semibold text-white hover:scale-90 duration-150"
          onClick={() => handleStart()}
        >
          Start
        </button>
      </p>
    </div>
  );
}

export default InputTimer