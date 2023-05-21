import { useState } from 'react';
import '../Style/Square.css'

export default function Square({value}){
    const[mineClicked, setMineClicked] = useState("false");

    function showValue(){
        setMineClicked(true);

        if(value === "X"){
            alert("You lost");
        }

    }

    return(
        <>
            <button className="Cell" onClick={showValue}>{mineClicked === true?value:""}</button>
        </>
    );
}