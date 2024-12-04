import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();
const port = 4000;

app.use('/api/auth', authRoutes)
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
