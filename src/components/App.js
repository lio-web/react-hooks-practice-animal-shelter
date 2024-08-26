import React, { useState} from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  
  const handleFilterChange = (event) => {
    setFilters({type: event.target.value });
  };
  
  const onFindPetsClick = () => {
    const {type } = filters;
    let url = '/db.json'; // Adjust the URL as needed

    if (type !== 'all') {
      url += `?type=${type}`;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      
      .then(data => {
        if (data.pets && Array.isArray(data.pets)) {
          const filteredPets = type === 'all'
            ? data.pets // If type is 'all', return all pets
            : data.pets.filter(pet => pet.type === type); // Filter by specific type
          
          setPets(filteredPets);
        } else {
          console.error("Fetched data is not in expected format");
        }
      })
      .catch(error => console.error("Error fetching pets:", error));
    }; 
  
    //Adopt button
  const onAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet
      )
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters   onChangeType={handleFilterChange}
              onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
          <PetBrowser
              pets={pets}
              onAdoptPet={onAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;