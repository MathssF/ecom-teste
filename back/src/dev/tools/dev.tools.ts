import { PrismaClient } from "@prisma/client";

export class DevTools {
  constructor(
    private readonly prisma: PrismaClient,
  ) {}

  async DevError(msg: string, path: string, method: string) {
    return await this.prisma.devError.create({
      data: {
        message: msg.length > 999 ? msg.substring(0, 990) + '...' : msg,
        path: path,
        method: method,
      }
    })
  }
}