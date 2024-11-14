import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { registerUser } from "../api/auth";

const SignUp = () => {
  const navigate = useNavigate();

  // Form validation schema
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password is too short").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  // Form submission function
  const handleSubmit = async (values) => {
    try {
      // Remove confirmPassword before sending to API
      const { email, password } = values;
      await registerUser({ email, password });
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data?.message || error.message
      );
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Create an Account
        </h2>

        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={signupSchema}
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
            <FormField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
            />
            <Button type="submit" label="Sign Up" />
          </Form>
        </Formik>

        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <a href="/login" className="text-blue-500 hover:underline">
            {" "}
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
