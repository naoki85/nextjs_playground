import * as express from "express";
import {jwtHelper} from "../helper/jwtHelper";

const router = express.Router();

router.delete("/", async (req, res, next) => {
    try {
        const newExpiresAt = jwtHelper.newExpiresAt();
        return res.cookie("jwtToken", "", {
            httpOnly: true,
            expires: newExpiresAt
        });
    } catch (error) {
        console.error(error);
    }
});

export default router;
