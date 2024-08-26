import React from "react";

import Pet from "./Pet";


  function PetBrowser({ pets, onAdoptPet }) {
    console.log("pets prop:", pets);
  
    if (!Array.isArray(pets)) {
      return <div>Something went wrong. Pets data is not available.</div>;
    }
  

  return (
  
  <div className="ui cards">
  {pets.length === 0 ? (
    <div>No pets available.</div>
  ) : (
    pets.map((pet) => (
      <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
    ))
  )}
</div>
)
}
  
export default PetBrowser;