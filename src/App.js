import "./App.css";
import Board from "./component/Board";
import { useState } from "react";
import Scoreboard from "./component/Scoreboard";
import { Button } from "@mui/material";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [boardsigns, setboardsigns] = useState(Array(9).fill(null));
  const [Xplaying, setXplaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameover, setgameover] = useState(false);

  const handleboxclick = (idx) => {
    const updatedboard = boardsigns.map((value, index) => {
      if (index === idx) {
        return Xplaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    // console.log(boardsigns);
    // console.log(updatedboard);

    const winner = checkWinner(updatedboard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    console.log(scores);
    setboardsigns(updatedboard);
    setXplaying(!Xplaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        setgameover(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setgameover(false);
    setboardsigns(Array(9).fill(null));
  };

  return (
    <div className="App">
      
      <Scoreboard scores={scores} Xplaying={Xplaying} />
      <Board
        boardsigns={boardsigns}
        onclick={gameover ? resetBoard : handleboxclick}
      />
      <Button variant="contained" onClick={resetBoard} sx={{mt:5}} >RESET GAME</Button>
    </div>
  );
}

export default App;
