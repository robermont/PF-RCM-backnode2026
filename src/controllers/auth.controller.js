import { generateToken } from "../data/token.js";

/*
const default_user = {       
    id: 1,       
    email: "user@email.com",       
    password: "strongPass123"     
} 
*/
export async function login(req, res) {
    const { email, password } = req.body;
    console.log("EMAIL: ",email)
    console.log("EMAIL: ",password)

    if (email === "admin@gmail.com" && password === "123456") {
        const token = generateToken({ id: 1, email: email });
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}