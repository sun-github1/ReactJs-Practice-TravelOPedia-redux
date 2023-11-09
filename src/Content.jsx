import React from 'react'
import { DestinationIndex } from './Components/DestinationIndex'
import RandomDestination from './Components/RandomDestination'


const Content = () => {
    return (
        <div className="container" style={{minHeight:"85vh"}}>
            <DestinationIndex/>
            <RandomDestination />
        </div>
    )
}

export default Content