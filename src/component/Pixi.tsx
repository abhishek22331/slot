"use client";
import React, { useState } from "react";
import { SlotMachine } from "react-random-slot-machine";
import Swal from "sweetalert2";

const feelingArr = [
  {
    id: 0,
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjHaDy5NbsvuCIT370cR0y6PEUxJEQFK_hSKoel0vWQ&s"
        alt="image"
      />
    ),
    name: "1",
    value: "1",
  },
  {
    id: 1,
    img: (
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/21/63/cute-number-two-with-stars-pattern-vector-24612163.jpg"
        alt="image"
      />
    ),
    name: "2",
    value: "2",
  },
  {
    id: 2,
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnxZ_X4HTyNbDNniCfqZslayxEMmuXrVrHDKF5NUGLw&s"
        alt="image"
      />
    ),
    name: "3",
    value: "3",
  },
];
const secondList = [
  {
    id: 0,
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnxZ_X4HTyNbDNniCfqZslayxEMmuXrVrHDKF5NUGLw&s"
        alt="image"
      />
    ),
    name: "3",
    value: "3",
  },
  {
    id: 1,
    img: (
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/21/63/cute-number-two-with-stars-pattern-vector-24612163.jpg"
        alt="image"
      />
    ),
    name: "2",
    value: "2",
  },
  {
    id: 0,
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjHaDy5NbsvuCIT370cR0y6PEUxJEQFK_hSKoel0vWQ&s"
        alt="image"
      />
    ),
    name: "1",
    value: "1",
  },
];
const thirdList = [
  {
    id: 0,
    img: (
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/21/63/cute-number-two-with-stars-pattern-vector-24612163.jpg"
        alt="image"
      />
    ),
    name: "2",
    value: "2",
  },
  {
    id: 1,
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnxZ_X4HTyNbDNniCfqZslayxEMmuXrVrHDKF5NUGLw&s"
        alt="image"
      />
    ),
    name: "3",
    value: "3",
  },
  {
    id: 2,
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjHaDy5NbsvuCIT370cR0y6PEUxJEQFK_hSKoel0vWQ&s"
        alt="image"
      />
    ),
    name: "1",
    value: "1",
  },
];
const Pixi = () => {
  const [count, setCount] = useState(100);
  const [win, setWin] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [clicked,setClicked]=useState(false)
  const result = (resultArr: any) => {
    console.log(
      parseInt(resultArr[0]),
      "pppp",
      parseInt(resultArr[1]),
      parseInt(resultArr[2])
    );
    if (parseInt(resultArr[0]) >= 0) {
      if (resultArr[0] === resultArr[1] && resultArr[1] === resultArr[2]) {
        console.log("win");
        setCount(count + 5);
        setWin(win + 5);
        Swal.fire({
          title: "Good job!",
          text: "You won",
          icon: "success",
        });
        setClicked(false)

        return;
      } else {
        setCount(count - 5);
        // setWin(win - 5);
        console.log("lose");
        Swal.fire({
          title: "Oops...",
          text: "You lost, keep trying",
          icon: "error",
        });
        setClicked(false)
        setButtonDisabled(count-5<=0 ?true:false);
        return;
      }
    }
  };
  const temp=()=>{

  }
  const handleButtonClick = () => {
    setClicked(true)
  };

  return (
    <div className="outer_slot">
    <div className="slot">
    

        Total: {count}<br/> Win: {win}
        <h2>
        {buttonDisabled && "Please refresh to continue"}
        </h2>
     
        
        <div
          id="random-button"
          style={{
            pointerEvents: buttonDisabled ? "none" : "auto",
            opacity: buttonDisabled ? 0.5 : 1,
          }}
          onClick={handleButtonClick}
        >
          <SlotMachine
            firstList={feelingArr}
            secondList={secondList}
            thirdList={thirdList}
            resultToParams={clicked ?result:temp}
          />
        </div>
      </div>
    </div>
  );
};

export default Pixi;
