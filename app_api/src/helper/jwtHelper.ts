import * as jwt from "jsonwebtoken";

export class jwtHelper {
    static jweSecret = process.env.JWE_SECRET || "";

    static createToken() {
        const token = jwt.sign({ foo: 'bar' }, this.jweSecret, {
            expiresIn: "30d"
        });
        return token;
    }

    static verifyToken(token: string) {
        try {
            const decoded = jwt.verify(token, this.jweSecret);
            return decoded;
        } catch (err) {
            console.error(err);
        }
    }

    static newExpiresAt(): Date {
        const newExpiresAt = new Date();
        newExpiresAt.setDate(newExpiresAt.getDate() + 2);
        return newExpiresAt;
    }
}