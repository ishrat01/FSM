"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var upload_service_1 = require("./upload.service");
// import {Location} from "../Region/location/location";
var UploadComponent = (function () {
    function UploadComponent(formBuilder, uploadService) {
        this.uploadService = uploadService;
        this.submitAttempt = false;
        console.log("I am constructed");
        this.form = formBuilder.group({
            'country': ['', forms_1.Validators.required],
            'city': ['', forms_1.Validators.required],
            'location': ['', forms_1.Validators.required],
            'floor': ['', forms_1.Validators.required],
            'upload': ['', forms_1.Validators.required]
        });
    }
    UploadComponent.prototype.getCities = function () {
        console.log("Id of  selected country");
        // this.uploadService.getCities().subscribe((cities)=> {
        //     this.cities = cities;
        //     for (var i = 0; i < this.cities.length; i++) {
        //         // console.log("Countries are:" + cities[i].name);
        //         this.cities[i].locations = null;
        //
        //     }
        // });
    };
    UploadComponent.prototype.getLocations = function (cityName) {
        var _this = this;
        this.uploadService.getLocations().subscribe(function (locations) {
            _this.locations = locations;
            for (var i = 0; i < _this.locations.length; i++) {
                // console.log("Countries are:" + locations[i].name);
                _this.locations[i].levels = null;
            }
        });
    };
    UploadComponent.prototype.getLevels = function (locationName) {
        var _this = this;
        this.uploadService.getLocations().subscribe(function (levels) {
            _this.levels = levels;
            for (var i = 0; i < _this.levels.length; i++) {
            }
        });
    };
    UploadComponent.prototype.changeListener = function ($event) {
        this.uploadService.changeListener($event);
        //  console.log(" in service: "+$event.target.files[0].name) ;
        //this.uploadService.print() ;
    };
    UploadComponent.prototype.onSubmit = function (value) {
        this.submitAttempt = true;
        // console.log(JSON.stringify(value.value))
        this.uploadService.acceptFormData(value);
        /*subscribe((layoutData)=> {
            this.utilService.calculateGridSize(layoutData);
            this.layoutService.loadLayoutData(layoutData);
        });*/
    };
    UploadComponent.prototype.getCountries = function () {
        var _this = this;
        this.uploadService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            for (var i = 0; i < _this.countries.length; i++) {
                console.log("in uploadcomponent Countries are:" + countries[i].name);
                _this.countries[i].cities = null;
            }
        });
    };
    UploadComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    UploadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'upload',
            templateUrl: 'upload.component.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, upload_service_1.UploadService])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map