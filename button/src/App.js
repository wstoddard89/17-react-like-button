import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


// Start with 0 likes on button
let numOfLikes = 0; 

// Array to use in if statement for whether to show single or plural likes
const likes = ["likes", "like"] 

// useState that uses "addLike" function
function App() {
  const [numOfLike, addLike] = useState(true) 

// Function to increment like on each click
  function handleClick() { 
  addLike(numOfLikes++)
}

// If statement to that shows "like" if only one like, and "likes" if zero or plural
function pluralLikes(item) { 
  if (numOfLikes === 1) {
    return (item = item[1])
  } else {
    return (item = item[0])
  }
}

// Returns button that starts with zero "numOfLikes", as well as "pluralLikes" set to "likes"
// Uses "handleClick" on each click to increment "numOfLikes"
// "pluralLikes" will then switch from "likes" at zero, to "like" at one, and back to "likes" at two or greater clicks
  return (
    <div>
  <button className="likeButton" onClick={handleClick}>
    {numOfLikes} {pluralLikes(likes)}
  </button>
  </div>
  );
}



export default App;
