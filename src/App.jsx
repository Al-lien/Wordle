import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import "./App.css";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // randon int between 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, []);

  return (
    <>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </>
  );
}

export default App;
