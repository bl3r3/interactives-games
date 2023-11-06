import { Link } from "react-router-dom";

export const MainView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      Juegos:
      <Link to="ruleta">Ruleta</Link>
      <Link to="rompecabezas">Rompecabezas</Link>
    </div>
  );
};
