"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var test_1 = require("@playwright/test");
exports.test = test_1.test.extend({
    username: ['standard_user', { scope: 'test' }],
    password: ['secret_sauce', { scope: 'test' }],
});
