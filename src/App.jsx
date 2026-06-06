import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  function Home() {
    return <h2> Home Page</h2>;
  }

  function Users() {
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      },
    });

    if (isLoading) return <p>Loading user...</p>;
    if (error) return <p>Error loading user</p>;

    return (
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <button
              onClick={() => {
                navigate(`/users/${user.id}`);
              }}
            >
              {" "}
              Go to Details
            </button>
            <br /> <br />
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
