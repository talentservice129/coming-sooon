import "./index.scss";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="App">
      <div className="glitch">
        {new Array(10).fill(0).map((_, index) => (
          <div className="line" key={index}>
            Vive la DATA révolution!
          </div>
        ))}
      </div>
      {/* <div className="glitch glitch-sm">
        {new Array(5).fill(0).map((_, index) => (
          <div className="line" key={index}> */}
      <br />
      <TypeAnimation
        sequence={[
          "Automated clean master data", // Types 'One'
          3000, // Waits 1s
          "Automated reporting", // Deletes 'One' and types 'Two'
          3000, // Waits 2s
          "Automated data feed",
          3000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "1.5rem",
          fontWeight: 300,
          color: "#fff",
        }}
      />
    </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
