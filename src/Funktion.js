import React, { useEffect } from 'react';
import UnderFunktion from './UnderFunktion';

function Funktion(props) {

    console.log("props i funktion", props);

    useEffect(() => {
        props.myCallback("Fu fu fu funktion!");
        UnderFunktion(props.myCallback, "Hello");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h4>Jag är en funktion!</h4>
        </div>
    );
}

export default Funktion;