import Square from './Square';

import { useState } from 'react';

export default function MineBoard() {
    
    const[mines, setMines] = useState(generateMines());
   
    function generateMines(){
        var mineField = Array(64).fill(0)
        var mineCount = 0;
        while(mineCount < 10){
            var index = parseInt(Math.random() * 100);
            console.log("index " + index);

            if(index < 0)
                index = 0;
            else if(index > 63)
                index = 63;
            console.log("index before placing mine " + index);
            if(mineField[index] !== "X"){
                mineField[index] = "X"
                mineCount++;
            }
        }
        return mineField;
    }


    return (
        <>
            <div className='minesRow'>
                <Square value={mines[0]}></Square>
                <Square value={mines[1]}></Square>
                <Square value={mines[2]}></Square>
                <Square value={mines[3]}></Square>
                <Square value={mines[4]}></Square>
                <Square value={mines[5]}></Square>
                <Square value={mines[6]}></Square>
                <Square value={mines[7]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[8]}></Square>
                <Square value={mines[9]}></Square>
                <Square value={mines[10]}></Square>
                <Square value={mines[11]}></Square>
                <Square value={mines[12]}></Square>
                <Square value={mines[13]}></Square>
                <Square value={mines[14]}></Square>
                <Square value={mines[15]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[16]}></Square>
                <Square value={mines[17]}></Square>
                <Square value={mines[18]}></Square>
                <Square value={mines[19]}></Square>
                <Square value={mines[20]}></Square>
                <Square value={mines[21]}></Square>
                <Square value={mines[22]}></Square>
                <Square value={mines[23]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[24]}></Square>
                <Square value={mines[25]}></Square>
                <Square value={mines[26]}></Square>
                <Square value={mines[27]}></Square>
                <Square value={mines[28]}></Square>
                <Square value={mines[29]}></Square>
                <Square value={mines[30]}></Square>
                <Square value={mines[31]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[32]}></Square>
                <Square value={mines[33]}></Square>
                <Square value={mines[34]}></Square>
                <Square value={mines[35]}></Square>
                <Square value={mines[36]}></Square>
                <Square value={mines[37]}></Square>
                <Square value={mines[38]}></Square>
                <Square value={mines[39]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[40]}></Square>
                <Square value={mines[41]}></Square>
                <Square value={mines[42]}></Square>
                <Square value={mines[43]}></Square>
                <Square value={mines[44]}></Square>
                <Square value={mines[45]}></Square>
                <Square value={mines[46]}></Square>
                <Square value={mines[47]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[48]}></Square>
                <Square value={mines[49]}></Square>
                <Square value={mines[50]}></Square>
                <Square value={mines[51]}></Square>
                <Square value={mines[52]}></Square>
                <Square value={mines[53]}></Square>
                <Square value={mines[54]}></Square>
                <Square value={mines[55]}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[56]}></Square>
                <Square value={mines[57]}></Square>
                <Square value={mines[58]}></Square>
                <Square value={mines[59]}></Square>
                <Square value={mines[60]}></Square>
                <Square value={mines[61]}></Square>
                <Square value={mines[62]}></Square>
                <Square value={mines[63]}></Square>
            </div>
        </>
    );
}