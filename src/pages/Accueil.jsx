import React, { createElement, useEffect, useState } from "react"


function AffichageFruits() {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/fruitss')
            .then((resp) => resp.json())
            .then(function(data) {
                this.setState;
            })}, [])};


const Accueil = () => {
    return (
        <>
        <h2>Test Accueil</h2>
        
        </>
    )
}

export default Accueil