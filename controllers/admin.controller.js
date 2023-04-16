import { Admin } from "../models/admin.schema.js";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isAdmin = await Admin.find({ email, password });

    if (isAdmin.length > 0) {
      res.status(200).json({ data: isAdmin, status: "Login successfull" });
    } else {
      res.status(200).json({ data: [], status: "Wrong credentials" });
    }
  } catch (error) {
    res.status(400).json({ message: error, status: false });
  }
};
