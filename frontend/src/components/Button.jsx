const Button = ({ label, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
