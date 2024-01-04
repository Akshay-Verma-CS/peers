import express from 'express';
import { getStampDutyDetails, addStampDutyDetail } from '../controllers/stampDutyController';

const router = express.Router();

// GET request for stamp duty by state and type
router.get('/:state/:dutyType', getStampDutyDetails);

// POST request to add stamp duty details
router.post('/', addStampDutyDetail);

export default router;

