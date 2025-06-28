// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors'); 
// const appointmentRoutes = require('./routes/appointmentRoutes'); // Adjust the path as necessary
// const { default: Appointment } = require('./models/Appointment');

// dotenv.config();
// const app = express();

// const PORT = process.env.PORT || 3000;
// const MONGO_URI = process.env.MONGO_URI;

// async function startServer() {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("MongoDB connected!");

//     app.use(cors());

//     // Middleware
//     app.use(express.json());
//     app.use(express.urlencoded({ extended: false }));

//     // Routes
//     app.get("/", (req, res) => {
//       res.send("Welcome to Mini Blog App's API");
//     });

//     app.use("/api/appointments", appointmentRoutes);

//     app.listen(PORT, () => {
//       console.log(`Server is running at http://localhost:${PORT}`);
//     });

//   } catch (error) {
//     console.error("Error starting server:", error);
//     process.exit(1);
//   }
// }

// startServer();

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require("mongoose")

const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const appointmentRouter = require("./routes/appointmentRoutes")


// Load environment variables
dotenv.config();

const app = express();

// db connection
mongoose.connect(process.env.MONGO_URI, {})
.then(connection => {
  console.log("mongo db connection established")
})
.catch(error => {
  console.log("mongo db connection error : ", error)
})

// Middleware
app.use(cors( ));
app.use(express.json());

// Routes
app.get('/greeting', (req, res) => {
  res.json({ message: 'Welcome to MediLink API!' });
});

app.use("/v1/auth", authRouter)
app.use("/v1/user", userRouter)
app.use("/v1/appointments", appointmentRouter)

// app.use("/v1/reports", medicalReportsRouter)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 