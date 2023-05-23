export default function PlayerName({setBoard, setForm}) {

    return (
        <>
            <form>
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
                            <button type="button" id="submit" onClick={()=>{setBoard();setForm()}}>Play!</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>

    );
}