import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import { connectToDatabase } from "./db";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

console.log(PORT);

declare global {
  namespace Express {
    interface Request {
      userId: string;
      property: any;
    }
  }
}

app.use(cors());
app.use(cookieparser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use("/api/User", AdminAndUserRoutes);

// app.use("/api/properties", propertyRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log("server is running on", PORT);
});
