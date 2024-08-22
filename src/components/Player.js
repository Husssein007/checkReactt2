

const Player = ({el}) => {
    return ( 
        <div className="player">
            <p> name : {el.name}</p>
            <p> team: {el.team}</p>
            <p> nationality : {el.nationality}</p>
            <p> jerseyNumber: {el.jerseyNumber}</p>
            <p> age: {el.age}</p>
           <img src={el.im} alt="" />
        </div>
     );
}
 
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown Nationality",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/150"
  };
  

export default Player;