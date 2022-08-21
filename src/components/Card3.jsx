import "./Body.css";

export const Card3= ({index}) => {
    return(
        <>
            <img className="Card" src={`./photos/${index+2}.jpg`}></img>
        </>
    )
}