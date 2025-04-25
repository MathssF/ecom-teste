"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageEntity = exports.GenreEntity = exports.Basic = void 0;
class Basic {
}
exports.Basic = Basic;
class GenreEntity {
    constructor(i, n) {
        this.id = i;
        this.name = n;
    }
}
exports.GenreEntity = GenreEntity;
class LanguageEntity {
    constructor(i, en) {
        this.id = i;
        this.english_name = en;
    }
}
exports.LanguageEntity = LanguageEntity;
//# sourceMappingURL=basic.entity.js.map