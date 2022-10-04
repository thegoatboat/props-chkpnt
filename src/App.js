import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
function App() {
  const handleClick = () => {
    alert("Hello@welcom.byby");
  };
  return (
    <div className="App">
      <Profile
        name="Amine"
        bio="Lorem"
        profession="student"
        handleClick={handleClick}
      >
        <img
          className="photo"
          src="https://i.pinimg.com/originals/20/60/4d/20604d135e8cc98bd168614250c09b17.png"
          alt="img"
        />
      </Profile>
    </div>
  );
}

export default App;

