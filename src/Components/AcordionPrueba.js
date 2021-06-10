/*
    <Accordion defaultActiveKey="0">
            <Card >
                <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-warning">
                PINCHE'S BURGUER's
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="text-info">SENCILLA
                        <div className="d-flex justify-content-between">

                        <p className="text-white">Carne y Queso amarillo </p>  <span className="text-danger" >$50</span>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">TOCINO
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne, Tocino y Q. Amarillo  </p>  <span className="text-danger" >$59</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">HAWAIANA
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne, Jamon, Q. Amarillo y Piña  </p>  <span className="text-danger" >$69</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">SUIZA
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne, Q. Manchego, Champiñon y Cebolla Salteada  </p>  <span className="text-danger" >$72</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">Mexicana
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne, Q. Manchego, Chiles, Cebolla Salteada y Guacamole </p>  <span className="text-danger" >$74</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">DIABLA
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne, Q. Manchego, Piña y Cebolla Enchipotlada </p>  <span className="text-danger" >$76</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">BBQ
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne Bañada en Bbq, Q. Manchego, Cebolla Bbq y Tocino </p>  <span className="text-danger" >$76</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">PINCHPOLLO
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Pollo Asao, Q. Manchego, Cebolla Salteada y Pinche Aderezo </p>  <span className="text-danger" >$79</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">CAMARONA
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne, Camarones Salteados Gratinados, Cebolla Salteada y Aderezo Chipotle </p>  <span className="text-danger" >$85</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">PINCHE
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Doble Carne, Q. Manchego, Cebolla Salteada y Tocino </p>  <span className="text-danger" >$92</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <Card.Body  className="text-info">TANKE
                    <div className="d-flex justify-content-between">

                        <p className="text-white">Carne Rellena de Queso Manchego 320g, Jamon, Q. Amarillo, Piña, Guacamole, Cebolla Salteada, Champiñones y Tocino </p>  <span className="text-danger" >$120</span>
                    </div>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="bg-warning">
                PINCHE'S HOTCHOS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                
                </Card>
            </Accordion>
            
        

           

           


           
                   
        { 
                   id: '1',
                   restaurant: "PINCHE'S HOTCHOS",
                   nachos: [
                       {
                           idCartilla: 1,
                           titleCartilla: 'SENCILLA',
                           descripcion: 'Carne y Queso amarillo ',
                           price: 50
                       },
                       {
                           idCartilla: 2,
                           titleCartilla: 'TOCINO',
                           descripcion: 'Carne, Tocino y Q. Amarillo   ',
                           price: 59
                       },
                       {
                           idCartilla: 3,
                           titleCartilla: 'HAWAIANA',
                           descripcion: 'Carne, Jamon, Q. Amarillo y Piña ',
                           price: 69
                       }
                   ]
               }
           
           ]
           

          


        const cartas = [
            { 
                id: '0',
                title: "PINCHE'S BURGUER'S",
                hamburguesas: [
                    {
                        idCartilla: 1,
                        titleCartilla: 'SENCILLA',
                        descripcion: 'Carne y Queso amarillo ',
                        price: 50
                    },
                    {
                        idCartilla: 2,
                        titleCartilla: 'TOCINO',
                        descripcion: 'Carne, Tocino y Q. Amarillo   ',
                        price: 59
                    },
                    {
                        idCartilla: 3,
                        titleCartilla: 'HAWAIANA',
                        descripcion: 'Carne, Jamon, Q. Amarillo y Piña ',
                        price: 69
                    }
                ]
            },
        
            // quiero imprimir esto
            PINCHE'S BURGUER'S
                 SENCILLA
                     Carne y Queso amarillo
                     50
                 TOCINO
                     Carne, Tocino y Q. Amarillo
                     59
                 HAWAIANA
                     Carne, Jamon, Q. Amarillo y Piña
                     69*/




export const hamburguesas = [{
        idCartilla: 1,
        titleCartilla: 'SENCILLA',
        descripcion: 'Carne y Queso amarillo ',
        price: 50
    },
    {
        idCartilla: 2,
        titleCartilla: 'TOCINO',
        descripcion: 'Carne, Tocino y Q. Amarillo   ',
        price: 59
    },
    {
        idCartilla: 3,
        titleCartilla: 'HAWAIANA',
        descripcion: 'Carne, Jamon, Q. Amarillo y Piña ',
        price: 69
    },
    {
        idCartilla: 4,
        titleCartilla: 'SUIZA',
        descripcion: 'Carne, Q. Manchego, Champiñon y Cebolla Salteada ',
        price: 72
    },
    {
        idCartilla: 5,
        titleCartilla: 'MEXICANA',
        descripcion: 'Carne, Q. Manchego, Chiles, Cebolla Salteada y Guacamole ',
        price: 74
    },
    {
        idCartilla: 7,
        titleCartilla: 'DIABLA',
        descripcion: 'Carne, Q. Manchego, Piña y Cebolla Enchipotlada ',
        price: 76
    },
    {
        idCartilla: 8,
        titleCartilla: 'BBQ',
        descripcion: 'Carne Bañada en Bbq, Q. Manchego, Cebolla Bbq y Tocino',
        price: 76
    },
    {
        idCartilla: 9,
        titleCartilla: 'PINCHPOLLO',
        descripcion: 'Pollo Asao, Q. Manchego, Cebolla Salteada y Pinche Aderezo ',
        price: 79
    },
    {
        idCartilla: 10,
        titleCartilla: 'CAMARONA',
        descripcion: 'Carne, Camarones Salteados Gratinados, Cebolla Salteada y Aderezo Chipotle',
        price: 85
    },
    {
        idCartilla: 11,
        titleCartilla: 'PINCHE',
        descripcion: 'Doble Carne, Q. Manchego, Cebolla Salteada y Tocino ',
        price: 92
    },
    {
        idCartilla: 12,
        titleCartilla: 'TANKE',
        descripcion: 'Carne Rellena de Queso Manchego 320g, Jamon, Q. Amarillo, Piña, Guacamole, Cebolla Salteada, Champiñones y Tocino ',
        price: 120
    }
        
    ];

    export const hotchos = [{
        idCartilla: 1,
        titleCartilla: 'PINCHE HOTCHO',
        descripcion: 'Salchicha Super Jumbo, Cebolla Salteada, Salchicha, Guacamole, Piña y Tocino ',
        price: 59
    },
    {
        idCartilla: 2,
        titleCartilla: 'CAMARON HOTCHO',
        descripcion: 'Salchicha Super Jumbo, Cebolla Salteada, Camarones Salteados Gratinados y Aderezo Chipotle ',
        price: 72
    }
]

export const fritos = [{
    idCartilla: 1,
    titleCartilla: 'PAPAS FRANCESAS',
    descripcion: 'Con o Sin Queso ',
    price: 40
},
{
    idCartilla: 2,
    titleCartilla: "PINCHE'S PAPAS",
    descripcion: 'Queso, Guacamole y Aderezo de la Casa',
    price: 60
},
{
    idCartilla: 3,
    titleCartilla: "AROS DE CEBOLLA",
    descripcion: 'Aros de Cebolla',
    price: 48
},
{
    idCartilla: 4,
    titleCartilla: "PINCHE'S COSTILLAS BBQ",
    descripcion: 'Acompañadas de vegetal a escoger(Papa, Chayote o Betabel) y Pan con Ajo',
    price: 60
}
]

export const vegetales = [{
    idCartilla: 1,
    titleCartilla: 'PAPA',
    price: 45
},
{
    idCartilla: 2,
    titleCartilla: "CHAYOTE",
    price: 48
},
{
    idCartilla: 3,
    titleCartilla: "BETABEL",
    price: 50
},
{
    idCartilla: 4,
    titleCartilla: "RELLENO DE QUESO",
    price: 68
}
,
{
    idCartilla: 5,
    titleCartilla: "RELLENO DE CHAMPIÑON",
    price: 75
}
,
{
    idCartilla: 6,
    titleCartilla: "RELLENO DE CHORIZO",
    price: 80
}
,
{
    idCartilla: 7,
    titleCartilla: "RELLENO DE ARRACHERA",
    price: 95
}
]

export const alas = [{
    idCartilla: 1,
    titleCartilla: 'BBQ',
    price: 63
},
{
    idCartilla: 2,
    titleCartilla: "BUFALO",
    price: 63
},
{
    idCartilla: 3,
    titleCartilla: "MANGO HABANERO",
    price: 66
},
{
    idCartilla: 4,
    titleCartilla: "PIÑA HABANERO",
    price: 66
}
]