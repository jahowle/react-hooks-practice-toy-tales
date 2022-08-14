import React from "react";

function ToyCard({toy, handleLike, handleDelete}) {

  const { id, name, image, likes } = toy

  function deleteClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(toy))
  }

  function handleClick(){
    const updatedToy = {
      likes: toy.likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy)
    })
      .then((r) => r.json())
      .then(handleLike)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
