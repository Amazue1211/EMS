import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import dns from "dns";
import authRouter from "./routes/authRoute.js";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000
connectDB()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
}));
//API ENDPOINTS
app.get('/', (req, res)=> res.send("API is working..."))
app.use('/api/auth', authRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



