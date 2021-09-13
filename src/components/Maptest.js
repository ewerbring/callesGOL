import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Svg.css";

const color = [
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
];

const shape = [
  [0, <polygon points="128.15 0 0 256 256.3 256 128.15 0" />, "number: 1"],
  [0, 
    <path d="M256,256h0C114.61,256,0,141.39,0,0H0C141.39,0,256,114.61,256,256Z" />,
    , "number: 2"
  ],
  [0, 
    <path d="M0,256H0C0,114.61,114.61,0,256,0h0C256,141.39,141.39,256,0,256Z" />,
, "number: 3"
  ],
  [0, <rect width="256" height="128" />, "number: 4"],
  [0, 
    <rect
      x="37.49"
      y="37.49"
      width="181.02"
      height="181.02"
      transform="translate(-53.02 128) rotate(-45)"
    />, "number: 5"
  ],
  [0, <polygon points="256 256 0 256 0 0 256 256" />, "number: 6"],
  [0, <rect width="256" height="256" />, "number: 7"],
  [0, '<polygon points="128 256 0 256 128 0 256 0 128 256"/>', "number: 8"],
  [0, 
    <rect
      x="37.49"
      y="37.49"
      width="181.02"
      height="181.02"
      transform="translate(-53.02 128) rotate(-45)"
    />, "number: 9"
  ],
  [0, <rect width="256" height="256" rx="128" />, "number: 10"],
  [0, <polygon points="0 256 0 0 256 0 0 256" />, "number: 11"],
  [0, <polygon points="128.15 0 0 256 256.3 256 128.15 0" />, "number: 12"],
  [0, <polygon points="256 256 0 256 0 0 256 256" />, "number: 13"],
];


export default function Maptest() {
  //make 16 sets
  //make 32 shapes in each map
  //make

  let [count, setCount] = useState(0);

  useEffect(() => {
    countAdd();
  }, [count]);

const countAdd = () =>{
  // console.log("hook is setting count to " +count)
  console.log(count)
  if(count % 32 ===0){
    console.log("time to redefine set")
    setCount(0)
    let sortedColorArray = color.sort(function(a, b) {
      return b[0] - a[0];
    });

    console.log("most popular colors: " + sortedColorArray[0][2] + " with "+ sortedColorArray[0][0] + "points" )
  }else if(count % 16 ===0 ) {
    console.log("only 16")
  let sortedShapeArray = shape.sort(function(a, b) {
    return b[0] - a[0];
  });
  console.log("most popular shape: " + sortedShapeArray[0][2] + "with " + sortedShapeArray[0][0] + "points" )

}
  

}

 
  const handleClick = (thisIsNumber) => {
    // svgToUse = color.first.shape;
    color[thisIsNumber][0]+=1;
    shape[thisIsNumber][0]+=1;
    
    console.log("shape number: " + thisIsNumber + ", color score: " + color[thisIsNumber][0] + ", shape score: " + shape[thisIsNumber][0]);
    setCount(count+=1)

  };

  return (
    <div>
      

      {shape.map((eachShape, indexOf) => {
        return (
          <svg onClick={()=>handleClick(indexOf)} fill={color[indexOf][1]}>
            {eachShape[1]}
          </svg>
        );
      })}
      <svg>
        <rect width="256" height="256" rx="128" />
      </svg>
    </div>
  );
}
