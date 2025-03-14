import React from 'react';
import './Start.css'
import { useState } from 'react';
const StartRating = ({ count = 5 }) => {
    const [startValue, setStartValue] = useState(0)
    const [hover, setHover] = useState(0);
    
    console.log(startValue)
    return (
        <div className='border-3' >
            {
                new Array(5).fill(0).map((value, index) => {
                    return <span key={index} className={(hover == 0 && index < startValue) || index < hover ? 'start' : ''} onClick={() => (setStartValue(index + 1))}
                        onMouseEnter={() => setHover(index+1)}
                        onMouseLeave={()=>setHover(0)}
                    >&#9733;</span>
                })
            }
        </div>
    );
};

export default StartRating;