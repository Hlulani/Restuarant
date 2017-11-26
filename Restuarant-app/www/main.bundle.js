webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDetailsComponent = (function () {
    function AdminDetailsComponent(router) {
        this.router = router;
    }
    AdminDetailsComponent.prototype.processOrder = function () {
        console.log('test');
        this.router.navigate(['./processing-orders']);
    };
    return AdminDetailsComponent;
}());
AdminDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-admin-details',
        template: __webpack_require__(302),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AdminDetailsComponent);

var _a;
//# sourceMappingURL=admin-details.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminWelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminWelcomeComponent = (function () {
    function AdminWelcomeComponent(router) {
        this.router = router;
    }
    AdminWelcomeComponent.prototype.placeOrder = function () {
        this.router.navigate(['./admin-details']);
    };
    return AdminWelcomeComponent;
}());
AdminWelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-admin-welcome',
        template: __webpack_require__(303),
        styles: [__webpack_require__(249)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AdminWelcomeComponent);

var _a;
//# sourceMappingURL=admin-welcome.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_process_orders_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessingOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessingOrdersComponent = (function () {
    function ProcessingOrdersComponent(db, router, processOrderService) {
        this.router = router;
        this.processOrderService = processOrderService;
        this.isCollapsed = false;
        this.orders = db.list('resturents/hrll3/orders');
        console.log('test');
        // processOrderService.cartObserver.next(processOrderService.cart);
    }
    ProcessingOrdersComponent.prototype.orderDetails = function () {
        this.router.navigate(['']);
    };
    ProcessingOrdersComponent.prototype.deleteProduct = function (order) {
        this.processOrderService.deleteProductFromOrder(order);
    };
    return ProcessingOrdersComponent;
}());
ProcessingOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-processing-orders',
        template: __webpack_require__(304),
        styles: [__webpack_require__(250)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_process_orders_service__["a" /* ProcessOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_process_orders_service__["a" /* ProcessOrderService */]) === "function" && _c || Object])
], ProcessingOrdersComponent);

var _a, _b, _c;
//# sourceMappingURL=processing-orders.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompleteOrderComponent = (function () {
    function CompleteOrderComponent(router) {
        this.router = router;
    }
    CompleteOrderComponent.prototype.closeButton = function () {
        this.router.navigate(['/']);
    };
    return CompleteOrderComponent;
}());
CompleteOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-complete-order',
        template: __webpack_require__(305),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], CompleteOrderComponent);

var _a;
//# sourceMappingURL=complete-order.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(db, router) {
        this.router = router;
        this.menus = db.list('resturents/hrll3/menus/Beverages');
    }
    MenuComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/categories']);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(306),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_menu_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddShoppingCartComponent = (function () {
    function AddShoppingCartComponent(router, menuServices) {
        var _this = this;
        this.router = router;
        this.menuServices = menuServices;
        this.menus = menuServices.getMenus();
        menuServices.cartObserver.subscribe(function (cart) {
            _this.totalQuantity = cart.length;
        });
        menuServices.cartObserver.next(menuServices.cart);
    }
    AddShoppingCartComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/categories']);
    };
    AddShoppingCartComponent.prototype.addToCart = function (menu) {
        this.menuServices.add(menu);
        console.log("Test" + this.menus);
    };
    AddShoppingCartComponent.prototype.cartProceed = function () {
        this.router.navigate(['/shopping-cart']);
    };
    return AddShoppingCartComponent;
}());
AddShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-add-shopping-cart',
        template: __webpack_require__(307),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], AddShoppingCartComponent);

var _a, _b;
//# sourceMappingURL=add-shopping-cart.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_menu_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_order_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(db, router, menuServices, orderService) {
        var _this = this;
        this.router = router;
        this.menuServices = menuServices;
        this.orderService = orderService;
        menuServices.cartObserver.subscribe(function (cart) {
            _this.menus = cart;
            _this.totalPrice = cart.reduce(function (c, menu) {
                return c + menu.price;
            }, 0);
        });
        menuServices.cartObserver.next(menuServices.cart);
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        console.log(this.menu);
        console.log(this.order);
    };
    ShoppingCartComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/add-shopping-cart']);
    };
    ShoppingCartComponent.prototype.deleteProduct = function (menu) {
        this.menuServices.deleteProductFromCart(menu);
    };
    ShoppingCartComponent.prototype.proceed = function (menus) {
        this.orderService.create(menus);
        this.router.navigate(['/complete-order']);
    };
    ShoppingCartComponent.prototype.getTotalPrice = function () {
        var totalCost = [];
        var quantity = [];
        var intPrice;
        var intQuantity;
        this.menus.forEach(function (item) {
            intPrice = item.price;
            intQuantity = item.quantity;
            totalCost.push(intPrice);
            quantity.push(intQuantity);
        });
        this.totalPrice = totalCost.length + 1;
        return this.totalPrice;
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(155),
        styles: [__webpack_require__(127)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_menu_service__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_order_service__["a" /* OrderService */]) === "function" && _d || Object])
], ShoppingCartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    WelcomeComponent.prototype.placeOrder = function () {
        this.router.navigate(['/categories']);
    };
    WelcomeComponent.prototype.goToAdmin = function () {
        this.router.navigate(['/admin-welcome']);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(308),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessOrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProcessOrderService = (function () {
    function ProcessOrderService(db) {
        var _this = this;
        this.menuObserver = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        db.list('resturents/hrll3/orders').subscribe(function (c) { return _this.menuObserver.next(c); });
        this.cart = [];
        this.cartObserver = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cartObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(this.cart);
    }
    ProcessOrderService.prototype.deleteProductFromOrder = function (order) {
        var reduced = this.cart.reduce(function (prev, curr) {
            if (curr.$key === order.$key && prev.seen === false) {
                prev.seen = true;
            }
            else {
                prev.cart.push(curr);
            }
            return prev;
        }, { seen: false, cart: [] });
        this.cart = reduced.cart;
        this.cartObserver.next(this.cart);
    };
    return ProcessOrderService;
}());
ProcessOrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProcessOrderService);

var _a;
//# sourceMappingURL=process-orders.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyB5pUiQ2UcmHJA3xwz1FpoOwpf0ZfuNDBQ',
        authDomain: 'resturent-1b0b2.firebaseapp.com',
        databaseURL: 'https://resturent-1b0b2.firebaseio.com',
        projectId: 'resturent-1b0b2',
        storageBucket: 'resturent-1b0b2.appspot.com',
        messagingSenderId: '1008653708308'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global\">\n      <div class=\"thing back\" (click)=\"onBackClicked()\">\n        <i class=\"material-icons\" style=\"font-size: 34px\">arrow_back</i>\n      </div>\n      <span style=\"font-size:18px;\">No. of items in the Cart</span>\n    </div>\n  </div>\n\n\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>Quantity Amount</th>\n        <th>Product Name</th>\n        <th>Product Price</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let menu of menus\">\n        <td>\n          <h4>{{menu.name}}</h4>\n        </td>\n        <td>\n          <h4>{{menu.price}}</h4>\n        </td>\n        <td><button (click)=\"deleteProduct(menu)\" class=\"btn btn-xs btn-danger\">Remove</button></td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"col-sm-3\"><strong><h4>Total: R{{totalPrice}}</h4></strong></div>\n  <div class=\"button-global  btn btn-lg btn-primary\" (click)=\"proceed(menus)\">Proceed to order</div>\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 174;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_welcome_welcome_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Categories_categories_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_menu_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shopping_cart_add_shopping_cart_add_shopping_cart_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_complete_order_complete_order_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_admin_admin_welcome_admin_welcome_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_components_admin_admin_details_admin_details_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_admin_processing_orders_processing_orders_component__ = __webpack_require__(102);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__components_Categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_4__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'add-shopping-cart', component: __WEBPACK_IMPORTED_MODULE_5__components_shopping_cart_add_shopping_cart_add_shopping_cart_component__["a" /* AddShoppingCartComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'complete-order', component: __WEBPACK_IMPORTED_MODULE_7__components_complete_order_complete_order_component__["a" /* CompleteOrderComponent */] },
    { path: 'admin-welcome', component: __WEBPACK_IMPORTED_MODULE_8_app_components_admin_admin_welcome_admin_welcome_component__["a" /* AdminWelcomeComponent */] },
    { path: 'admin-details', component: __WEBPACK_IMPORTED_MODULE_9_app_components_admin_admin_details_admin_details_component__["a" /* AdminDetailsComponent */] },
    { path: 'processing-orders', component: __WEBPACK_IMPORTED_MODULE_10_app_components_admin_processing_orders_processing_orders_component__["a" /* ProcessingOrdersComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(300),
        styles: [__webpack_require__(246)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_welcome_welcome_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Categories_categories_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_angularfire2__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_menu_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shopping_cart_add_shopping_cart_add_shopping_cart_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shopping_cart_shopping_cart_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_complete_order_complete_order_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_shopping_cart_order_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_services_order_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_components_admin_admin_welcome_admin_welcome_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_components_admin_admin_details_admin_details_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_components_admin_processing_orders_processing_orders_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_services_process_orders_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_8__components_Categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'add-shopping-cart', component: __WEBPACK_IMPORTED_MODULE_14__components_shopping_cart_add_shopping_cart_add_shopping_cart_component__["a" /* AddShoppingCartComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_15__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'complete-order', component: __WEBPACK_IMPORTED_MODULE_16__components_complete_order_complete_order_component__["a" /* CompleteOrderComponent */] },
    { path: 'admin-welcome', component: __WEBPACK_IMPORTED_MODULE_19_app_components_admin_admin_welcome_admin_welcome_component__["a" /* AdminWelcomeComponent */] },
    { path: 'admin-details', component: __WEBPACK_IMPORTED_MODULE_20_app_components_admin_admin_details_admin_details_component__["a" /* AdminDetailsComponent */] },
    { path: 'processing-orders', component: __WEBPACK_IMPORTED_MODULE_21_app_components_admin_processing_orders_processing_orders_component__["a" /* ProcessingOrdersComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_Categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_shopping_cart_add_shopping_cart_add_shopping_cart_component__["a" /* AddShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_complete_order_complete_order_component__["a" /* CompleteOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_components_shopping_cart_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_components_admin_admin_welcome_admin_welcome_component__["a" /* AdminWelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20_app_components_admin_admin_details_admin_details_component__["a" /* AdminDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21_app_components_admin_processing_orders_processing_orders_component__["a" /* ProcessingOrdersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_18_app_services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_22_app_services_process_orders_service__["a" /* ProcessOrderService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_order_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderComponent = (function () {
    function OrderComponent(db, router, orderServices) {
        var _this = this;
        this.router = router;
        this.orderServices = orderServices;
        orderServices.cartObserver.subscribe(function (cart) {
            _this.orders = cart;
            _this.totalPrice = cart.reduce(function (c, order) {
                return c + order.price;
            }, 0);
        });
        orderServices.cartObserver.next(orderServices.cart);
    }
    OrderComponent.prototype.ngOnInit = function () {
        console.log(this.order);
    };
    OrderComponent.prototype.addToOrder = function (order) {
        // this.orderServices.add(order);
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-order',
        template: __webpack_require__(155),
        styles: [__webpack_require__(127)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_order_service__["a" /* OrderService */]) === "function" && _c || Object])
], OrderComponent);

var _a, _b, _c;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=Order.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".col-center-block {\n  float: none;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".complete-height {\n  text-align: center;\n  height: 100%;\n  background-color: #FFB03B;\n  color: #fff; }\n\n.sub {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".image-size {\n  width: 24px;\n  height: 30px; }\n\n.space-div {\n  padding-right: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".col-center-block {\n  padding: 40px;\n  text-align: center; }\n\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.space-margin {\n  margin-bottom: 40px; }\n\n.complete-height {\n  height: 100%;\n  background-image: url(" + __webpack_require__(342) + "); }\n\n.centering {\n  float: none;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global\">\n      <div class=\"thing back\" (click)=\"onBackClicked()\">\n        <i class=\"material-icons\" style=\"font-size: 34px\">arrow_back</i>\n      </div>\n      <span style=\"font-size:18px;\"> Menu Catagories</span>\n    </div>\n  </div>\n\n  <section class=\"section-holder\">\n    <article>\n      <div class=\"lead-text\">Choose a category</div>\n    </article>\n    <section class=\"text\" *ngFor=\"let item of items | async\">\n      <article id=\"#category-item\" class=\"catagories-item\" [ngStyle]=\"{background: 'url('+item.image+') no-repeat center'}\">\n        <section (click)=\"selectCategories()\" class=\"name\">\n          {{item.name}}\n        </section>\n      </article>\n    </section>\n  </section>\n</div>\n"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global \">\n      <div class=\"logo\" style=\"margin-top:7px\">\n        <i class=\"material-icons\" style=\"font-size:30px;\">Restaurant-admin</i></div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <h2>Details for:</h2>\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block button-global space-margin\" (click)=\"processOrder()\">Processing Orders</button>\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block button-global space-margin\">Pending Orders</button>\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block button-global space-margin\">Completed Orders</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global \">\n      <div class=\"logo\" style=\"margin-top:7px\">\n        <i class=\"material-icons\" style=\"font-size:30px;\">restaurant-admin</i></div>\n    </div>\n  </div>\n  <div class=\"container centering\">\n    <h1 class=\"text-center space-margin\">YummyEats Admin</h1>\n    <p class=\"text-center space-margin\">We do it right!</p>\n    <div id=#place-order class=\"button-global  btn btn-lg btn-primary text-center space-margin\" (click)=\"placeOrder()\">Review Orders</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global \">\n      <div class=\"logo\" style=\"margin-top:7px\">\n        <i class=\"material-icons\" style=\"font-size:30px;\">Processing Orders</i></div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div *ngFor=\"let order of orders | async\" style=\"background-color:#FFB03B; margin-bottom:40px; padding:4px;\">\n      <div *ngFor=\" let menu of order.menus \" (click)=\"isCollapsed=! isCollapsed \" style=\"display:inline-block; margin:4px \">\n        <div class=\"card \" style=\"width: 20rem; \">\n          <img class=\"card-img-top \" src=\"{{menu.image}} \" alt=\"Card image cap \">\n          <div class=\"card-body \" style=\"min-height:160px; padding:12px;\">\n            <h4 class=\"card-title \">{{ menu.name }}</h4>\n            <p class=\"card-text \">{{ menu.description }}</p>\n            <p class=\"card-text \">R {{ menu.price }}</p>\n          </div>\n        </div>\n      </div>\n      <button type=\"button \" class=\"btn btn-primary btn-lg btn-block button-global space-margin \">Notifications</button>\n      <button type=\"button \" class=\"btn btn-primary btn-lg btn-block button-global space-margin \" (click)=\"deleteProduct(order) \">complete</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global \">\n      <div class=\"logo\" style=\"margin-top:7px\">\n        <i class=\"material-icons\" style=\"font-size:30px;\">restaurant</i></div>\n    </div>\n  </div>\n\n  <div class=\"modal-content\">\n    <div class=\"modal-header complete-height\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <h4 class=\"modal-title \">Thank you for your order</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Oh! Yeah!!</strong></p>\n      <p>Thank for sending your order, your food wil be coming soon!!!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"button-global  btn btn-lg btn-primary text-center space-margin\" data-dismiss=\"modal\" (click)=\"closeButton()\">Close</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global\">\n      <div class=\"thing back\" (click)=\"onBackClicked()\">\n        <i class=\"material-icons\" style=\"font-size: 34px\">arrow_back</i>\n      </div>\n      <span style=\"font-size:18px;\">For all your orders here</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container-fluid\"></div>\n    <div class=\"col-sm-3\" *ngFor=\"let menu of menus | async\">\n      <div><img [src]=\"menu.image\" class=\"img-thumbnail\" alt=\"Generic placeholder image\" /></div>\n      <h2>{{ menu.name}}</h2>\n      <p class=\"text-muted\">{{menu.description}}</p>\n      <p class=\"text-muted\"><strong>{{menu.rand}}</strong><strong>{{menu.price}}</strong></p>\n      <div class=\"button-global  btn btn-lg btn-primary\">Add to order</div>\n    </div>\n    <div class=\"row subtext\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global\">\n      <div class=\"thing back\" (click)=\"onBackClicked()\">\n        <i class=\"material-icons\" style=\"font-size: 34px\">arrow_back</i>\n      </div>\n      <span class=\"space-div text-fonts \">For all your orders here</span>\n      <img (click)=\"cartProceed()\" src=\"../../../../assets/Shopping-cart-icon.png\" class=\"img-thumbnail image-size\" /> {{totalQuantity}}\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container-fluid\"></div>\n    <div class=\"col-sm-3\" *ngFor=\"let menu of menus | async\">\n      <div><img [src]=\"menu.image\" class=\"img-thumbnail\" alt=\"Generic placeholder image\" /></div>\n      <h2>{{ menu.name}}</h2>\n      <p class=\"text-muted\">{{menu.description}}</p>\n      <p class=\"text-muted\"><strong>{{menu.rand}}</strong><strong>{{menu.price}}</strong></p>\n      <div id=\"#add-to-cart\" class=\"button-global  btn btn-lg btn-primary\" (click)=\"addToCart(menu)\">Add to cart</div>\n    </div>\n    <div class=\"row subtext\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading space-div header-global \">\n      <div class=\"logo\" style=\"margin-top:7px\">\n        <i class=\"material-icons\" style=\"font-size:30px;\">restaurant</i></div>\n    </div>\n  </div>\n  <div class=\"container centering\">\n    <h1 class=\"text-center space-margin space-margin\">YummyEats</h1>\n    <p class=\"text-center space-margin\">We do it right!</p>\n    <div id=#place-order class=\"button-global  btn btn-lg btn-primary text-center space-margin\" (click)=\"placeOrder()\">Place an Order</div>\n    <!--<div id=#place-order class=\"button-global  btn btn-lg btn-primary text-center space-margin\" (click)=\"goToAdmin()\">Admin</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.62de5a86602d6fabc0be.jpg";

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = (function () {
    function MenuService(db) {
        var _this = this;
        this.menuObserver = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        db.list('resturents/hrll3/menus/Beverages').subscribe(function (c) { return _this.menuObserver.next(c); });
        this.cart = [];
        this.cartObserver = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cartObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(this.cart);
    }
    MenuService.prototype.getMenus = function () {
        return this.menuObserver;
    };
    MenuService.prototype.add = function (menu) {
        this.cart.push(menu);
        this.cartObserver.next(this.cart);
    };
    MenuService.prototype.deleteProductFromCart = function (menu) {
        var reduced = this.cart.reduce(function (prev, curr) {
            if (curr.$key === menu.$key && prev.seen === false) {
                prev.seen = true;
            }
            else {
                prev.cart.push(curr);
            }
            return prev;
        }, { seen: false, cart: [] });
        this.cart = reduced.cart;
        this.cartObserver.next(this.cart);
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_models_Order__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderService = (function () {
    function OrderService(db) {
        var _this = this;
        this.orderObserver = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.orders = db.database.ref('resturents/hrll3/orders');
        db.list('resturents/hrll3/orders').subscribe(function (c) { return _this.orderObserver.next(c); });
        this.cart = [];
        this.cartObserver = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cartObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(this.cart);
    }
    OrderService.prototype.getOrders = function () {
        return this.orderObserver;
    };
    OrderService.prototype.completeOrder = function (order) {
        this.cart.push(order);
        this.cartObserver.next(this.cart);
    };
    OrderService.prototype.create = function (menus) {
        var order = new __WEBPACK_IMPORTED_MODULE_5_app_models_Order__["a" /* Order */]();
        order.menus = menus;
        this.orders.push(order);
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = (function () {
    function CategoriesComponent(db, router) {
        this.router = router;
        this.items = db.list('resturents/hrll3/categories');
    }
    CategoriesComponent.prototype.selectCategories = function () {
        this.router.navigate(['/add-shopping-cart']);
    };
    CategoriesComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/menu']);
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__(301),
        styles: [__webpack_require__(247)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CategoriesComponent);

var _a, _b;
//# sourceMappingURL=categories.component.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.bundle.js.map