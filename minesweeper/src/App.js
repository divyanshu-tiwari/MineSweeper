import './App.css';

import {useState} from 'react';
import MineBoard from './Components/MineBoard';
import PlayerName from './Components/PlayerName';

function App() {
  const [gameBoardVisibility, setGameBoardVisibility] = useState(false);
  const [formVisibility, setFormVisibility] = useState(true);

  function toggleGameBoardVisibility(){
    setGameBoardVisibility(!gameBoardVisibility);
  }

  function toggleFormVisibility(){
    setFormVisibility(!formVisibility);
  }

  return (
    <div className="App">
      {formVisibility === true?<PlayerName setBoard={toggleGameBoardVisibility} setForm={toggleFormVisibility}></PlayerName>:""}
      {gameBoardVisibility === true?<MineBoard></MineBoard>:""}
    </div>
  );
}

export default App;
