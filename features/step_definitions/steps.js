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
var exec = require("child_process").exec;
var _a = require("@cucumber/cucumber"), defineParameterType = _a.defineParameterType, When = _a.When, Given = _a.Given, Then = _a.Then;
var path = require("path");
var poManager;
var playwright = require('@playwright/test');
var test_1 = require("@playwright/test");
var POManager = require('../../pageobjects/POManager').POManager;
var assert = require("assert");
var binDir = path.resolve(__dirname, "../../bin");
console.log(binDir);
defineParameterType({
    name: "command",
    regexp: /`(.+)`/,
    transformer: function (cmd) { return cmd; },
});
When("I run {string}", function (string) {
    console.log(string);
    this.stdout = string;
});
Then('Verify order is present in the OrderHistory', function () {
    return __awaiter(this, void 0, void 0, function () {
        var ordersHistoryPage, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                // Write code here that turns the phrase above into concrete actions
                return [4 /*yield*/, this.dashboardPage.navigateToOrders()];
                case 1:
                    // Write code here that turns the phrase above into concrete actions
                    _d.sent();
                    ordersHistoryPage = poManager.getOrdersHistoryPage();
                    return [4 /*yield*/, ordersHistoryPage.searchOrderAndSelect(this.orderId)];
                case 2:
                    _d.sent();
                    _a = test_1.expect;
                    _c = (_b = this.orderId).includes;
                    return [4 /*yield*/, ordersHistoryPage.getOrderId()];
                case 3:
                    _a.apply(void 0, [_c.apply(_b, [_d.sent()])]).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
When('Enter valid details and Place the Order', function () {
    return __awaiter(this, void 0, void 0, function () {
        var ordersReviewPage, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                // Write code here that turns the phrase above into concrete actions
                return [4 /*yield*/, this.cartPage.Checkout()];
                case 1:
                    // Write code here that turns the phrase above into concrete actions
                    _b.sent();
                    ordersReviewPage = poManager.getOrdersReviewPage();
                    return [4 /*yield*/, ordersReviewPage.searchCountryAndSelect("ind", "India")];
                case 2:
                    _b.sent();
                    _a = this;
                    return [4 /*yield*/, ordersReviewPage.SubmitAndGetOrderId()];
                case 3:
                    _a.orderId = _b.sent();
                    console.log(this.orderId);
                    return [2 /*return*/];
            }
        });
    });
});
Then('Verify {string} is displayed in the Cart', function (productName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Write code here that turns the phrase above into concrete actions
                    this.cartPage = poManager.getCartPage();
                    return [4 /*yield*/, this.cartPage.VerifyProductIsDisplayed(productName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
When('Add {string} to Cart', function (productName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Write code here that turns the phrase above into concrete actions
                    this.dashboardPage = poManager.getDashboardPage();
                    return [4 /*yield*/, this.dashboardPage.searchProductAddCart(productName)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, this.dashboardPage.navigateToCart()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, function (username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var products, loginPage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    poManager = new POManager(this.page);
                    products = this.page.locator(".card-body");
                    loginPage = poManager.getLoginPage();
                    return [4 /*yield*/, loginPage.goTo()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, loginPage.validLogin(username, password)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
Then("the stdout should contain {string}", function (string) {
    assert.equal(this.stdout, string);
});
Given(/^a table step$/, function (table) {
    var expected = [
        ['Apricot', '5'],
        ['Brocolli', '2'],
        ['Cucumber', '10']
    ];
    assert.deepEqual(table.rows(), expected);
});
Given('a login to Ecommerce2 application with {string} and {string}', { timeout: 100 * 1000 }, function (username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var userName, signIn, cardTitles, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    userName = this.page.locator('#username');
                    signIn = this.page.locator("#signInBtn");
                    cardTitles = this.page.locator(".card-body a");
                    return [4 /*yield*/, this.page.goto("https://rahulshettyacademy.com/loginpagePractise/")];
                case 1:
                    _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, this.page.title()];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    //css 
                    return [4 /*yield*/, userName.fill("rahulshetty")];
                case 3:
                    //css 
                    _c.sent();
                    return [4 /*yield*/, this.page.locator("[type='password']").fill("learning")];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, signIn.click()];
                case 5:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
});
Then('Verify Error message is displayed', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, test_1.expect)(this.page.locator("[style*='block']")).toContainText('Incorrect')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
