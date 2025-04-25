"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const trendings_controller_1 = require("./trendings.controller");
const trendings_service_1 = require("./trendings.service");
describe('TrendingsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [trendings_controller_1.TrendingsController],
            providers: [trendings_service_1.TrendingsService],
        }).compile();
        controller = module.get(trendings_controller_1.TrendingsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=trendings.controller.spec.js.map