
import players from '../players'
import Player from './Player';
const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

  
  {players.map((el, index) => (
    // The spread operator ...player passes all the player properties as props to the Player component
    <Player key={index} el={el} />
  ))} 
  

    </div>
  );
};

export default PlayersList;