import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count >= 0 && count < 5) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const Star = () => {
    return Array.from({ length: count }, () => {
      return (
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src="https://e7.pngegg.com/pngimages/300/346/png-clipart-star-star.png"
        ></img>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://www.pngkey.com/png/detail/226-2263057_uniforme-nautical-star-vector.png"
          alt="logo"
        ></img>
        React Counter
        <div>Menu</div>
      </header>

      <div className="Main-Container">
        <div className="Counter-Container">
          <button id="Subtract" onClick={subtract}>
            {" "}
            -{" "}
          </button>

          <div className="Counter"> {count} </div>

          <button id="Add" onClick={add}>
            {" "}
            +{" "}
          </button>
        </div>

        <div className="star">
          <Star />
        </div>
      </div>
    </div>
  );
}

export default App;
