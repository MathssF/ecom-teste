"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const basic_service_1 = require("./basic.service");
describe('BasicService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [basic_service_1.BasicService],
        }).compile();
        service = module.get(basic_service_1.BasicService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=basic.service.spec.js.map