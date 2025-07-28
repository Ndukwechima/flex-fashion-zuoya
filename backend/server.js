const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRouts");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoute = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");



const app = express();

// Middlewares
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", // for local development
//       "https://flex-fashion-zuoya-tlsq.vercel.app", // your deployed frontend
//     ],
//     credentials: true, // only needed if using cookies or auth headers
//   })
// );


// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://flex-fashion-zuoya-tlsq.vercel.app", // your frontend on Vercel
];

// Use CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO FLEX-FASHION API");
});

// API Routes here
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoute);

// Admin Routes
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
