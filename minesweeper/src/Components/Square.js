import '../Style/Square.css'

export default function Square({value, }){

    return(
        <>
            <button className="Cell">{value}</button>
        </>
    );
}