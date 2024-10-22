import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const seconds = date.getSeconds() === 0 ? 60 : date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hours = date.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  return (
    <Wrapper>
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hoursDegrees}deg)` }}
          />
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minutesDegrees}deg)` }}
          />
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondsDegrees}deg)` }}
          />
          <div className="number number1">0</div>
          <div className="number number2">2</div>
          <div className="number number3">3</div>
          <div className="number number4">4</div>
          <div className="number number5">5</div>
          <div className="number number6">6</div>
          <div className="number number7">7</div>
          <div className="number number8">8</div>
          <div className="number number9">9</div>
          <div className="number number10">10</div>
          <div className="number number11">11</div>
          <div className="number number12">12</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
    margin: 0;
    font-family: Arial, sans-serif;
  }

  .clock {
    top: 0;
    right: 0;
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px solid #333;
    border-radius: 50%;
    position: relative;
    transform: scale(59%);
  }

  .clock-face {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateY(-3px); /* Adjust for center alignment */
  }

  .hand {
    width: 50%;
    height: 6px;
    background: #333;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  }

  .hour-hand {
    height: 8px;
    background: #000;
  }

  .minute-hand {
    height: 6px;
  }

  .second-hand {
    height: 4px;
    background: red;
  }

  .number {
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 25px;
    font-weight: bold;
    color: #333;
    transform: translate(-50%, -50%);
  }

  .number1 {
    top: 12.5%;
    left: 72%;
  }
  .number2 {
    top: 28.5%;
    left: 87.5%;
  }
  .number3 {
    top: 50.5%;
    left: 95%;
  }
  .number4 {
    top: 72.5%;
    left: 87.5%;
  }
  .number5 {
    top: 88%;
    left: 71.5%;
  }
  .number6 {
    top: 92.5%;
    left: 50%;
  }
  .number7 {
    top: 87.5%;
    left: 29%;
  }
  .number8 {
    top: 72.5%;
    left: 12.5%;
  }
  .number9 {
    top: 50.5%;
    left: 5%;
  }
  .number10 {
    top: 29%;
    left: 12.5%;
  }
  .number11 {
    top: 12.5%;
    left: 28.5%;
  }
  .number12 {
    top: 7.5%;
    left: 50%;
  }
`;

export default Clock;
