import React from 'react';
import { useGetAllDestinationQuery, useDeleteDestinationMutation } from '../api/destinationApi';
import Spinner from './Spinner';
import Destination from './Destination';

const DestinationList = ({editDest}) => {
    const { data, isLoading, isError, isSuccess, error } = useGetAllDestinationQuery();
    
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='m-3'>{data && data.map(item => (
            <Destination item={item} editDest={editDest} />
        ))}</div>
    )
}

export default DestinationList