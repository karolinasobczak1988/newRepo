"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsPage = void 0;
var test_1 = require("@playwright/test");
var AlertsPage = /** @class */ (function () {
    function AlertsPage(page) {
        this.page = page;
        this.alertButton = page.locator('li').filter({ hasText: 'Alerts' });
        this.buttonToSeeAlert = page.locator('#alertButton');
        this.alertButtonText = page.locator('div:has-text("Click Button to see alert Click me")').first();
        this.alertsBanner = page.getByRole('heading', { name: 'Alerts' });
        this.buttonToSeeAlert5sec = page.locator('#timerAlertButton');
        this.buttonToSeePrompt = page.locator('#promtButton');
        this.promptDialogAssertion = page.locator('#promptResult');
    }
    AlertsPage.prototype.clickOnAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertButton.waitFor({ state: 'visible' })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.alertButton.click({ timeout: 5000 })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertsPage.prototype.dialogAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialogPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialogPromise = new Promise(function (resolve) {
                            _this.page.once('dialog', function (dialog) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            // Log the alert message to the console
                                            console.log('Alert dialog message:', dialog.message());
                                            // Assert the dialog type and message
                                            (0, test_1.expect)(dialog.type()).toBe('alert');
                                            (0, test_1.expect)(dialog.message()).toBe('You clicked a button');
                                            // Accept the dialog
                                            return [4 /*yield*/, dialog.accept()];
                                        case 1:
                                            // Accept the dialog
                                            _a.sent();
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [4 /*yield*/, this.buttonToSeeAlert.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, dialogPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertsPage.prototype.dialogAlert5sec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialogPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialogPromise = new Promise(function (resolve) {
                            _this.page.once('dialog', function (dialog) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Alert dialog message:', dialog.message());
                                            //  await this.page.screenshot({ path: 'alert-5sec.png' });
                                            (0, test_1.expect)(dialog.type()).toBe('alert');
                                            (0, test_1.expect)(dialog.message()).toBe('This alert appeared after 5 seconds');
                                            return [4 /*yield*/, dialog.accept()];
                                        case 1:
                                            _a.sent();
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [4 /*yield*/, this.buttonToSeeAlert5sec.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, dialogPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertsPage.prototype.dialogPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialogPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialogPromise = new Promise(function (resolve) {
                            _this.page.once('dialog', function (dialog) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Alert dialog message:', dialog.message());
                                            (0, test_1.expect)(dialog.type()).toBe('prompt');
                                            (0, test_1.expect)(dialog.message()).toBe('Please enter your name');
                                            return [4 /*yield*/, dialog.accept('MyName')];
                                        case 1:
                                            _a.sent();
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [4 /*yield*/, this.buttonToSeePrompt.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, dialogPromise];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, (0, test_1.expect)(this.promptDialogAssertion).toHaveText('You entered MyName')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AlertsPage;
}());
exports.AlertsPage = AlertsPage;
