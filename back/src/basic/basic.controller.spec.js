"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const basic_controller_1 = require("./basic.controller");
const basic_service_1 = require("./basic.service");
describe('BasicController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [basic_controller_1.BasicController],
            providers: [basic_service_1.BasicService],
        }).compile();
        controller = module.get(basic_controller_1.BasicController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=basic.controller.spec.js.map