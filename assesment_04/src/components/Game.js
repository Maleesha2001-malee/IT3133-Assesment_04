import React, { useState, useEffect } from "react";
import animals from "../data/AnimalsDb";
import "../assets/css/GameStyles.css";

export default function Game() {
  const [targetAnimal, setTargetAnimal] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    getRandomAnimal();
  }, []);

  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setTargetAnimal(animals[randomIndex]);
    setResult("");
  };

  const handleAnimalClick = (animal) => {
    if (animal.name.toLowerCase() === targetAnimal.name.toLowerCase()) {
      setResult("WIN");
    } else {
      setResult("LOSE");
    }
  };

  return (
    <div className="container">
      
      <h1 className="heading-border">ANIMAL MATCHING GAME</h1>
   
      <table className="table">
        <thead>
          <tr>
            <th className="header">Result</th>
            <th className="header">Animal Name</th>
            <th className="header">Select the Animal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="result">
              <span style={{ color: result === "WIN" ? "green" : "red" }}>
                {result}
              </span>
            </td>
            <td className="target-animal">
              {targetAnimal ? targetAnimal.name.toUpperCase() : "Loading..."}
            </td>
            <td className="animal-grid">
              <div className="grid">
                {animals.map((animal) => (
                  <div
                    key={animal.id}
                    className="card"
                    onClick={() => handleAnimalClick(animal)}
                  >
                    <img
                      src={require(`../assets/img/${animal.image}`)}
                      alt={animal.name}
                      className="image"
                    />
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}