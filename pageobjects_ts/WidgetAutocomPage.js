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
exports.WidgetAutocomPage = void 0;
var test_1 = require("@playwright/test");
var WidgetAutocomPage = /** @class */ (function () {
    function WidgetAutocomPage(page) {
        this.page = page;
        this.multipleColorWidget = page.locator('#autoCompleteMultipleInput');
        //locator('.auto-complete__value-container').first();
        //('#autoCompleteMultipleContainer');
        this.automcompleteButton = page.getByText('Auto Complete');
        this.suggestionList = page.locator('.auto-complete__menu');
        this.selectedValues = page.locator('.auto-complete__multi-value__label');
        this.blueValue = page.locator(".auto-complete__option:text(\"".concat('Blue', "\")"));
        this.blackValue = page.locator(".auto-complete__option:text(\"".concat('Black', "\")"));
    }
    WidgetAutocomPage.prototype.selectTypeWidget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.automcompleteButton.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.multipleColorWidget.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.multipleColorWidget.fill('bl')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.suggestionList.waitFor()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, (0, test_1.expect)(this.suggestionList).toBeVisible()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.blueValue.click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WidgetAutocomPage.prototype.selectTypeWidget2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.multipleColorWidget.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.multipleColorWidget.fill('bl')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.suggestionList.waitFor()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, (0, test_1.expect)(this.suggestionList).toBeVisible()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.blackValue.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WidgetAutocomPage.prototype.getSelectedOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectedValues.allTextContents()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return WidgetAutocomPage;
}());
exports.WidgetAutocomPage = WidgetAutocomPage;
