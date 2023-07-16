import '../assets/styles/Card.css'


const GameCard = (props) =>{
    return(
        <div className="Game-card" onClick={handleClick}>
            <div className ="Game-image-card">
                {props.Img==null ? <img src={profileimg} alt=""/> : <img src={props.Img} alt=""/>}
            </div>
            <div className ="Game-inside-text">
                <h2 className='fonttextsize'>{props.Title}</h2>
                <h2 className='fonttextsize2'>{props.artist_name}</h2>
            </div>
        </div>
    )
    function handleClick()
    {
        if(props.is_Artist==false)
            window.location.href = "/ShowUserProfile/"+props.Id;
        else
            window.location.href = "/ShowArtist/"+props.Id;
    }
}
export default ProfileCard;