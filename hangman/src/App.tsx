import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWords from "./HangmanWords";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLatter, setGuessedLetter] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Loss Win</div>
      <HangmanDrawing />
      <HangmanWords />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
