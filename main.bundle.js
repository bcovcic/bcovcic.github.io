webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".searchField{\n    display: inline;\n    float:left;\n    margin-left:1%;\n    \n}\n.buttonAdd {\n    text-align: center;\n}\n.paginationField{\n    display:inline;\n    float: right;\n    margin-right: 1%;\n}\n.addName, .addAge, .addCity, .addPhone, .addEmail, .addOcupation, .addCompany{\n    margin:5%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"buttonAdd\" >\n    <input class=\"btn btn-success addBtn\" (click)=\"openAddItem()\" value=\"Add +\">\n    <div class=\"searchField\">\n    <input  placeholder=\"Filter\" [(ngModel)]=\"filterQuery\" (input)=\"refresh($event.target.value)\">\n    <button class=\"btn btn-primary\" (click)=\"filter()\">    <fa name=\"fa-search\" class=\"fa fa-search\"></fa>\n    </button>\n    </div>\n\n    <div class=\"paginationField\">\n    <fa *ngIf=\"!counter && !fullData\" name=\"fa-backward\" class=\"fa fa-backward\" style=\"color:gray\"></fa>\n    <fa *ngIf=\"counter && !fullData\" name=\"fa-backward\" class=\"fa fa-backward\" (click)=\"pageDown()\"></fa>\n    <label *ngIf=\"!fullData\">{{counter}}</label>\n    <fa *ngIf=\"!fullData\" name=\"fa-forward\" class=\"fa fa-forward\" (click)=\"pageUp()\"></fa>\n    <input *ngIf=\"!fullData\" type=\"button\" class=\"btn btn-primary\" value=\"Show All\" (click)=\"showAllData()\">\n    <input *ngIf=\"fullData\" type=\"button\" class=\"btn btn-primary\" value=\"Show Less\" (click)=\"showLessData()\">\n    </div>\n\n</div>\n\n<table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\">\n    <thead>\n    <tr>\n        <th>\n\n\n            <!--  -->\n            <!--  -->\n            <mfDefaultSorter (click)=\"nameSort()\"by=\"name\">Name</mfDefaultSorter>\n            <fa *ngIf=\"sortName==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortName==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortName==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n\n\n        </th>\n\n        <th>\n            <mfDefaultSorter (click)=\"ageSort()\" by=\"age\">Age</mfDefaultSorter>\n            <fa *ngIf=\"sortAge==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortAge==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortAge==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n        </th>\n        <th>\n            <mfDefaultSorter (click)=\"occupationSort()\" by=\"occupation\">Occupation</mfDefaultSorter>\n            <fa *ngIf=\"sortOccupation==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortOccupation==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortOccupation==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n        </th>\n        <th>\n            <mfDefaultSorter (click)=\"citySort()\" by=\"city\">City</mfDefaultSorter>\n            <fa *ngIf=\"sortCity==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortCity==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortCity==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n        </th>\n        <th>\n            <mfDefaultSorter (click)=\"phoneSort()\" by=\"phone\">Phone</mfDefaultSorter>\n            <fa *ngIf=\"sortPhone==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortPhone==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortPhone==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n        </th>\n        <th>\n            <mfDefaultSorter (click)=\"emailSort()\" by=\"email\">E-mail</mfDefaultSorter>\n            <fa *ngIf=\"sortEmail==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortEmail==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortEmail==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n        </th>\n        <th>\n            <mfDefaultSorter (click)=\"companySort\" by=\"company\">Company</mfDefaultSorter>\n            <fa *ngIf=\"sortCompany==-1\" name=\"fa-sort\" class=\"fa fa-sort\"></fa>\n            <fa *ngIf=\"sortCompany==0\" name=\"fa-sort-down\" class=\"fa fa-sort-down\"></fa>\n            <fa *ngIf=\"sortCompany==1\" name=\"fa-sort-up\" class=\"fa fa-sort-up\"></fa>\n        </th>\n        \n        <th>\n            <mfDefaultSorter>Actions</mfDefaultSorter>\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of mf.data; let i = index\">\n        <td>{{item.name}}</td>\n        <td >{{item.age}}</td>\n        <td>{{item.occupation}}</td>\n        <td>{{item.city}}</td>\n        <td>{{item.phone}}</td>\n        <td>{{item.email}}</td>\n        <td>{{item.company}}</td>\n        <td  class=\"text-center\">\n            <fa (click)=\"deleteRow(i)\" name=\"fa-trash\" style=\"cursor: pointer\" class=\"fa fa-trash\"></fa>\n            <fa (click)=\"openEditItem(i)\" name=\"fa-edit\" style=\"cursor: pointer\" class=\"fa fa-edit\"></fa>\n        </td>\n\n    </tr>\n    </tbody>\n    <tfoot>\n    <tr>\n        <td colspan=\"4\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[50]\"></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n</table>\n\n<ng-template #addItem>\n        <!--KREIRAJ ARTIKAL-->\n        <div class=\"modal-header addItem\">\n            <h3 class=\"modal-title styleFormstitle\">Add Row</h3>\n        </div>\n        <form [formGroup]=\"itemForm\" (ngSubmit)=\"submitForm(itemForm.value)\">\n            <div class=\"modal-body createArticle\" style=\"text-align: center;\">\n                <div class=\"addName\">\n                    <input placeholder=\"Name\" type=\"text\" [formControl]=\"itemForm.controls['name']\">\n                    <span *ngIf=\"itemForm.controls['name'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n\n                </div>\n                <div class=\"addAge\">\n                        <input placeholder=\"Age\" type=\"number\" [formControl]=\"itemForm.controls['age']\">\n                        <span *ngIf=\"itemForm.controls['age'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n\n                </div>\n                <div class=\"addOccupation\">\n                        <input placeholder=\"Occupation\" type=\"text\" [formControl]=\"itemForm.controls['occupation']\">\n                        <span *ngIf=\"itemForm.controls['occupation'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n                </div>\n                <div class=\"addCity\">\n                        <input placeholder=\"City\" type=\"text\" [formControl]=\"itemForm.controls['city']\">\n                        <span *ngIf=\"itemForm.controls['city'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n                </div>\n                <div class=\"addPhone\">\n                        <input placeholder=\"Phone\" type=\"text\" [formControl]=\"itemForm.controls['phone']\">\n                        <span *ngIf=\"itemForm.controls['phone'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n                </div>\n                <div class=\"addEmail\">\n                        <input placeholder=\"E-mail\" type=\"text\" [formControl]=\"itemForm.controls['email']\">\n                        <span *ngIf=\"itemForm.controls['email'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n\n                </div>\n                <div class=\"addCompany\">\n                        <input placeholder=\"Company\" type=\"text\" [formControl]=\"itemForm.controls['company']\">\n                        <span *ngIf=\"itemForm.controls['company'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n\n                </div>\n            </div>\n            <div class=\"modal-footer createArticle\">\n                    <a class=\"btn btn-default createArticleButton\" data-dismiss=\"modal\" (click)=\"closeModal()\">Zatvori</a>\n                    <input *ngIf=\"!edit\" type=\"submit\" class=\"btn btn-primary createItem\" value=\"Kreiraj\" [disabled]=\"!itemForm.valid\" (click)=\"closeModal()\">\n\n             </div>\n        </form>\n</ng-template>\n\n<ng-template #editItem>\n            <!--KREIRAJ ARTIKAL-->\n            <div class=\"modal-header editItem\">\n                <h3 class=\"modal-title styleFormstitle\">Edit Row</h3>\n            </div>\n            <form [formGroup]=\"itemForm\" (ngSubmit)=\"submitForm(itemForm.value)\">\n                    <div class=\"modal-body createArticle\" style=\"text-align: center;\">\n                        <div class=\"addName\">\n                            <input placeholder=\"Name\" type=\"text\" [formControl]=\"itemForm.controls['name']\">\n                            <span *ngIf=\"itemForm.controls['name'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n        \n                        </div>\n                        <div class=\"addAge\">\n                                <input placeholder=\"Age\" type=\"number\" [formControl]=\"itemForm.controls['age']\">\n                                <span *ngIf=\"itemForm.controls['age'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n        \n                        </div>\n                        <div class=\"addOccupation\">\n                                <input placeholder=\"Occupation\" type=\"text\" [formControl]=\"itemForm.controls['occupation']\">\n                                <span *ngIf=\"itemForm.controls['occupation'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n                        </div>\n                        <div class=\"addCity\">\n                                <input placeholder=\"City\" type=\"text\" [formControl]=\"itemForm.controls['city']\">\n                                <span *ngIf=\"itemForm.controls['city'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n                        </div>\n                        <div class=\"addPhone\">\n                                <input placeholder=\"Phone\" type=\"text\" [formControl]=\"itemForm.controls['phone']\">\n                                <span *ngIf=\"itemForm.controls['phone'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n                        </div>\n                        <div class=\"addEmail\">\n                                <input placeholder=\"E-mail\" type=\"text\" [formControl]=\"itemForm.controls['email']\">\n                                <span *ngIf=\"itemForm.controls['email'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n        \n                        </div>\n                        <div class=\"addCompany\">\n                                <input placeholder=\"Company\" type=\"text\" [formControl]=\"itemForm.controls['company']\">\n                                <span *ngIf=\"itemForm.controls['company'].hasError('required')\" class=\"error\">Polje je obavezno</span>\n        \n                        </div>\n                    </div>\n                    <div class=\"modal-footer createArticle\">\n                            <a class=\"btn btn-default createArticleButton\" data-dismiss=\"modal\" (click)=\"closeModal()\">Zatvori</a>\n                            <input *ngIf=\"edit\" type=\"submit\" class=\"btn btn-primary createItem\" value=\"Kreiraj\" [disabled]=\"!itemForm.valid\" (click)=\"closeModal()\">\n        \n                     </div>\n                </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_model__ = __webpack_require__("./src/app/item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, modalService, formBuilder) {
        var _this = this;
        this.dataService = dataService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.title = 'app';
        this.edit = false;
        this.headElements = ["Name", "Age", "City", "Occupation", "Phone", "E-mail", "Company"];
        this.data = [];
        this.temp = [];
        this.searchName = "";
        this.filterQuery = "";
        this.sortName = -1;
        this.sortAge = -1;
        this.sortCity = -1;
        this.sortOccupation = -1;
        this.sortPhone = -1;
        this.sortEmail = -1;
        this.sortCompany = -1;
        this.fullData = false;
        this.staticData = [];
        this.counter = 0;
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        this.dataService.getPaginationData(function (err) {
            if (err) {
                alert("Error");
                return;
            }
            console.log("tututut");
            _this.data = _this.dataService.data;
            _this.staticData = _this.dataService.data;
            console.log(_this.data);
        }, this.counter);
    }
    AppComponent.prototype.onInit = function () {
    };
    AppComponent.prototype.openAddItem = function () {
        this.edit = false;
        this.setItemForm(new __WEBPACK_IMPORTED_MODULE_4__item_model__["a" /* Item */]());
        this.modalRef = this.modalService.show(this.addItem, { 'class': 'createArticleModal', 'backdrop': 'static', 'keyboard': false });
    };
    AppComponent.prototype.openEditItem = function (id) {
        this.editID = id;
        this.edit = true;
        var newItem;
        newItem = this.data[id];
        this.setItemForm(newItem);
        this.modalRef = this.modalService.show(this.editItem, { 'class': 'createArticleModal', 'backdrop': 'static', 'keyboard': false });
    };
    AppComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    AppComponent.prototype.submitForm = function (item) {
        if (!this.edit) {
            this.data.unshift({
                name: item.name,
                age: item.age,
                city: item.city,
                occupation: item.occupation,
                phone: item.phone,
                email: item.email,
                company: item.company
            });
        }
        else {
            this.data[this.editID] = {
                name: item.name,
                age: item.age,
                city: item.city,
                occupation: item.occupation,
                phone: item.phone,
                email: item.email,
                company: item.company
            };
        }
    };
    AppComponent.prototype.setItemForm = function (item) {
        this.itemForm = this.formBuilder.group({
            'name': item.name,
            'age': item.age,
            'city': item.city,
            "occupation": item.occupation,
            'phone': item.phone,
            'email': item.email,
            'company': item.company
        });
    };
    AppComponent.prototype.showAllData = function () {
        var _this = this;
        this.fullData = true;
        this.dataService.getAllData(function (err) {
            if (err) {
                alert("Error");
                return;
            }
            console.log("tututut");
            _this.data = _this.dataService.data;
            _this.staticData = _this.dataService.data;
            console.log(_this.data);
        });
    };
    AppComponent.prototype.showLessData = function () {
        var _this = this;
        this.fullData = false;
        this.counter = 0;
        this.dataService.getPaginationData(function (err) {
            if (err) {
                alert("Error");
                return;
            }
            console.log("tututut");
            _this.data = _this.dataService.data;
            _this.staticData = _this.dataService.data;
            console.log(_this.data);
        }, this.counter);
    };
    AppComponent.prototype.deleteRow = function (index) {
        console.log(index);
        this.data.splice(index, 1);
        this.staticData.splice(index, 1);
    };
    AppComponent.prototype.refresh = function (event) {
        if (this.filterQuery === "") {
            this.data = this.staticData;
        }
    };
    AppComponent.prototype.filter = function () {
        var _this = this;
        if (this.filterQuery === "") {
            this.data = this.staticData;
        }
        var temp = [];
        temp = this.data.filter(function (d) {
            return d.name.toLowerCase().indexOf(_this.filterQuery.toLowerCase()) !== -1
                || d.city.toLowerCase().indexOf(_this.filterQuery.toLocaleLowerCase()) !== -1
                || d.age.toString().indexOf(_this.filterQuery) !== -1
                || d.occupation.toLowerCase().indexOf(_this.filterQuery.toLocaleLowerCase()) !== -1
                || d.phone.toLowerCase().indexOf(_this.filterQuery.toLocaleLowerCase()) !== -1
                || d.email.toLowerCase().indexOf(_this.filterQuery.toLocaleLowerCase()) !== -1
                || d.company.toLowerCase().indexOf(_this.filterQuery.toLocaleLowerCase()) !== -1;
        });
        this.data = temp;
    };
    AppComponent.prototype.toInt = function (num) {
        return +num;
    };
    AppComponent.prototype.pageUp = function () {
        var _this = this;
        this.counter++;
        this.data = [];
        this.dataService.getPaginationData(function (err) {
            if (err) {
                alert("Error");
                return;
            }
            console.log("tututut");
            _this.data = _this.dataService.data;
            _this.staticData = _this.dataService.data;
            console.log(_this.data);
        }, this.counter);
    };
    AppComponent.prototype.pageDown = function () {
        var _this = this;
        this.counter--;
        this.data = [];
        this.dataService.getPaginationData(function (err) {
            if (err) {
                alert("Error");
                return;
            }
            console.log("tututut");
            _this.data = _this.dataService.data;
            _this.staticData = _this.dataService.data;
            console.log(_this.data);
        }, this.counter);
    };
    AppComponent.prototype.nameSort = function () {
        if (this.sortName == -1) {
            this.sortName = 0;
        }
        else if (this.sortName == 0) {
            this.sortName = 1;
        }
        else if (this.sortName == 1) {
            this.sortName = 0;
        }
    };
    AppComponent.prototype.ageSort = function () {
        if (this.sortAge == -1) {
            this.sortAge = 0;
        }
        else if (this.sortAge == 0) {
            this.sortAge = 1;
        }
        else if (this.sortAge == 1) {
            this.sortAge = 0;
        }
    };
    AppComponent.prototype.citySort = function () {
        if (this.sortCity == -1) {
            this.sortCity = 0;
        }
        else if (this.sortCity == 0) {
            this.sortCity = 1;
        }
        else if (this.sortCity == 1) {
            this.sortCity = 0;
        }
    };
    AppComponent.prototype.occupationSort = function () {
        if (this.sortOccupation == -1) {
            this.sortOccupation = 0;
        }
        else if (this.sortOccupation == 0) {
            this.sortOccupation = 1;
        }
        else if (this.sortOccupation == 1) {
            this.sortOccupation = 0;
        }
    };
    AppComponent.prototype.phoneSort = function () {
        if (this.sortPhone == -1) {
            this.sortPhone = 0;
        }
        else if (this.sortPhone == 0) {
            this.sortPhone = 1;
        }
        else if (this.sortPhone == 1) {
            this.sortPhone = 0;
        }
    };
    AppComponent.prototype.emailSort = function () {
        if (this.sortEmail == -1) {
            this.sortEmail = 0;
        }
        else if (this.sortEmail == 0) {
            this.sortEmail = 1;
        }
        else if (this.sortEmail == 1) {
            this.sortEmail = 0;
        }
    };
    AppComponent.prototype.companySort = function () {
        if (this.sortCompany == -1) {
            this.sortCompany = 0;
        }
        else if (this.sortCompany == 0) {
            this.sortCompany = 1;
        }
        else if (this.sortCompany == 1) {
            this.sortCompany = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addItem'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "addItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editItem'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "editItem", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__("./node_modules/angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__request_service__["b" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* BsModalService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppService = /** @class */ (function () {
    function AppService() {
        this.createdRequests = 0;
        this.finishedRequests = 0;
        this.isLoaderShown = false;
        this.lastErrorTimeStamp = new Date();
        this.lastErrorMessage = '';
    }
    AppService.prototype.showLoader = function () {
        this.createdRequests++;
        this.isLoaderShown = true;
    };
    AppService.prototype.hideLoader = function () {
        if (++this.finishedRequests == this.createdRequests)
            this.isLoaderShown = false;
    };
    AppService.prototype.createDeepCopy = function (object) {
        return $.extend(true, {}, object);
    };
    AppService.prototype.handleError = function (error) {
        var message = '';
        var now = new Date();
        try {
            message = error.json().Message || error.json().ExceptionMessage;
        }
        catch (exception) {
            //message = this.messages.generalError;
        }
        if (message != this.lastErrorMessage || (now.getTime() - this.lastErrorTimeStamp.getTime()) > 1000) {
            //this.showNotification(message, NotificationType.Error);
            this.lastErrorTimeStamp = now;
            this.lastErrorMessage = message;
        }
    };
    AppService.prototype.showNotification = function (message, type) {
        /*$.notify({
            message: message
        },
        {
            type: type,
            newest_on_top: true,
            delay: 5000,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close notify-custom" data-notify="dismiss"><span>&times;</span></button>' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '</div>'
        });*/
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(requestService, http) {
        this.requestService = requestService;
        this.http = http;
        this.url = 'https://zoeyport.dev.crossvallia.ba';
        this.loginHeaders = new Headers({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.onInit = function () {
    };
    DataService.prototype.getAllData = function (callback) {
        var _this = this;
        console.log("tusam");
        this.requestService.createRequest(__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* HttpRequestType */].Get, this.url + "/?all=true", null, null, function (data) {
            _this.data = data;
            callback(null);
        }, function (err) {
            callback(err);
        });
    };
    DataService.prototype.getPaginationData = function (callback, n) {
        var _this = this;
        this.requestService.createRequest(__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* HttpRequestType */].Get, this.url + "/?page=" + n.toString(), null, null, function (data) {
            _this.data = data;
            callback(null);
        }, function (err) {
            callback(err);
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["b" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpRequestType;
(function (HttpRequestType) {
    HttpRequestType[HttpRequestType["Get"] = 0] = "Get";
    HttpRequestType[HttpRequestType["Post"] = 1] = "Post";
    HttpRequestType[HttpRequestType["Put"] = 2] = "Put";
    HttpRequestType[HttpRequestType["Delete"] = 3] = "Delete";
    HttpRequestType[HttpRequestType["Patch"] = 4] = "Patch";
})(HttpRequestType || (HttpRequestType = {}));
var RequestService = /** @class */ (function () {
    function RequestService(appService, http) {
        this.appService = appService;
        this.http = http;
    }
    RequestService.prototype.createRequest = function (httpRequestType, url, body, headers, onSuccess, onFail) {
        var _this = this;
        if (headers === void 0) { headers = null; }
        if (onSuccess === void 0) { onSuccess = null; }
        if (onFail === void 0) { onFail = null; }
        var requestType = this.determineRequestType(httpRequestType);
        setTimeout(function () {
            _this.appService.showLoader();
        });
        requestType(url, body, { headers: headers })
            .share().finally(function () {
            return setTimeout(function () {
                _this.appService.hideLoader();
            });
        }).subscribe(function (response) {
            if (onSuccess != null) {
                if (response._body == "")
                    onSuccess();
                else
                    onSuccess(response.json());
            }
        }, function (error) { return onFail != null ? onFail(error) : _this.appService.handleError(error); });
    };
    RequestService.prototype.determineRequestType = function (httpRequestType) {
        var _this = this;
        var requestType;
        if (httpRequestType == HttpRequestType.Get)
            requestType = function (url, body, headers) { return _this.http.get(url, headers); };
        else if (httpRequestType == HttpRequestType.Post)
            requestType = function (url, body, headers) { return _this.http.post(url, body, headers); };
        else if (httpRequestType == HttpRequestType.Put)
            requestType = function (url, body, headers) { return _this.http.put(url, body, headers); };
        else if (httpRequestType == HttpRequestType.Delete)
            requestType = function (url, body, headers) { return _this.http.delete(url, headers); };
        else
            requestType = function (url, body, headers) { return _this.http.patch(url, body, headers); };
        return requestType;
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map