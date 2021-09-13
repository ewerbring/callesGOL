import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Svg.css";

const color = [
  [0, "rgb(197, 0, 47)"],
  [0, "rgb(240, 68, 49)"],
  [0, "rgb(251, 182, 62)"],
  [0, "rgb(32 , 99, 76)"],
  [0, "rgb(27 , 157, 112)"],
  [0, "rgb(24 , 203, 142)"],
  [0, "rgb(11 , 23, 126)"],
  [0, "rgb(43 , 54, 245)"],
  [0, "rgb(76 , 125, 250)"],
  [0, "rgb(112, 190, 252)"],
  [0, "rgb(130, 57, 221)"],
  [0, "rgb(234, 101, 241)"],
  [0, "rgb(255, 166, 207)"],
];

const shape = [
  [0, <polygon points="128.15 0 0 256 256.3 256 128.15 0" />],
  [0, 
    <path d="M256,256h0C114.61,256,0,141.39,0,0H0C141.39,0,256,114.61,256,256Z" />,
    
  ],
  [0, 
    <path d="M0,256H0C0,114.61,114.61,0,256,0h0C256,141.39,141.39,256,0,256Z" />,

  ],
  [0, <rect width="256" height="128" />],
  [0, 
    <rect
      x="37.49"
      y="37.49"
      width="181.02"
      height="181.02"
      transform="translate(-53.02 128) rotate(-45)"
    />
  ],
  [0, <polygon points="256 256 0 256 0 0 256 256" />],
  [0, <rect width="256" height="256" />],
  [0, '<polygon points="128 256 0 256 128 0 256 0 128 256"/>'],
  [0, 
    <rect
      x="37.49"
      y="37.49"
      width="181.02"
      height="181.02"
      transform="translate(-53.02 128) rotate(-45)"
    />
  ],
  [0, <rect width="256" height="256" rx="128" />],
  [0, <polygon points="0 256 0 0 256 0 0 256" />],
  [0, <polygon points="128.15 0 0 256 256.3 256 128.15 0" />],
  [0, <polygon points="256 256 0 256 0 0 256 256" />],
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
  if(count === 16){
    console.log("time to redefine set")
    setCount(0)
    let sortedColorArray = color.sort(function(a, b) {
      return b[0] - a[0];
    });
    let sortedShapeArray = shape.sort(function(a, b) {
      return b[0] - a[0];
    });
    console.log("most popular colors: " + sortedColorArray + "and most popular shape: " + sortedShapeArray)
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
