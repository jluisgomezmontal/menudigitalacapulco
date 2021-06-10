import React from 'react'
import { FiltroRestaurants } from './FiltroRestaurants'
import { NavBarMenu } from './NavBarMenu'

export const MenuDigitalAcapulco = () => {
    return (
        <div className="container">
            <NavBarMenu/>
            <FiltroRestaurants/>

        </div>
    )
}
