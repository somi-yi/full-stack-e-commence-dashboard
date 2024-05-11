import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";


// * Server Configuration
dotenv.config();
const app = express(); 

app.use(cors());
app.use(helmet());
app.use(express.json());// deal with JSON data
app.use(morgan("common"));
app.use(express.urlencoded({ extended: true })); 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// * file can accessible... inside public folder...
app.use(express.static('public'));


//* ROUTES
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


//* DB Connection... 
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGO_URL, {})
    .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* ONLY ADD DATA ONE TIME */
    //AffiliateStat.insertMany(dataAffiliateStat);
    //OverallStat.insertMany(dataOverallStat);
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //Transaction.insertMany(dataTransaction);
    //User.insertMany(dataUser);


  })
    .catch((error) => { console.log("Database connection failed", error);
  });