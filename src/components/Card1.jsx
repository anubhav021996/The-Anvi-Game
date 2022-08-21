import "./Body.css";

export const Card1= ({index}) => {
    return(
        <>
            <img className="Card" src={`./photos/${index}.jpg`}></img>
        </>
    )
}