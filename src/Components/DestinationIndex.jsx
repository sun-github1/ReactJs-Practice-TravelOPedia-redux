import React, { useState } from 'react';
import DestinationList from './DestinationList';
import AddDestination from './AddDestination';

export const DestinationIndex = () => {
    const [selectedDestination,setSelectedDestination ]= useState(null);
    const editDest=(item)=>{
        setSelectedDestination(item);
    }
    const setUpdateSuccess=(isSuccess)=>{
        if(isSuccess)
            setSelectedDestination(null);
    };
  return (
    <div className='justify-center'>
        <div className='h1 text-green-700'>Travel-O-Pedia list</div>
        <AddDestination selectedDest={selectedDestination} setUpdateSuccess={setUpdateSuccess}/>
        <DestinationList editDest={editDest} />
    </div>
  )
}
