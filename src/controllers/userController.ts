import { prisma } from "../lib/prisma";

export async function listUser() {
  const user = await prisma.user.findMany();
  return user;
}
