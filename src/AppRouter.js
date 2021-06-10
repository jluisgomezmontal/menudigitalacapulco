import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MenuDigitalAcapulco } from './Components/MenuAcapulco/MenuDigitalAcapulco';
import { NavBar } from './Components/NavBar';
import { PinchesBurhuers } from './Components/PinchesBurguers/PinchesBurhuers';


export const AppRouter = () => {
    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={MenuDigitalAcapulco} />
                    <Route exact path="/pinchesburguers" component={PinchesBurhuers} />
                </Switch>
            </div>
            <NavBar/>
        </Router>
    )
}
