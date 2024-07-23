import React, { useEffect, useState } from "react"
import Loader from "../composents/Loader";


const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    useEffect(() => {
        if (isLoading) {
        fetch('https://127.0.0.1:8001/api/fruitss')
            .then((resp) => resp.json())
            .then((data) => {
                setFruits(data['hydra:member']);
                setIsLoading(!isLoading);
            });
        }
    }, [isLoading]);

    return (
        fruits.length > 0 ? (
                <div className="fruits">
                    {fruits.map((fruit) => (
                        <div className="fruit" id={fruit.id} key={fruit.id}>
                            <h2 className="nom">{fruit.nom}</h2>
                            <span className="variete">{fruit.variete}</span>
                            <span className="saison">{fruit.saison}</span>
                            <img className="url" src={`./images/${fruit.url}`} alt={`Un(e) ${fruit.nom}`}></img>
                        </div>
                    ))}
                </div>
            ) : ( <Loader /> )
    );
};
export default Fruits;


// import React, { useEffect, useState } from "react";

// const Accueil = () => {
//     const [fruits, setFruits] = useState([]);

//     useEffect(() => {
//         fetch('https://127.0.0.1:8000/api/fruitss')
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setFruits(data['hydra:member']);
//             })
//             .catch((error) => {
//                 console.error('Fetch error:', error);
//             });
//     }, []);

//     return (

//             fruits.forEach((fruit) => (
//                 <div key={fruit.id}>
//                     <h2>{fruit.nom}</h2>
//                     <span>{fruit.variete}</span>
//                     <span>{fruit.saison}</span>
//                     <span>{fruit.url}</span>
//                 </div>
//             ))
//     );
// };

// export default Accueil;




// .then((data) => data['hydra:member'].forEach((fruits, i) => {
//     const card = document.createElement('div');
//     const nom = document.createElement('h3');
//     const variete = document.createElement('h4');
//     nom.innerText = fruits.nom;
//     if (fruits.variete) {
//         variete.innerText = fruits.variete;
//     } else {
//         variete.innerText = "";
//     };
//     const saison = document.createElement('p');
//     saison.innerText = fruits.saison;
//     const photo = document.createElement('p');
//     photo.setAttribute("href", `./images/${fruits.url}`);
//     root.append(card);
//     card.append(nom, variete, saison, photo);



