// src/components/DashboardLayout.js
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">CarApp Dashboard</h1>
        <nav className="space-y-4">
          <Link to="/dashboard/home" className="block hover:underline">
            Home
          </Link>
          <Link to="/dashboard/cars" className="block hover:underline">
            Car List
          </Link>
          <Link to="/dashboard/add-car" className="block hover:underline">
            Add New Product
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left text-red-500 hover:underline"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
