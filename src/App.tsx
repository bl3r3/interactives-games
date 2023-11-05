import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import Confetti from "react-confetti";
import "./App.css";

const data = [
  {
    option: "Golfiado",
    style: { backgroundColor: "green", textColor: "black" },
    id: 1,
  },
  { option: "Lapizero", style: { backgroundColor: "grey" }, id: 2 },
  { option: "Taza", id: 3 },
  { option: "Caramelos", id: 4 },
];

const randomValue = (): number => {
  return Math.floor(Math.random() * data.length);
};

function App() {
  const [start, setStart] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [random, setRandom] = useState(1);
  // const { width, height } = useWindowSize();

  useEffect(() => {
    setStart(false);
  }, []);

  return (
    <main className="container">
      <div>
        <h1>Te has ganado:{confetti ? data[random].option : ""}</h1>
      </div>

      <Wheel
        mustStartSpinning={start}
        prizeNumber={random}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => {
          setStart(false);
          setConfetti(true);
        }}
      />

      <Confetti
        width={1440}
        height={1280}
        run={!start}
        style={{ visibility: !confetti ? "hidden" : "visible" }}
      />

      <button
        onClick={() => {
          setStart(true);
          setConfetti(false);
          setRandom(randomValue());
        }}
      >
        START SPIN
      </button>
    </main>
  );
}

export default App;
