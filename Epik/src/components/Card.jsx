import '../assets/styles/Card.scss'
import gameimage from '../assets/images/gameimage.jpg';


const GameCard = (props) =>{
    return(
        <div className="Game-card" onClick={handleClick}>
            <div className ="Game-image-card">
                {props.Img==null ? <img src={gameimage} alt=""/> : <img src={props.Img} alt=""/>}
            </div>
            <div className ="Game-inside-text">
                <h2 className='fonttextsize'>{props.Title}</h2>
                <h2 className='fonttextsize'>{props.Cost}</h2>
            </div>
        </div>
    )
    function handleClick()
    {
        window.location.href = "/randomgame";
    }
}
export default GameCard;