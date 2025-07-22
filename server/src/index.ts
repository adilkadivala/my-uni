import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import auth_endpoint from "./routes/endpoint";
config();

const server_port = process.env.SERVER_PORT || 8000;
const client_Origin = process.env.CLIENT_ORIGIN;

const app = express();

const corsOptions = {
  methods: ["Get", "Put", "Post", "Delete"],
  origin: client_Origin,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(auth_endpoint);

app.listen(server_port, () => {
  console.log(`server is running at http://localhost:${server_port}`);
});
