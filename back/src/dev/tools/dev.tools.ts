import { PrismaClient } from "@prisma/client";

export class DevTools {
  constructor(
    private readonly prisma: PrismaClient,
  ) {}

  async DevError(msg: string, path: string, method: string) {
    return await this.prisma.DevError.create({
      message: msg,
      path: path,
      method: method,
    })
  }
}