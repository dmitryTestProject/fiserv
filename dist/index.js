"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const app = express_1.default();
app.use(express_1.default.json());
app.post('/api/v1/parse', (req, res) => {
    const data = req.body.data;
    const [firstName, lastName, clientId] = utils_1.formatString2(data);
    const resData = {
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    };
    res.status(200).json(resData);
});
app.post('/api/v2/parse', (req, res) => {
    const data = req.body.data;
    const [firstName, lastName, clientId] = utils_1.formatString(data);
    const resData = {
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    };
    res.status(200).json(resData);
});
const PORT = 8800;
app.listen(PORT, () => console.log(`App is running on port ${PORT}, press CTRL + C to stop`));
//# sourceMappingURL=index.js.map