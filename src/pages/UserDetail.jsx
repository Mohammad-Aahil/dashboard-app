import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      return res.json();
    },
  });

  if (isLoading) return <p>Loading user...</p>;
  if (error) return <p>Error loading user</p>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>
    </div>
  );
};

export default UserDetail;
