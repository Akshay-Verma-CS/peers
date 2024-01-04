"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StampDutySchema = new mongoose_1.default.Schema({
    state: { type: String, required: true },
    dutyType: { type: String, required: true },
    rate: { type: Number, required: true },
});
exports.default = mongoose_1.default.model('StampDuty', StampDutySchema);
