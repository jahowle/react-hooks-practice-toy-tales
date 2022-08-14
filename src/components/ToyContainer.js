import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleLike, handleDelete}) {


  const toysToDisplay = toys.map((toy) => {
    return (
    <ToyCard key={toy.id} toy={toy} handleLike={handleLike} handleDelete={handleDelete}/>
    )
  })

  

  return (
    <div id="toy-collection">{toysToDisplay}</div>
  );
}

export default ToyContainer;
