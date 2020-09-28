import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

let numOfLikes = 0; // Start with 0 likes on button


const likes = ["likes", "like"] // Array to use in if statement for whether to show single or plural likes

function App() {
  const [numOfLike, addLike] = useState(true) // useState


  function handleClick() { // Function to increment like on each click
  addLike(numOfLikes++)
}

function pluralLikes(item) { // If statement to that shows "like" if only one like, and "likes" if zero or plural
  if (numOfLikes === 1) {
    return (item = item[1])
  } else {
    return (item = item[0])
  }
}


  return (
    <div>
  <button className="likeButton" onClick={handleClick}>
    {numOfLikes} {pluralLikes(likes)}
  </button>
  </div>
  );
}



export default App;
