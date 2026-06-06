import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }

      return res.json();
    },
  });

  if (isLoading) return <p>Loading user...</p>;
  if (error) return <p>Error loading user</p>;

  return (
    <div className="p-6 border rounded shadow-xl space-y-2">
      <h2 className="text-xl font-bold">{data.name}</h2>

      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>Website:</strong> {data.website}
      </p>

      <button
        className="mt-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default UserDetail;
