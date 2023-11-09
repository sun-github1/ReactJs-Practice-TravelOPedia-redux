import React from 'react'
import { useAddDestinationMutation, useUpdateDestinationMutation } from '../api/destinationApi';

const AddDestination = ({selectedDest, setUpdateSuccess}) => {
    const [ addDestinationMutation, results ] = useAddDestinationMutation();
    const [ updateDestinationMutation, resultUpdate ] = useUpdateDestinationMutation();
    console.log('selectedDest in Add',selectedDest );
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        if(!selectedDest)
            addDestinationMutation(
                {
                    id: parseInt(Math.random()) * 100,
                    city: e.target.elements.city.value.trim(),
                    country: e.target.elements.country.value.trim(),
                    daysNeeded: parseInt(Math.random()*5)+1
                }
            );
        else
            updateDestinationMutation(
            {
                id: selectedDest.id,
                city: e.target.elements.city.value.trim(),
                country: e.target.elements.country.value.trim(),
                daysNeeded: parseInt(Math.random()*5)+1
            });
        
        setUpdateSuccess(true);
    }

    return (
        <div className='justify-center border p-5'>
            <div className='h3'>Add Destination</div>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-5 p1'>
                        <input type='text'
                            className='form-control'
                            placeholder='Enter City...'
                            id='city'
                            name='city'
                            defaultValue={selectedDest?.city || null} />
                    </div>
                    <div className='col-5 p1'>
                    <input type='text'
                            className='form-control'
                            placeholder='Enter Country...'
                            id='country'
                            name='country' 
                            defaultValue={selectedDest?.country  || null}/>
                    </div>
                    <div className='col-2 p1'>
                        <button typr='submit' className='btn btn-success'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDestination