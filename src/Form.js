import {useEffect, useState } from "react";
import React from 'react';

function Form(editTitle) {

    const [title, setTitle] = useState("");
    const [saved, setSaved] = useState(false);
    const [calc, setCalc] = useState(0);

    useEffect(() => {
        
        console.log("Title i form", Object.values(editTitle));

        if (Object.values(editTitle) !== null) {
            setTitle(Object.values(editTitle))
        }

    }, [])

    useEffect(() => {
        setCalc(calc +1)
    }, [saved])

    const onChange = (event) => {
        setTitle(event.target.value);   
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setSaved(!saved);
    }

    return (
        <div>
            <p>{title} | {calc} | {saved ? "Sparad" : "Inte sparad"}</p>
            <input type="text" value={title} onChange={onChange}/>
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

export default Form;