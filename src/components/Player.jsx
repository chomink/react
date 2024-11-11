import { useState }  from 'react';

export default function Player({initalName , symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initalName);

    function handleEditClick() {
        setIsEditing((editing)=> !editing);
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange}/>
        );
    }
    //const plyer_div = (isEditing)? <input type={text} name={}/>:
    return (
        <li>
              <span className="player">
              {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={handleEditClick}>{(!isEditing) ? "Edit": "Save" }</button>
        </li>
    )
}