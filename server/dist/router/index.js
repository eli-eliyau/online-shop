"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categorys_1 = require("./controllers/categorys");
const router = express_1.default.Router();
router.get('/getCategoryTabs', categorys_1.getCategoryTabs);
router.post('/getCategoryProducts', categorys_1.getCategoryProducts);
exports.default = router;
