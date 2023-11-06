import { Routes, Route } from "react-router-dom";
import "./App.css";
import WheelView from "./views/WheelView";
import PuzzleView from "./views/PuzzleView";
import { MainView } from "./views/MainView";

function App() {
  // return <WheelView />;
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="ruleta" element={<WheelView />} />
      <Route path="rompecabezas" element={<PuzzleView />} />
    </Routes>
  );
}

export default App;
