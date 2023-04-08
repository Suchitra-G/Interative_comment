import { useState } from 'react';
import './style.css';

const ScoreContainer = (props) => {
    const [score,setScore] = useState(props.score)
    return <div className="p-btn-container">
        <button onClick={() => setScore(score + 1)}>+</button>
        <h5>{score}</h5>
        <button onClick={() => setScore(score - 1)}>-</button>
    </div>
}

export default ScoreContainer; 