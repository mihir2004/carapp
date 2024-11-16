// src/pages/AllProductsPage.js
import { useState } from "react";
import { Link } from "react-router-dom";

const AllProductsPage = ({ cars }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id} className="flex justify-between items-center mb-2">
            <h3 className="text-lg">{car.title}</h3>
            <div>
              <Link
                to={`/dashboard/edit-car/${car.id}`}
                className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
              >
                Edit
              </Link>
              <Link
                to={`/dashboard/view-car/${car.id}`}
                className="bg-gray-500 px-4 py-2 text-white rounded"
              >
                View
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductsPage;
