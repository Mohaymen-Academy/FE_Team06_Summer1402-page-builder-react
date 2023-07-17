import HomeCard from "./HomeCard.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function CardContainer({games,choosenCard}) {



  return (
      <div className="Container-cards">
        {games.map((game) => (
          <HomeCard key={game.id} id={game.id} Title={game.title}  Img={game.image} choosenCard={choosenCard} />
        ))}
      </div>
  );
}

export default CardContainer;