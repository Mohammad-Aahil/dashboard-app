import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import UserDetail from "./pages/UserDetail";

const App = () => {
  function Home() {
    return <h2> Home Page</h2>;
  }

  function Users() {
    const users = [
      { id: 1, name: "Aahil" },
      { id: 2, name: "John" },
    ];

    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Dasboard</h1>

      <nav>
        <Link to={"/"}>Home</Link> | {""}
        <Link to={"/users"}>Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default App;
