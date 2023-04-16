import { Leads } from "../models/leads.schema.js";

export const createLeads = async (req, res) => {
  const newData = new Leads(req.body);

  try {
    if (newData) {
      await newData.save();
      res.status(201).json({ data: newData, status: "Created successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: error, status: false });
  }
};

export const getAllLeads = async (req, res) => {
  try {
    const allLeads = await Leads.find();
    if (allLeads.length > 0) {
      res.status(200).json({ data: allLeads, status: "success" });
    } else {
      res.status(200).json({ data: [], status: "No data found" });
    }
  } catch (error) {
    res.status(400).json({ message: error, status: false });
  }
};
