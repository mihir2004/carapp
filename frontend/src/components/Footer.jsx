// src/components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} CarApp. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="mx-2 hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
