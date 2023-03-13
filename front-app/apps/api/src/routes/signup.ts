import * as express from "express";
import * as bcrypt from "bcrypt";
import {jwtHelper} from "../helpers/jwtHelper";
import {PrismaClient} from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res, next) => {
  try {
    const user = await prisma.user.findFirst({
      where: {email: req.body.mail},
    });

    if (user) {
      throw new Error("USERS_ALREADY_EXISTS_USER");
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    if (!hashPassword) {
      throw new Error("SERVER_ERROR");
    }

    await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.mail,
        password: hashPassword,
      }
    });
    await prisma.user.create({data: user})

    const jwtToken = jwtHelper.createToken();
    const newExpiresAt = jwtHelper.newExpiresAt();

    return res.status(200).cookie("jwtToken", jwtToken, {
      httpOnly: true,
      expires: newExpiresAt,
    }).json({});
  } catch (error) {
    console.error(error);
  }
});

export default router;
