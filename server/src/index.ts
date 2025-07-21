import express from "express";
import { config } from "dotenv";
import auth_endpoint from "./routes/endpoint";
config();


const server_port = process.env.SERVER_PORT || 8000;

const app = express();



app.use(express.json());
app.use(auth_endpoint);


app.listen(server_port, () => {
  console.log(`server is running at http://localhost:${server_port}`);
});
