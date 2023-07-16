import '../assets/styles/HomeCard.scss'
import gameimage from '../assets/images/gameimage.jpg';


const HomeCard = (props) =>{
    return(
        <div className="Game-card" onClick={handleClick}>
            <div className ="Game-image-card">
                {props.Img==null ? <img src={gameimage} alt=""/> : <img src={props.Img} alt=""/>}
            </div>
            <div className ="Game-inside-text">
                <h2 className='fonttextsize'>{props.Title}</h2>
            </div>
        </div>
    )
    function handleClick()
    {
        // window.location.href = "/randomgame";
    }
}
export default HomeCard;