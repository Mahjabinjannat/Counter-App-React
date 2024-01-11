import { useEffect, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("I’m from a different planet");
  }, []);

  useEffect(() => {
    // if (count == 10) setMessage("Maximum limit reached");
    // if (count == 0) setMessage("Minimum limit reached");
    if (count % 2 == 1) setMessage("Counter is Odd");
    else if (count % 2 == 0) setMessage("Counter is Even");
  }, [count]);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "25px",
          color: "purple",
        }}
      >
        Count: {count}
      </p>
      <button
        style={{
          height: "40px",
          width: "100px",
          margin: "5px",
          background: "transparent",
          cursor: "pointer",
          color: "blue",
          border: "2px solid blue",
          fontSize: "15px",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => {
          if (count < 10) setCount(count + 1);
          else {
            //setCount(10);
            setMessage("Maximum limit reached");
          }
          // if (count < 10) {
          //   setCount(count + 1);
          //   if (count % 2 === 0) setMessage("The numner is odd");
          //   if (count % 2 == 1) setMessage("The number is even");

          // }

          // if (count >= 10) {
          //   setCount(10);
          //   setMessage("You Have reached maximum limit");
          // }
          // setCount((prevState) => {
          //   return prevState % 2 == 1 ? prevState + 5 : prevState + 7;
          // });
          // else if (count % 2 == 0) setCount((prevState) => prevState + 7);
        }}
      >
        Increment
      </button>
      <button
        style={{
          height: "40px",
          width: "100px",
          margin: "5px",
          background: "transparent",
          cursor: "pointer",
          color: "blue",
          border: "2px solid blue",
          fontSize: "15px",
          padding: "10px",
          fontSize: "15px",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => {
          if (count > 0) setCount(count - 1);
          else {
            //setCount(10);
            setMessage("Minimum limit reached");
          }
          // if (count > 0) {
          //   setCount(count - 1);
          // }
          // if (count % 2 === 0) setMessage("The numner is odd");
          // if (count % 2 == 1) setMessage("The number is even");
          // if (count <= 0) {
          //   setCount(0);
          //   setMessage("You Have reached minimum limit");
          // }
        }}
      >
        Decrement
      </button>
      <button
        style={{
          height: "40px",
          width: "100px",
          margin: "5px",
          background: "transparent",
          cursor: "pointer",
          color: "blue",
          border: "2px solid blue",
          fontSize: "15px",
          padding: "10px",
          fontSize: "15px",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => setCount(1)}
      >
        Reset
      </button>
      <p>Message: {message}</p>
    </div>
  );
}

export default Counter;
