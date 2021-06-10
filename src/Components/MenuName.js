import React from 'react'
import { Card } from 'react-bootstrap'
import '../App.css'

export const MenuName = () => {
    return (
        <div>
            <Card.Body className="bg-warning "  >
                <Card.Title className="text-center m-0 p-0 text-uppercase"><h3>Pinche's Burger's Acapulco</h3></Card.Title>

                </Card.Body>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.18169-9/10502226_716078941773014_5648458328756037438_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFn-kfzGFRzjMULDVD2Xucma3VxVvGbtkxrdXFW8Zu2TMBH_vEQyLygyBj_Bddt-4rbWBIYuFDljaIFqzaBpTgR&_nc_ohc=TMN3Ex5mtX4AX-3gXhD&_nc_ht=scontent-qro1-1.xx&oh=68ab5f66e1b0b40a5b38204f9c18d84f&oe=60DF1CFA" />
                <Card.Body >
                <Card.Title className="text-center m-0 p-0 menu ">MENU</Card.Title>

                </Card.Body>
             </Card>
        </div>
    )
}
