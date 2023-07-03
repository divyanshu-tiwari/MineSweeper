import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function PlayerName({setBoard}) {

    return (
        <>
            <form>
            <div class="form-group">
                <label for="name">Enter Detail</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>{setBoard()}}>Play</button>
            </form>
            {/* <form>
                <table>
                    <tr>
                        <td colSpan="2">Enter Details</td>
                    </tr>
                    <tr>
                        <td>
                            <label for="name">Enter Name</label>
                        </td>
                        <td>
                            <input type="text" id="name" name="name"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" id="submit" onClick={()=>{setBoard()}}>Play!</button>
                        </td>
                    </tr>
                </table>
            </form> */}
        </>

    );
}