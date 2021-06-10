import React from 'react'
import { Accordion, Card } from 'react-bootstrap';
import { alas, fritos, hamburguesas, hotchos, vegetales } from './AcordionPrueba';

export const AccordioCart = () => {
    
    return (
        <div>
          <Accordion defaultActiveKey="0">
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" className="h4 bg-warning ">
            PINCHE'S BURGUER'S
            </Accordion.Toggle>


            {
               hamburguesas.map( ham => (
                  <Accordion.Collapse eventKey="0" >
                    <Card.Body className="text-info py-1 ">{ham.idCartilla}.-{ham.titleCartilla}
                          <div className="d-flex justify-content-between">

                          <p className="text-white ">{ham.descripcion}</p>  <span className="text-danger" >${ham.price}</span>
                          </div>
                      </Card.Body>
                  </Accordion.Collapse>
                
                ))
              }
            </Card>
            <Card>

            <Accordion.Toggle as={Card.Header} eventKey="1" className="h4 bg-warning">
            PINCHE'S HOTCHOS
            </Accordion.Toggle>      

            {
              hotchos.map( hot => (
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="text-info py-1">{hot.idCartilla}.-{hot.titleCartilla}
                          <div className="d-flex justify-content-between">

                          <p className="text-white">{hot.descripcion}</p>  <span className="text-danger" >${hot.price}</span>
                          </div>
                      </Card.Body>
                  </Accordion.Collapse>
                
                ))
              }
            </Card>
            <Card>

            <Accordion.Toggle as={Card.Header} eventKey="2" className="h4 bg-warning">
            PINCHE'S FRITOS
            </Accordion.Toggle>      

            {
              fritos.map( frit => (
                  <Accordion.Collapse eventKey="2">
                    <Card.Body className="text-info py-1">{frit.idCartilla}.-{frit.titleCartilla}
                          <div className="d-flex justify-content-between">

                          <p className="text-white">{frit.descripcion}</p>  <span className="text-danger" >${frit.price}</span>
                          </div>
                      </Card.Body>
                  </Accordion.Collapse>
                
                ))
              }
            </Card>

            <Card>

            <Accordion.Toggle as={Card.Header} eventKey="3" className="h4 bg-warning">
            VEGETALES AL CARBON
            </Accordion.Toggle>      

            {
              vegetales.map( veg => (
                  <Accordion.Collapse eventKey="3">
                    <Card.Body className="text-info py-1">
                          <div className="d-flex justify-content-between">

                          <p className="text-info">{veg.idCartilla}.-{veg.titleCartilla}</p>  <span className="text-danger" >${veg.price}</span>
                          </div>
                      </Card.Body>
                  </Accordion.Collapse>
                
                ))
              }
            </Card>
             
            <Card>

            <Accordion.Toggle as={Card.Header} eventKey="4" className="h4 bg-warning">
            PINCHE'S ALAS
            </Accordion.Toggle>      

            {
            alas.map( ala => (
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="text-info py-1">
                        <div className="d-flex justify-content-between">

                        <p className="text-info">{ala.idCartilla}.-{ala.titleCartilla}</p>  <span className="text-danger" >${ala.price}</span>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
              
              ))
            }
            </Card>
          </Accordion>
        </div>
    )
}
