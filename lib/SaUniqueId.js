"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaUniqueId = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./SaUniqueId.interface"), exports);
/**
 * @class SaUniqueId (node)
 * @description
 * Implements id() method that returns a unique id that is 13 chars long
 */
exports.SaUniqueId = class {
    static id() {
        let ms = '' + new Date().getTime();
        if (ms.length < 13) {
            ms = ms.padEnd(13, '0');
        }
        // node
        let str = require('crypto').randomBytes(5).toString('hex');
        if (str.length < 10) {
            str = str.padStart(10, '0');
        }
        return `${ms}${str}`;
    }
};
