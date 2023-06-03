import Square from './Square';
import React, { Component }  from 'react';
import { useState } from 'react';

export default function MineBoard({gameAction, gameStatus, changeGameStatus}) {
    
    const[mines, setMines] = useState(generateMines());

   
    function generateMines(){
        var mineField = Array(64).fill(0);
        var mineCount = 0;

        while(mineCount < 10){
            var index = parseInt(Math.random() * 100);

            if(index < 0)
                index = 0;
            else if(index > 63)
                index = index%63;

            if(mineField[index] !== "X"){
                mineField[index] = "X"
                console.log("bomb place at " + index);
                mineCount++;
                
                var row = parseInt(index/8);
                var col = parseInt(index%8);

                
                if((col+1)<8 && mineField[(row*8) + (col+1)] !== "X")
                    mineField[(row*8) + (col+1)]++;
                if((col-1)> -1 && mineField[(row*8) + (col-1)] !== "X")
                    mineField[(row*8) + (col-1)]++;

                if((row+1)*8 < 64){
                    if((col+1)<8 && mineField[(row+1)*8 + (col+1)] !== "X")
                    mineField[(row+1)*8 + (col+1)]++;
                    if(mineField[(row+1)*8 + (col)] !== "X")
                        mineField[(row+1)*8 + (col)]++;
                    if((col-1)> -1 && mineField[(row+1)*8 + (col-1)] !== "X")
                        mineField[(row+1)*8 + (col-1)]++;
                }
                
                if((row-1)*8 > -1){
                    if((col+1)<8 && mineField[(row-1)*8 + (col+1)] !== "X")
                        mineField[(row-1)*8 + (col+1)]++;
                    if(mineField[(row-1)*8 + (col)] !== "X")
                        mineField[(row-1)*8 + (col)]++;
                    if((col-1)> -1 && mineField[(row-1)*8 + (col-1)] !== "X")
                        mineField[(row-1)*8 + (col-1)]++;
                }
                
            
            }
        }
        return mineField;
    }


    return (
        <>
            <div className='minesRow'>
                <Square value={mines[0]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[1]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[2]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[3]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[4]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[5]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[6]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[7]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[8]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[9]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[10]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[11]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[12]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[13]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[14]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[15]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[16]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[17]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[18]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[19]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[20]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[21]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[22]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[23]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[24]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[25]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[26]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[27]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[28]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[29]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[30]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[31]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[32]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[33]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[34]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[35]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[36]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[37]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[38]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[39]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[40]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[41]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[42]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[43]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[44]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[45]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[46]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[47]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[48]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[49]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[50]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[51]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[52]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[53]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[54]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[55]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
            <div className='minesRow'>
                <Square value={mines[56]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[57]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[58]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[59]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[60]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[61]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[62]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
                <Square value={mines[63]} endGame={gameAction} getGameStatus={gameStatus} updateGameStatus={changeGameStatus}></Square>
            </div>
        </>
    );
}
