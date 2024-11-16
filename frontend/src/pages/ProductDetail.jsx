// src/pages/ProductDetailPage.js
const ProductDetailPage = ({ car }) => {
  return (
    <div className="flex">
      {/* Product Image */}
      <div className="w-1/2">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Product Details */}
      <div className="w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4">{car.title}</h2>
        <p className="mb-4">{car.description}</p>
        <p className="text-sm text-gray-500">Tags: {car.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
