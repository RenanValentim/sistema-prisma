import { FastifyInstance } from "fastify";
import { listUser } from "../src/controllers/userController";

export async function appRoutes(app: FastifyInstance) {
  app.get("/users", listUser);
}
