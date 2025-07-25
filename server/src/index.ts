import express from "express";
import { Request, Response } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import auth_endpoint from "./routes/endpoint";
config();

const server_port = process.env.SERVER_PORT || 8000;
const client_Origin = process.env.CLIENT_ORIGIN;

const app = express();

const corsOptions = {
  methods: ["GET", "PUT", "POST", "DELETE"],
  origin: client_Origin,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(auth_endpoint);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to my uni-server");
});

app.listen(server_port, () => {
  console.log(`server is running at http://localhost:${server_port}`);
});
