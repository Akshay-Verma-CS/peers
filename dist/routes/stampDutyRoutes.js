"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stampDutyController_1 = require("../controllers/stampDutyController");
const router = express_1.default.Router();
// GET request for stamp duty by state and type
router.get('/:state/:dutyType', stampDutyController_1.getStampDutyDetails);
// POST request to add stamp duty details
router.post('/', stampDutyController_1.addStampDutyDetail);
exports.default = router;
