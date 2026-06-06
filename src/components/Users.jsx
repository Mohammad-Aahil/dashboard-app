import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch error");
      }

      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2>Users Page</h2>
      <br />
      {(data || []).map((user) => (
        <div key={user.id} className="border mb-2 rounded-md p-3 mx-auto w-md ">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button>
            <Link to={`/users/${user.id}`}>User Details</Link>
          </button>
          <br /> <br />
        </div>
      ))}
    </div>
  );
};

export default Users;
