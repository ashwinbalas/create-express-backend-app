import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  phone: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: String,
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
