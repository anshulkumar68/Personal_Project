import "./App.css";
import { useState, useEffect } from "react";
import Title from "./components/Title";
import InputTimer from "./components/InputTimer";
import ShowTimer from "./components/ShowTimer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState("");

  //   Handle Start, reset and pause
  const handleStart = () => {
    setMessage("");
    if (hours < 0 || minutes < 0 || seconds <= 0) setInvalid("Invalid Input");
    else setIsStart(true);
  };

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") setHours(value);
    else if (id === "minutes") setMinutes(value);
    else setSeconds(value);

    setInvalid("");
  };

  const runTimer = (sec, min, hr, tid) => {
    setMessage("");
    if (sec > 60) {
      setMinutes((min) => min + 1);
      setSeconds((sec) => sec - 59);
    }
    if (min > 60) {
      setHours((hr) => hr + 1);
      setMinutes((min) => min - 60);
    }

    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      setMessage("Timer finished!");
      resetTimer();
      // handleReset();
      clearInterval(tid);
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <>
      <Title />
      {/* Input timer */}
      {!isStart && (
        <InputTimer invalid={invalid} handleStart={handleStart} handleInput={handleInput} />
      )}
      {/* After timer start */}
      {isStart && (
        <ShowTimer
          mssg={message}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isPaused={isPaused}
          handlePause={handlePause}
          handleReset={handleReset}
          handleResume={handleResume}
        />
      )}
    </>
  );
}

export default App;
