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
    <div>
      <h2>User Detail</h2>

      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>Website:</strong> {data.website}
      </p>
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default UserDetail;
