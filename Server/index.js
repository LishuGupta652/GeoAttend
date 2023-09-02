const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const env = require("dotenv").config();
const userRoutes = require("./routes/User");
const postRoutes = require("./routes/posts");
const morgan = require("morgan");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to Db " + process.env.MONGODB_URI);
});

app.use(cors());
app.use(
  morgan(
    ":date :method :url :status :res[content-length] -(Response: :response-time)"
  )
);

// MiddleWare to use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
// Index Route
app.get("/", (req, res) => {
  res.send({
    msg: "Hello there this app is working totally fine",
    route: "/api/user/register",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
