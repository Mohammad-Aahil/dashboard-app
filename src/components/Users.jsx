import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [search, setSearch] = useState("");

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

  // search filters
  const filteredUsers = (data || []).filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="space-y-3">
      <h2>Users Page</h2> <br />
      <input
        className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="p-4 border rounded shadow hover:shadow-lg transition flex justify-center "
        >
          <button>
            <Link
              to={`/users/${user.id}`}
              className="text-2xl font-semibold text-blue-600 "
            >
              {user.name}
            </Link>
          </button>
          <br /> <br />
        </div>
      ))}
    </div>
  );
};

export default Users;
