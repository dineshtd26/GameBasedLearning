import React, { useState, useEffect } from 'react';
import { Rabitrun } from './Rabitrun';

export const Game = ({ runCodeData: propRunCodeData, game }) => {
  const [localRunCodeData, setLocalRunCodeData] = useState(false); 
  useEffect(() => {
    setLocalRunCodeData(propRunCodeData); 
  }, [propRunCodeData]);

  const getDisplayStyle = () => {
    if (localRunCodeData === true) {
    
    } else {
     
    }
  }

  return (
    <div>
      <div className='te'>
      </div>
      
      <Rabitrun styles={localRunCodeData?'play':'noplay'}  game={game}/>
     
    </div>
  );
};
