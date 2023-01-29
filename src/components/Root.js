// @flow strict

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Nav bar
import Base   from "../components/Base";

function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  exact path='/'           element={ <Base  /> } />
                <Route  path='/apercu'           element={ <Base code="apercu" /> } />
                <Route  path='/notre-metier'     element={ <Base code="notre-metier" /> } />
                <Route  path='/notre-equipe'     element={ <Base code="notre-equipe" /> } />
                <Route  path='/notre-expertise'  element={ <Base code="notre-expertise" /> } />
                <Route  path='/contacts'         element={ <Base code="contacts" /> } />
                <Route  path='/connexion'        element={ <Base code="connexion" /> } />
                <Route  path='*'                 element={ <Base code="not found" /> }  />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;