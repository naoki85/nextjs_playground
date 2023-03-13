import * as express from "express";
import * as bcrypt from "bcrypt";
import {jwtHelper} from "../helper/jwtHelper";
import {AppDataSource} from "../data-source";
import {User} from "../entity/user";

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);

router.post("/", async (req, res, next) => {
    try {
        const user = await userRepository.findOne({
            where: {mail: req.body.mail},
        });

        if (user) {
            throw new Error("USERS_ALREADY_EXISTS_USER");
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        if (!hashPassword) {
            throw new Error("SERVER_ERROR");
        }

        await userRepository.insert({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mail: req.body.mail,
            password: hashPassword,
        });

        console.log("111111");
        const jwtToken = jwtHelper.createToken();
        console.log("222222");
        const newExpiresAt = jwtHelper.newExpiresAt();
        console.log("333333");

        return res.status(200).cookie("jwtToken", jwtToken, {
            httpOnly: true,
            expires: newExpiresAt,
        }).json({});
    } catch (error) {
        console.error(error);
    }
});

export default router;
