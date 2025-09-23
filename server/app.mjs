import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}...`)
});