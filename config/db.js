import mongoose from "mongoose";
mongoose.set("strictQuery", true);

export const server = async () => {
  await mongoose.connect(process.env.DB_URL);
};
