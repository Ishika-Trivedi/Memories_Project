import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

// general setup of bodyParser so that we can send our request properly.
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors());

const CONNECTION_URL = "mongodb+srv://ishitri:ishika123@cluster0.115jojs.mongodb.net/?retryWrites=true&w=majority";

// Now we are using 5000, but later we will push it to heroku, it will automatically populate environmental variable port.
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
   .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);