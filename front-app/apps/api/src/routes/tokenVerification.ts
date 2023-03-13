import * as express from "express";
import {jwtHelper} from "../helper/jwtHelper";

const router = express.Router();

router.get("/", function (req, res, next) {
    let token = "";
    if (req.cookies.jwtToken) {
        token = req.cookies.jwtToken;
    } else {
        return res.status(200).json({ isAuthenticated: false });
    }

    const decode = jwtHelper.verifyToken(token);
    if (decode) {
        const token = jwtHelper.createToken();
        const newExpiresAt = jwtHelper.newExpiresAt();
        res.cookie("jwtToken", token, {
            httpOnly: true,
            expires: newExpiresAt,
        });
        return res.status(200).json({ isAuthenticated: true });
    }
});

export default router;
