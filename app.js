import React, { useState, useEffect } from "react";
import "./style.css";

const gitHubUrl = "https://61ee4c48d593d20017dbad43.mockapi.io/api/users/newUsers";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserWithFetch();
  }, []);

  const getUserWithFetch = async () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h2>User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.id}</h5>
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.createdAt}</h5>
      </div>
    </div>
  );
}

export default App;
