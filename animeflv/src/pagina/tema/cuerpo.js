import React from 'react';

import Encabezado from './encabezado';
import Pie from './pie';

const Cuerpo = (props) => {
    return (
        <>
        <Encabezado />
        <section className="cuerpo">
            {
                props.children
            }
        </section>
        <Pie />
        </>

    );
};

export default Cuerpo;