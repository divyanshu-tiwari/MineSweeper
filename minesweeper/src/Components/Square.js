import React, { Component }  from 'react';
import { useState } from 'react';
import '../Style/Square.css'

export default function Square({value, endGame}){
    const[mineClicked, setMineClicked] = useState("false");

    function showValue(){
        setMineClicked(true);

        if(value === "X"){
            alert("You lost");
            endGame();
        }

    }

    return(
        <>
            <button className="Cell" onClick={()=>{showValue()}}>{mineClicked === true?value:""}</button>
        </>
    );
}