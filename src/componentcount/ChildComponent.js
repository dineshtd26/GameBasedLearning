import React from 'react'

export const ChildComponent =(prop) => {

    const runCodeData = prop.runCodeData;
     return (
       <div>
       {prop.runCodeData === true && <p>User code is equal to codesnip</p>}
       {prop.runCodeData === false && <p>User code is not equal to codesnip</p>}
       {prop.runCodeData === null && <p>Waiting for code comparison...</p>}
   </div>
     )
   }
   