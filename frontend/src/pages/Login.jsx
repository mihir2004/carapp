import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { loginUser } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();

  // Validation schema for the login form
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short!").required("Required"),
  });

  // Function to handle form submission
  const handleSubmit = async (values) => {
    try {
      const response = await loginUser(values); // Call the API
      console.log("Login successful:", response.data); // Debug API response

      // Set session or token if needed
      sessionStorage.setItem("isAuthenticated", true);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Login to Your Account
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mt-8 space-y-4">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <Button type="submit" label="Login" />
          </Form>
        </Formik>

        <p className="text-sm text-center text-gray-600">
          Not a user?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
