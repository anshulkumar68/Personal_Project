import React from "react";

const ShowTimer = (props) => {
  const {
    mssg,
    hours,
    minutes,
    seconds,
    isPaused,
    handlePause,
    handleReset,
    handleResume,
  } = props;
  return (
    <div>
      <span className="flex text-[#000000] justify-center text-[20px] font-bold ">{mssg}</span>
      <p className="flex gap-4 justify-center py-4 text-white text-[55px] font-semibold">
        <span>{hours < 10 ? `0${hours}` : hours}</span>
        <span>:</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </p>
      <p className="flex justify-center gap-12 py-4">
        {isPaused && (
          <button
            className="rounded-full bg-[#32CD32] px-7 py-[6px] font-semibold"
            onClick={handleResume}
          >
            Resume
          </button>
        )}
        {!isPaused && (
          <button
            className="rounded-full bg-[orange] px-7 py-[6px] font-semibold text-white hover:scale-90 duration-150"
            onClick={handlePause}
          >
            Pause
          </button>
        )}
        <button
          className="rounded-full bg-[red] px-7 py-[6px] font-semibold text-white hover:scale-90 duration-150"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </p>
    </div>
  );
};

export default ShowTimer;
