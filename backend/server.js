import express from "express";
import cors from 'cors'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send('API working')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});


// mongodb+srv://jdjtan01:Jn6tz0xGJyL6qH79@cluster0.lzqlcsy.mongodb.net/?
// mongodb+srv://jdjtan01:Jn6tz0xGJyL6qH79@cluster0.lzqlcsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// TO RUN, TYPE ' npm run server '