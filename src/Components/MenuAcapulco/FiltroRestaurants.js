
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { restaurantes } from './restaurantes';

export const FiltroRestaurants = () => {

    

    return (
        <div className="pt-5">
            <div className="d-flex justify-content-evenly p-3 ">
                <button className="btn btn-info "> Show all</button>
                <button className="btn btn-info   " > China</button>
                <button className="btn btn-info  "  > Pizza</button>
                <button className="btn btn-info  "  > Tortas</button>
                <button className="btn btn-info  " > Tacos</button>
            </div>

            <div className="row">
                {
                    restaurantes.map( rest => (
                        <Card>
                        <Card.Body>{rest.restaurantName}.</Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
