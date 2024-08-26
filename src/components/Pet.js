import React from "react";

function Pet({ pet, onAdoptPet }) {
  const handleAdoptClick = () => {
    onAdoptPet(pet.id);
  };

  return (
    <div className="card" data-testid="pet">
      
      <div className="content">
        
        <span className="header">
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{pet.age} years old</p>
          <p>{pet.weight} kg</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button disabled>Already adopted</button>
        ) : (
          <button onClick={handleAdoptClick}>Adopt pet</button>
        )}
      </div>
    </div>
  );
}


export default Pet;