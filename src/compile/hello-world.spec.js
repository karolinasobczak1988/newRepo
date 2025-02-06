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
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('should visit the page and check title', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto('http://localhost:3000/'); // Your Express app URL
    yield page.waitForLoadState('load'); // Wait for the page to load
    const textElement = yield page.locator('text=Hello World'); // Find the element containing "Hello World"
    // Extract the text content of the element
    const textContent = yield textElement.textContent();
    // Compare the extracted text with the expected value
    (0, test_1.expect)(textContent).toBe('Hello World');
}));
