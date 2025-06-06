"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3000;
app.get("/sum", (req, res) => {
    const { a, b } = req.body;
    let sum = parseInt(a + b);
    return res.status(200).json({ sum });
});
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
