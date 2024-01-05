import { useState } from "react";
export default function Player({ initialName, symbol }) {
    const [playerNameVariable, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(checkValue) {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerName = <span className="player-name">
        {playerNameVariable}
    </span>
    let btnCaption = 'Edit';
    if (isEditing) {
        playerName = <input type="text" required onChange={handleChange} value={playerNameVariable} />
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">
                    {symbol}
                </span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}