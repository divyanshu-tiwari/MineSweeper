import React, { Component }  from 'react';
import { useState } from 'react';
import '../Style/Square.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Square({value, endGame, getGameStatus, updateGameStatus}){
    const[mineClicked, setMineClicked] = useState("false");

    function showValue(){
        setMineClicked(true);

        if(value === "X"){
            alert("You lost");
            endGame();
        } else {
            updateGameStatus(getGameStatus-1);
            if(getGameStatus === 0){
                alert("you won");
                endGame();
            }
        }

    }

    return(
        <>
            <button className="Cell btn-secondary" onClick={()=>{showValue()}}>{mineClicked === true?value:""}</button>
        </>
    );
}