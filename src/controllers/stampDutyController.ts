import { Request, Response } from 'express';
import StampDuty from '../models/StampDuty';

export const getStampDutyDetails = async (req: Request, res: Response) => {
  try {
    const { state, dutyType } = req.params;
    const details = await StampDuty.findOne({ state, dutyType });
    if (!details) return res.status(404).json({ message: "Details not found" });
    res.json(details);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const addStampDutyDetail = async (req: Request, res: Response) => {
  try {
    const newDetail = new StampDuty(req.body);
    const savedDetail = await newDetail.save();
    res.status(201).json(savedDetail);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

