import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  function Home() {
    return <h2> Home Page</h2>;
  }
  function Users() {
    return <h2> Users Page</h2>;
  }

  return (
    <div>
      <h1>Dasboard</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
