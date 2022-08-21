import "./Body.css";

export const Card2= ({index}) => {
    return(
        <>
            <img className="Card" src={`./photos/${index+1}.jpg`}></img>
        </>
    )
}