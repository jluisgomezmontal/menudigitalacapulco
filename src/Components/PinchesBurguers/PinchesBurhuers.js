import React from 'react'
import { AccordioCart } from '../AccordioCart.js'
import { Carousell } from '../Carousell.js'
import { InfoRestaurante } from '../InfoRestaurante.js'
import { MenuName } from '../MenuName.js'
import { RedesSociales } from '../RedesSociales.js'
import Ubicacion from '../Ubicacion.js'


export const PinchesBurhuers = () => {
    return (
        <div>
            <Carousell/>
            <MenuName/>
            <AccordioCart/>
            <InfoRestaurante/>
            <RedesSociales/>
            <Ubicacion/>
        </div>
    )
}
