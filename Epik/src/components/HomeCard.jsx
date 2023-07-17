import '../assets/styles/HomeCard.scss'
import gameimage from '../assets/images/gameimage.jpg';

const HomeCard = (props) => {
    console.log(props.key)
    return (
        <div className={`Game-card ${props.id !=props.choosenCard ?'animation-paused':''}`} onClick={handleClick}>
            <div className="Game-image-card">
                {props.Img == null ? <img src={gameimage} alt=""

                // width={'50px'} height={'50px'}

                /> : <img src={props.Img} alt="" />}
            </div>
            <div className="Game-inside-text">
                <h2 className='fonttextsize'>{props.Title}</h2>
            </div>
        </div>
    )
    //TODO  
    function handleClick() {
    }
}
export default HomeCard;