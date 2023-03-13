import * as express from "express";
import * as bcrypt from "bcrypt";
import {jwtHelper} from "../helpers/jwtHelper";
import {PrismaClient} from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res, next) => {
  try {
    const user = req.body;

    if (!user.mail || !user.password) {
      throw new Error("USERS_INVALID_VALUE");
    }

    const result = await prisma.user.findFirst({
      where: {email: user.mail},
    });

    if (!result) {
      throw new Error("USERS_NOT_EXISTS_USER");
    }

    const match = await bcrypt.compare(user.password, result.password);
    if (match) {
      const jwtToken = jwtHelper.createToken();
      const newExpiresAt = jwtHelper.newExpiresAt();
      res.cookie("jwtToken", jwtToken, {
        httpOnly: true,
        expires: newExpiresAt
      }).json({
        user: {
          id: result.id
        }
      });
    } else {
      throw new Error("SERVER_ERROR");
    }
  } catch (error) {
    console.error(error);
  }
});

export default router;
