import express from "express";
import { routes } from "./routes/index";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
