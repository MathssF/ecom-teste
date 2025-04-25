"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const trendings_service_1 = require("./trendings.service");
describe('TrendingsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [trendings_service_1.TrendingsService],
        }).compile();
        service = module.get(trendings_service_1.TrendingsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=trendings.service.spec.js.map