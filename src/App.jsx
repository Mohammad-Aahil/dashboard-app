import { Routes, Route, Link, useParams } from "react-router-dom";

// Home page
function Home() {
  return <h2>Home Page</h2>;
}

// Users page
function Users() {
  const users = [
    { id: 1, name: "Aahil" },
    { id: 2, name: "John" },
  ];

  return (
    <div>
      <h2>Users Page</h2>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

// User Detail page
function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Detail</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
