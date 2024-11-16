// src/pages/HomePage.js
import { Link } from "react-router-dom";

const HomePage = ({ cars }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="p-4 bg-white shadow rounded">
            <img
              src={car.image}
              alt={car.title}
              className="h-48 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold">{car.title}</h3>
            <div className="mt-4 space-x-2">
              <Link
                to={`/dashboard/edit-car/${car.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </Link>
              <Link
                to={`/dashboard/view-car/${car.id}`}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
