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
      />
    </div>
  );
}

export default App;
