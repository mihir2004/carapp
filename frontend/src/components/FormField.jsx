import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type = "text", placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default FormField;
