import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  return (
    <main>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;
