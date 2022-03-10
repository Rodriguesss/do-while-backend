import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserServices";

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = res.locals

    const service = new ProfileUserService()

    const result = await service.execute(user_id)

    return res.json(result)
  }
}

export { ProfileUserController }