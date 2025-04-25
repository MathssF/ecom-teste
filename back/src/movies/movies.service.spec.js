"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const movies_service_1 = require("./movies.service");
describe('MoviesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [movies_service_1.MoviesService],
        }).compile();
        service = module.get(movies_service_1.MoviesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=movies.service.spec.js.map