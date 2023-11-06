import { useState } from "react";
import { Link } from "react-router-dom";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import Confetti from "react-confetti";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

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

function PuzzleView() {
  const [start, setStart] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [random, setRandom] = useState(1);

  const reloadWindow = () => window.location.reload();

  return (
    <main className="container">
      <Link to="/">
        <button style={{ margin: "1rem 0" }}>Back</button>
      </Link>
      <h1>Te has ganado:{confetti ? data[random].option : ""}</h1>
      <div className="container-memory">
        <JigsawPuzzle
          imageSrc="img/cover.png"
          rows={2}
          columns={2}
          onSolved={() => {
            setConfetti(true);
            setRandom(randomValue());
            setStart(true);
          }}
        />
      </div>
      <Confetti
        width={1440}
        height={1280}
        run={start}
        style={{ visibility: !confetti ? "hidden" : "visible" }}
      />

      <button style={{ marginTop: "1rem" }} onClick={reloadWindow}>
        Reset
      </button>
    </main>
  );
}

export default PuzzleView;
