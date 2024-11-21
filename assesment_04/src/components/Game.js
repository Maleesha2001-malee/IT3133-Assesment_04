import React, { useState, useEffect } from 'react';
import AnimalsDb from '/workspaces/IT3133-Assesment_04/assesment_04/src/data/AnimalsDb';
import AnimalCard from '/workspaces/IT3133-Assesment_04/assesment_04/src/components/AnimalCard';
import Result from './Result';

export default function AnimalMatchingGame() {
    const [currentAnimal, setCurrentAnimal] = useState({});
    const [options, setOptions] = useState([]);
    const [result, setResult] = useState('');

    
    const generateNewAnimal = () => {
        const randomIndex = Math.floor(Math.random() * AnimalsDb.length);
        const selectedAnimal = AnimalsDb[randomIndex];
        setCurrentAnimal(selectedAnimal);
        generateOptions(selectedAnimal);
    };

   
    const generateOptions = (correctAnimal) => {
        let shuffledAnimals = [...AnimalsDb];
        shuffledAnimals.sort(() => 0.5 - Math.random()); // Shuffle animals
        const correctOptionIndex = Math.floor(Math.random() * 16);
        shuffledAnimals.splice(correctOptionIndex, 1, correctAnimal); // Replace one option with the correct one
        setOptions(shuffledAnimals.slice(0, 16)); // Get first 16 animals
    };

    
    useEffect(() => {
        generateNewAnimal();
    }, []);

    
    const handleAnimalClick = (animal) => {
        if (animal.name === currentAnimal.name) {
            setResult('You Win!');
        } else {
            setResult('You Lose!');
        }
        setTimeout(() => {
            setResult('');
            generateNewAnimal();
        }, 2000); 
    };

    return (
        <div>
            <h1>Animal Matching Game</h1>
            <h2>Find the animal: {currentAnimal.name}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {options.map((animal, index) => (
                    <AnimalCard
                        key={index}
                        animal={animal}
                        onAnimalClick={handleAnimalClick}
                    />
                ))}
            </div>
            <Result message={result} />
        </div>
    );
}
