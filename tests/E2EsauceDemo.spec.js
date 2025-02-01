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
var test_1 = require("@playwright/test");
var E2EsauceDemoPage_1 = require("../pageobjects_ts/E2EsauceDemoPage");
var fixtureSaucedemo_1 = require("../utils_ts/fixtureSaucedemo");
var E2EsauceInventoryPage_1 = require("../pageobjects_ts/E2EsauceInventoryPage");
test_1.test.describe('Login beforeAll and buy something', function () {
    var e2EsauceDemoPage;
    var e2EsauceInventoryPage;
    test_1.test.beforeAll(function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var context, page, _c, _d, _e;
        var browser = _b.browser;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, browser.newContext()];
                case 1:
                    context = _f.sent();
                    return [4 /*yield*/, context.newPage()];
                case 2:
                    page = _f.sent();
                    e2EsauceDemoPage = new E2EsauceDemoPage_1.E2EsauceDemoPage(page);
                    return [4 /*yield*/, e2EsauceDemoPage.login(fixtureSaucedemo_1.fixtureSaucedemo)];
                case 3:
                    _f.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL('https://www.saucedemo.com/inventory.html')];
                case 4:
                    _f.sent();
                    return [4 /*yield*/, context.storageState({ path: 'session.json' })];
                case 5:
                    _f.sent();
                    _d = (_c = console).log;
                    _e = ['Session storage saved with storageState:'];
                    return [4 /*yield*/, context.storageState()];
                case 6:
                    _d.apply(_c, _e.concat([_f.sent()]));
                    return [4 /*yield*/, context.close()];
                case 7:
                    _f.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)('e2e test', function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var context, page, basketIsFull, _c, _d;
        var browser = _b.browser;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, browser.newContext({
                        storageState: 'session.json', // Load the session from the saved file
                    })];
                case 1:
                    context = _e.sent();
                    return [4 /*yield*/, context.newPage()];
                case 2:
                    page = _e.sent();
                    return [4 /*yield*/, page.goto('https://www.saucedemo.com/inventory.html')];
                case 3:
                    _e.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL('https://www.saucedemo.com/inventory.html')];
                case 4:
                    _e.sent();
                    e2EsauceInventoryPage = new E2EsauceInventoryPage_1.E2EsauceInventoryPage(page);
                    basketIsFull = e2EsauceInventoryPage.basketIsFull;
                    return [4 /*yield*/, basketIsFull.screenshot({ path: 'basketIsEmptyScreenshot.png' })];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, e2EsauceInventoryPage.selectOptionDropdown(fixtureSaucedemo_1.fixtureSaucedemoInventory)];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, e2EsauceInventoryPage.selectFirstItemTop()];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, basketIsFull.screenshot({ path: 'basketIsFullScreenshot.png' })];
                case 8:
                    _e.sent();
                    _c = test_1.expect;
                    return [4 /*yield*/, page.screenshot()];
                case 9:
                    _c.apply(void 0, [_e.sent()]).toMatchSnapshot('basketIsFullScreenshot.png');
                    return [4 /*yield*/, e2EsauceInventoryPage.removeItem()];
                case 10:
                    _e.sent();
                    return [4 /*yield*/, basketIsFull.screenshot({ path: 'basketIsEmptyNowScreenshot.png' })];
                case 11:
                    _e.sent();
                    _d = test_1.expect;
                    return [4 /*yield*/, page.screenshot()];
                case 12:
                    _d.apply(void 0, [_e.sent()]).toMatchSnapshot('basketIsEmptyScreenshot.png');
                    return [2 /*return*/];
            }
        });
    }); });
});
