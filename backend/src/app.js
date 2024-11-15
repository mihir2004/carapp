import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies and authentication headers
  })
);

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Routes
app.use("/api/auth", authRoutes);

export default app;
