import { Request, Response } from "express"

export const register = (req: Request, res: Response) => {
    res.send("register page")
}

export const login = (req: Request, res: Response) => {
    res.send("login page")
}

export const logout = (req: Request, res: Response) => {
    res.send("logout page")
}