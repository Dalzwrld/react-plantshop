import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        const plantsWithStock = data.map((plant) => ({
          ...plant,
          inStock: true,
        }));
        setPlants(plantsWithStock);
      });
  }, []);

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlants([
          ...plants,
          { ...data, inStock: true }
        ]);
      });
  }

  function handleToggleStock(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );
    setPlants(updatedPlants);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
