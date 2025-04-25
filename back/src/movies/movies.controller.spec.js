"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const movies_controller_1 = require("./movies.controller");
const movies_service_1 = require("./movies.service");
describe('MoviesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [movies_controller_1.MoviesController],
            providers: [movies_service_1.MoviesService],
        }).compile();
        controller = module.get(movies_controller_1.MoviesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=movies.controller.spec.js.map