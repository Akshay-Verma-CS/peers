import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import stampDutyRoutes from './routes/stampDutyRoutes';
dotenv.config();


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use routes
app.use('/api/stamp-duty', stampDutyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
