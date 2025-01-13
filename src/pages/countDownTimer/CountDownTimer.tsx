import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState<number>(0); // Countdown time in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    let intervalId: number | NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        if(time>0){
        setTime((prevTime) => prevTime - 1);
        }else{
          setTime(0);
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning,time]);

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const setTimer = () => {
    const seconds = parseInt(userInput);
    if (!isNaN(seconds) && seconds > 0) {
      setTime(seconds);
    }
    setUserInput("");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <div style={{ fontSize: "2rem", margin: "20px" }}>{formatTime(time)}</div>
      <div>
        <button onClick={startTimer} disabled={isRunning || time <= 0}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter time in seconds"
        />
        <button onClick={setTimer}>Set Timer</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
