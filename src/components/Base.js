// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';

// component
import Header from "../components/Header";
import Metier from "../components/Metier";
import Footer from './Footer';
// import  logo  from '../public/image/captureforme.png';

function Base(props) {
    return (
        <div>
            <Header />
            <Metier />
            <div className='audit-interne'>
                <h1>Notre Audit Interne</h1>
                <div>
                    <ol>
                        <li data-label="1"><span>Un consultant expert chez vous, en autarcie totale dans votre société</span></li>
                        <li data-label="2"><span>Conçu sur messure pour et avec vous</span></li>
                        <li data-label="3"><span>Observer et analyser vos problématiques internes</span></li>
                        <li data-label="4"><span>Construire un plan d'Action optimal pour votre développement</span></li>
                    </ol>
               </div>
                {/* <img src={ logo } alt='fond' /> */}
            </div>

            <div className='button-layout'>
                <Link to="/" className='btn'>Parlons nous</Link>
            </div>

            <Footer />
        </div>
    );
};

export default Base;