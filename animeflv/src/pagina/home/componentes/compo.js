import React from 'react';

import Cuerpo from './../../tema/cuerpo';
import desc from './../../../Imagenes/desc.jpg';
import de from './../../../Imagenes/de.jpg';
import './../../tema/encabezado.css';

const Index =(props) => {

    return (
        <Cuerpo>
            <article>
                <img
                src={desc} className='hh'
                />
                <p>
                    Bienvenid@ a Naruto Wiki <br/>
                    Naruto Wiki, es una enciclopedia virtual dedicada a la recolección
                    y organización de información sobre la serie Naruto. Aquí
                    encontrarás todo sobre la emocionante franquicia: personajes,
                    jutsus, aldeas, manga, anime y explorar el gran mundo ninja de 
                    la mano de sus protagonistas, además ¡tú puedes ayudarnos a crecer siendo editor!
                </p>
            </article>
            <article>
                <img
                src={de} width='450px' className='hh'
                />
                <p>
                    ¿Sabías qué...<br/>

                    Información sobre los personajes:<br/>

                    El personaje favorito de Kishimoto es Naruto ya que si pudiera dividirse
                    en 17 personas con el Jutsu Multiclones de Sombras, él seria capaz de 
                    dibujar mucho mejor el manga de la serie y terminar el capítulo de la 
                    serie por hacer solo una pagina.<br/>

                    El símbolo que tiene Gaara en su frente significa "Amor".<br/>

                    Hinata le confesó a Naruto que lo amaba.<br/>
                </p>
            </article>
        </Cuerpo>
    );
};

export default Index;