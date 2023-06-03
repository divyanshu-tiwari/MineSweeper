import './App.css';
import React, { Component }  from 'react';
import {useState} from 'react';
import MineBoard from './Components/MineBoard';
import PlayerName from './Components/PlayerName';

function App() {
  const [gameBoardVisibility, setGameBoardVisibility] = useState(false);
  const [formVisibility, setFormVisibility] = useState(true);

  function beginGame(){
    setGameBoardVisibility(true);
    setFormVisibility(false);
  }

  function endGame(){
    setGameBoardVisibility(false);
    setFormVisibility(true);
  }
  
  function toggleGameBoardVisibility(){
    setGameBoardVisibility(!gameBoardVisibility);
  }

  function toggleFormVisibility(){
    setFormVisibility(!formVisibility);
  }

  return (
    <div className="App">
      {formVisibility === true?<PlayerName setBoard={beginGame}></PlayerName>:""}
      {gameBoardVisibility === true?<MineBoard gameAction={endGame}></MineBoard>:""}
    </div>
  );
}

export default App;
