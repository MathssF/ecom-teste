import { PrismaClient } from '@prisma/client';
export declare class BasicSeed {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    run(): Promise<void>;
    private seedGenres;
    private seedLanguages;
}
