import React from 'react'
import { useDeleteDestinationMutation } from '../api/destinationApi';

const Destination = ({item, editDest}) => {
    const [ deleteDestinationMutation, results ] = useDeleteDestinationMutation();

    const deleteDest= (id) => {
        deleteDestinationMutation(id);
    }

  return (
    <div className='row border flex justify-center p-2'>
                <div className='col-5'>
                    {`${item.city}-${item.country}-${item.daysNeeded}`}
                </div>
                <div className='col-3 text-warning'>
                    {`${item.daysNeeded} days`}
                </div>
                
                <div className='col-2'>
                    <button className='btn btn-primary px-10' 
                    onClick={() => editDest(item)}>Edit</button>
                </div>
                <div className='col-2'>
                    <button className='btn btn-danger px-10' 
                    onClick={() => deleteDest(item.id)}>Delete</button>
                </div>
            </div>
  )
}

export default Destination