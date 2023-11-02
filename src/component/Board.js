import React from "react";
import Cell from "./Cell";
import { Card } from "@mui/material";

function Board({ boardsigns, onclick }) {
  //   const boardsigns = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];

  return (
    <Card sx={{p:5, m:5}} elevation={6} >
      <div className="board">
        {boardsigns.map((sign, idx) => {
          return (
            <Cell
              sign={sign}
              onClick={() => sign === null && onclick(idx)}
              key={idx}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default Board;
