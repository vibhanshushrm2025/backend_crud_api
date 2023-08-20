import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Todo_List_6_pack_programmer_project", // database name
      }
    )
    .then(() => {
      console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch((err) => {
      console.log("OH NO MONGO CONNECTION ERROR!!!!");
      console.log(err);
    });
};
