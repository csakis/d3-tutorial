import React from 'react';

const Person = ({x, y, infected, dead, recovered}) => {
let strokeColor = "rgb(146,120, 226)";
let fillColor= "white";
if (infected) {
  strokeColor = "rgb(246,102,64)";
  fillColor = "rgb(246,102,64)";
}
else if (dead) {
  strokeColor = "rgba(0, 0, 0, .5)"
}
else if (recovered) {
  strokeColor = "rgb(146, 119, 227)"
}
return <circle cx={x} cy={y} r="5" style={{fill: fillColor , stroke: strokeColor, strokeWidth: 2}}>=></circle>;
};
function App() {
  return (
    <div >
      <h1>Visualizing the spread of virus</h1>
     <svg
     style={{
       width: "100vw",
       height: "100vh",
       border: "1px solid red"
     }}>
       <Person x={100} y={100} dead/>
     </svg>
    </div>
  );
}

export default App;
