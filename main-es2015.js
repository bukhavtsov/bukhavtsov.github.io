(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-main></app-main>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/add-form/add-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/add-form/add-form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\" text-center border-light p-5 form-horizontal\" [formGroup]=\"addForm\" (ngSubmit)=\"addNews(addForm.value)\">\n    <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Add News</h1>\n    <input class=\"form-control mb-4\" id=\"title\" type=\"text\" formControlName=\"title\" placeholder=\"Title\" required=\"\"\n        autofocus=\"\">\n    <input class=\"form-control mb-4\" id=\"type\" type=\"text\" formControlName=\"type\" placeholder=\"Type\" required=\"\"\n        autofocus=\"\">\n    <textarea class=\"form-control mb-4\" id=\"text\" type=\"text\" formControlName=\"text\" placeholder=\"Text...\"></textarea>\n    <input class=\"form-control mb-4\" id=\"date\" type=\"date\" formControlName=\"date\">\n    <input class=\"form-control mb-4\" id=\"image\" type=\"text\" formControlName=\"image\" placeholder=\"Image url\" required=\"\"\n        autofocus=\"\">\n    <button class=\"btn btn-lg btn-dark btn-block mb-4\" type=\"submit\">Create</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/admin-panel/admin-panel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/admin-panel/admin-panel.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\"\n      aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse \" id=\"navbarTogglerDemo01\">\n      <ul class=\"navbar-nav\">\n        <li class=\"p-2\">\n          <select class=\"custom-select\">\n            <option selected>Select news Source</option>\n            <option value=\"1\">BBC</option>\n            <option value=\"2\">Google news</option>\n            <option value=\"3\">Local</option>\n          </select>\n        </li>\n        <li class=\"p-2\">\n          <form class=\"form-inline\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Type your text...\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-danger my-2 my-sm-0\" type=\"submit\">Filter</button>\n          </form>\n        </li>\n        <li class=\"pl-5 pt-3\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\n          <label class=\"form-check-label text-dark\" for=\"defaultCheck1\">\n            only created by me\n          </label>\n        </li>\n      </ul>\n      <form class=\"ml-auto\">\n        <button [routerLink]=\"['/news/add']\" routerLinkActive=\"router-link-active\"  class=\"btn btn-outline-danger\" type=\"submit\">Add Article</button>\n      </form>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/edit-form/edit-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/edit-form/edit-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\" text-center border-light p-5 form-horizontal\" [formGroup]=\"editForm\"\n    (ngSubmit)=\"editNews(editForm.value)\">\n    <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Edit News</h1>\n    <input class=\"form-control mb-4\" id=\"title\" type=\"text\" formControlName=\"title\" placeholder=\"Title\" required=\"\"\n        autofocus=\"\">\n    <input class=\"form-control mb-4\" id=\"type\" type=\"text\" formControlName=\"type\" placeholder=\"Type\" required=\"\"\n        autofocus=\"\">\n    <input class=\"form-control mb-4\" id=\"date\" type=\"date\" formControlName=\"date\">\n    <button class=\"btn btn-lg btn-dark btn-block mb-4\" type=\"submit\">Edit</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-list/news-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-list/news-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"!this.hideNewsList\">\n    <div *ngFor=\"let news of this.svcNews.getNewsList()\" class=\"row p-2\">\n        <div class=\"col-sm-4\">\n            <a [routerLink]=\"['/news', news.id]\" routerLinkActive=\"\"><img class=\"img-thumbnail\"\n                    src=\"{{news.image}}\"></a>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"module\">\n                <h5>{{news.title}}</h5>\n                <p class=\"collapse \" id=\"collapse{{news.id}}\" aria-expanded=\"false\">\n                    {{news.text}}\n                </p>\n                <a role=\"button\" class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse{{news.id}}\"\n                    aria-expanded=\"false\" aria-controls=\"collapse{{news.id}}\"></a>\n            </div>\n        </div>\n        <div class=\"col-sm-2 small\">{{news.date}}</div>\n        <div class=\"col-sm-2\">\n            <button [routerLink]=\"['/news/edit', news.id]\" type=\"button\"\n                class=\"btn btn-secondary btn-sm btn-block\">Edit</button>\n            <button (click)=\"this.svcNews.remove(news.id)\" type=\"button\"\n                class=\"btn btn-danger btn-sm btn-block\">Delete</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/view-news/view-news.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/view-news/view-news.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">{{this.news.title}}</h1>\n\n<div class=\"d-flex justify-content-center\">\n    <img src=\"{{this.news.image}}\" class=\"img-fluid\">\n</div>\n<div class=\"blog-main\">\n    <div class=\"blog-post\">\n        <p class=\"blog-post-meta\">{{this.news.date}}</p>\n        {{this.news.text}}\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"pt-4  border-top\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md\">\n      <small class=\"d-block mb-3 text-muted\">© 2017-2019</small>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Features</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>About</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\n      </ul>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"sticky-top text-white\">\n  <nav class=\"navbar bg-danger\">\n    <a class=\"navbar-brand text-light\" [routerLink]=\"['/news']\">\n      <img src=\"assets/images/newspaper.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top inverted\" alt=\"\">\n      NEWS\n    </a>\n    <form class=\"form-inline my-2 \">\n      <p class=\"my-2 my-sm-0 px-3\">\n        <img src=\"https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/person-fill.svg\" class=\"inverted\" width=\"30\"\n          height=\"30\" alt=\"\">\n        User</p>\n      <button class=\"btn btn-danger active my-2 my-sm-0\" type=\"submit\">Log out</button>\n    </form>\n  </nav>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"mx-auto\">\n      <h2>Source</h2>\n    </div>\n  </nav>\n  <app-admin-panel></app-admin-panel>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main/main.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main/main.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n  <div class=\"album py-5 bg-light\">\n    <div class=\"container\">\n      <app-news></app-news>\n    </div>\n  </div>\n</main>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _news_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/view-news/view-news.component */ "./src/app/news/view-news/view-news.component.ts");
/* harmony import */ var _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news-list/news-list.component */ "./src/app/news/news-list/news-list.component.ts");
/* harmony import */ var _news_admin_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/admin/edit-form/edit-form.component */ "./src/app/news/admin/edit-form/edit-form.component.ts");
/* harmony import */ var _news_admin_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/admin/add-form/add-form.component */ "./src/app/news/admin/add-form/add-form.component.ts");







const routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsListComponent"] },
    { path: 'news/edit/:id', component: _news_admin_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_5__["EditFormComponent"] },
    { path: 'news/add', component: _news_admin_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_6__["AddFormComponent"] },
    { path: 'news/:id', component: _news_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_3__["ViewNewsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_news_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/news-filter.pipe */ "./src/app/shared/news-filter.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/main/main.component */ "./src/app/shared/main/main.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_admin_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/admin/edit-form/edit-form.component */ "./src/app/news/admin/edit-form/edit-form.component.ts");
/* harmony import */ var _news_admin_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news/admin/add-form/add-form.component */ "./src/app/news/admin/add-form/add-form.component.ts");
/* harmony import */ var _news_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news/view-news/view-news.component */ "./src/app/news/view-news/view-news.component.ts");
/* harmony import */ var _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news/news-list/news-list.component */ "./src/app/news/news-list/news-list.component.ts");
/* harmony import */ var _news_admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news/admin/admin-panel/admin-panel.component */ "./src/app/news/admin/admin-panel/admin-panel.component.ts");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _shared_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
            _shared_news_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["NewsFilterPipe"],
            _news_admin_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_11__["EditFormComponent"],
            _news_admin_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_12__["AddFormComponent"],
            _news_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_13__["ViewNewsComponent"],
            _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_14__["NewsListComponent"],
            _news_admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_15__["AdminPanelComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/news/admin/add-form/add-form.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/news/admin/add-form/add-form.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvYWRtaW4vYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/news/admin/add-form/add-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/admin/add-form/add-form.component.ts ***!
  \***********************************************************/
/*! exports provided: AddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormComponent", function() { return AddFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/news.service */ "./src/app/shared/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let AddFormComponent = 
/**
 * @author Artsiom_Bukhautsou
 */
class AddFormComponent {
    constructor(svcNews, formBuilder, router) {
        this.svcNews = svcNews;
        this.formBuilder = formBuilder;
        this.router = router;
        this.initForm();
    }
    ngOnInit() {
    }
    /**
     * initAddForm initialize addForm by default values
     */
    initForm() {
        this.addForm = this.formBuilder.group({
            date: '',
            type: '',
            title: '',
            text: '',
            image: '',
        });
    }
    /**
     * Submit value of addForm into View list
     */
    addNews(news) {
        news.id = this.svcNews.getNews(this.svcNews.getNewsList().length - 1).id + 1;
        this.svcNews.add(news);
        this.router.navigate(['/news']);
    }
};
AddFormComponent.ctorParameters = () => [
    { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/add-form/add-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-form.component.scss */ "./src/app/news/admin/add-form/add-form.component.scss")).default]
    })
    /**
     * @author Artsiom_Bukhautsou
     */
], AddFormComponent);



/***/ }),

/***/ "./src/app/news/admin/admin-panel/admin-panel.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/news/admin/admin-panel/admin-panel.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvYWRtaW4vYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/news/admin/admin-panel/admin-panel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/news/admin/admin-panel/admin-panel.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdminPanelComponent = class AdminPanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/admin-panel/admin-panel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-panel.component.scss */ "./src/app/news/admin/admin-panel/admin-panel.component.scss")).default]
    })
], AdminPanelComponent);



/***/ }),

/***/ "./src/app/news/admin/edit-form/edit-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/news/admin/edit-form/edit-form.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvYWRtaW4vZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/news/admin/edit-form/edit-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/news/admin/edit-form/edit-form.component.ts ***!
  \*************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/news.service */ "./src/app/shared/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let EditFormComponent = class EditFormComponent {
    constructor(svcNews, formBuilder, activatedRoute, router) {
        this.svcNews = svcNews;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.news = this.svcNews.getNews(Number(id));
        this.initForm();
    }
    ngOnInit() {
    }
    initForm() {
        this.editForm = this.formBuilder.group({
            id: this.news.id,
            date: this.news.date,
            type: this.news.type,
            title: this.news.title,
            image: this.news.image,
        });
    }
    editNews(news) {
        this.svcNews.edit(news);
        this.router.navigate(['/news']);
    }
};
EditFormComponent.ctorParameters = () => [
    { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/admin/edit-form/edit-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-form.component.scss */ "./src/app/news/admin/edit-form/edit-form.component.scss")).default]
    })
], EditFormComponent);



/***/ }),

/***/ "./src/app/news/news-list/news-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/news/news-list/news-list.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".module .collapse, .module .collapsing {\n  height: 9rem;\n}\n\n.module .collapse {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n.module .collapse:before {\n  content: \" ...\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.module .collapse.show {\n  height: auto;\n}\n\n.module .collapse.show:before {\n  display: none;\n}\n\n.module a.collapsed:after {\n  content: \"read more..\";\n}\n\n.module a:not(.collapsed):after {\n  content: \"read less..\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1a2hhdXRzb3UvYW5ndWxhci9idWtoYXV0c291L25ld3MvY2xpZW50L3NyYy9hcHAvbmV3cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZSAuY29sbGFwc2UsIC5tb2R1bGUgLmNvbGxhcHNpbmcge1xuICAgIGhlaWdodDogOXJlbTtcbiAgfVxuICBcbiAgLm1vZHVsZSAuY29sbGFwc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAubW9kdWxlIC5jb2xsYXBzZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgLi4uJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICAubW9kdWxlIC5jb2xsYXBzZS5zaG93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5tb2R1bGUgLmNvbGxhcHNlLnNob3c6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAubW9kdWxlIGEuY29sbGFwc2VkOmFmdGVyIHtcbiAgICBjb250ZW50OiAncmVhZCBtb3JlLi4nO1xuICB9XG4gIFxuICAubW9kdWxlIGE6bm90KC5jb2xsYXBzZWQpOmFmdGVyIHtcbiAgICBjb250ZW50OiAncmVhZCBsZXNzLi4nO1xuICB9IiwiLm1vZHVsZSAuY29sbGFwc2UsIC5tb2R1bGUgLmNvbGxhcHNpbmcge1xuICBoZWlnaHQ6IDlyZW07XG59XG5cbi5tb2R1bGUgLmNvbGxhcHNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZHVsZSAuY29sbGFwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCIgLi4uXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLm1vZHVsZSAuY29sbGFwc2Uuc2hvdyB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1vZHVsZSAuY29sbGFwc2Uuc2hvdzpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9kdWxlIGEuY29sbGFwc2VkOmFmdGVyIHtcbiAgY29udGVudDogXCJyZWFkIG1vcmUuLlwiO1xufVxuXG4ubW9kdWxlIGE6bm90KC5jb2xsYXBzZWQpOmFmdGVyIHtcbiAgY29udGVudDogXCJyZWFkIGxlc3MuLlwiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/news/news-list/news-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/news/news-list/news-list.component.ts ***!
  \*******************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/news.service */ "./src/app/shared/news.service.ts");



let NewsListComponent = class NewsListComponent {
    constructor(svcNews) {
        this.svcNews = svcNews;
        this.isAdmin = true;
    }
    ngOnInit() {
    }
};
NewsListComponent.ctorParameters = () => [
    { type: src_app_shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
NewsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./news-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-list/news-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./news-list.component.scss */ "./src/app/news/news-list/news-list.component.scss")).default]
    })
], NewsListComponent);



/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/news.service */ "./src/app/shared/news.service.ts");



let NewsComponent = class NewsComponent {
    constructor(svcNews) {
        this.svcNews = svcNews;
    }
    ngOnInit() {
    }
};
NewsComponent.ctorParameters = () => [
    { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
NewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/news/view-news/view-news.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/news/view-news/view-news.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Mvdmlldy1uZXdzL3ZpZXctbmV3cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/news/view-news/view-news.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/news/view-news/view-news.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNewsComponent", function() { return ViewNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/news.service */ "./src/app/shared/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ViewNewsComponent = class ViewNewsComponent {
    constructor(svcNews, route) {
        let id = route.snapshot.paramMap.get('id');
        this.news = svcNews.getNews(Number(id));
    }
    ngOnInit() {
    }
};
ViewNewsComponent.ctorParameters = () => [
    { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewNewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/view-news/view-news.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-news.component.scss */ "./src/app/news/view-news/view-news.component.scss")).default]
    })
], ViewNewsComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inverted {\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1a2hhdXRzb3UvYW5ndWxhci9idWtoYXV0c291L25ld3MvY2xpZW50L3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52ZXJ0ZWQge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cbiIsIi5pbnZlcnRlZCB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/main/main.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/main/main.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main/main.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.component.scss */ "./src/app/shared/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/shared/news-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/news-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: NewsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFilterPipe", function() { return NewsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NewsFilterPipe = class NewsFilterPipe {
    transform(news, search = '') {
        if (!search.trim()) {
            return news;
        }
        return news.filter(news => {
            return news.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
        });
    }
};
NewsFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'newsFilter'
    })
], NewsFilterPipe);



/***/ }),

/***/ "./src/app/shared/news.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/news.service.ts ***!
  \****************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NewsService = class NewsService {
    constructor() {
        this.newsList = [];
        this.newsList.push({ "id": 0, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 1, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 2, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 3, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 4, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 5, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 6, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 7, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 8, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 9, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 10, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 11, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 12, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 13, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 14, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 15, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 16, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 17, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 18, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 19, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 20, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 21, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 22, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" }, { "id": 23, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" });
    }
    getNewsList() {
        return this.newsList;
    }
    getNews(id) {
        return this.newsList.find(news => news.id === id);
    }
    remove(id) {
        this.newsList = this.newsList.filter(event => event.id !== id);
    }
    add(news) {
        this.newsList.push(news);
    }
    edit(news) {
        const id = this.newsList.findIndex((event => event.id === news.id));
        this.newsList[id] = news;
    }
};
NewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bukhautsou/angular/bukhautsou/news/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map