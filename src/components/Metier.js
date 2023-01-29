// @flow strict

import * as React from 'react';
import  icon  from '../public/image/background-1.png';

function Metier() {
    return (
        <div className='carrier-layout'>
            <div className='container container-left '>
                <div className='image-illustration '>
                    <img src={icon} alt="icon" className='carrier-image' />
                    <div className='placeholder-number  flex-container --column --justify-center --align-center'>
                        <span>3,6</span>
                        <span>Millions</span>
                    </div>
                </div>
                <h1 className='title'>Notre Métier</h1>
                <div className='description '>
                    <p>Il existe plus de 3,6 millions de TPE et PME en France, souvent dirigée par leur(s) fondateur(s), ces enreprises travaillent au quotidiens pour assurer leur croissance.</p>
                    <p>Vollis Consulting est le partenaire idéale pour vous aider à relever ce defi.</p>
                    <p>Comment passer votre cap de developpelent  clé et accélerer votre croissance ?</p>
                </div>
            </div>

            <div className="citation">« Parce qu'Entreprendre et  Diriger n'est pas le même métier. »</div>

            <div className='container container-right '>
                <div className='description'>
                    <p>Notre mission est d'oeuvrer dans le meilleur intérêt de nos clients et de leur développement. Vous entreprenez, nous vous conseillons pour diriger et ré-inventer votre organisation, la gestion de votre entreprise, et son développement.</p>
                    <p>Nous sommes spécialiés en maganement et en développement conmercial. Notre approche recoupe trois axes de reflexions majeurs: la structure organisationnelle, la gestion financière et le développement comercial de votre entreprise. Notre travail  avec vous se base donc sur ces trois sujets majeurs pour votre développement.</p>
                </div>
                <div className='image-illustration'>
                    <img src={icon} alt="icon" className='carrier-image' />
                </div>
            </div>
        </div>
    );
};

export default Metier;