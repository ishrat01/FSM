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
var canvas_service_1 = require("./canvas.service");
var CanvasComponent = (function () {
    function CanvasComponent(canvasService) {
        this.canvasService = canvasService;
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        // let canvasZoomElement = this.canvasZoomElement.nativeElement;
        // if(canvasZoomElement.addEventListener){
        //     // IE9, Chrome, Safari, Opera
        //     canvasZoomElement.addEventListener("mousewheel", this.zoom, false);
        //     // Firefox
        //     canvasZoomElement.addEventListener("DOMMouseScroll", this.zoom, false);
        // }
        // else{
        //     // IE 6/7/8
        //     canvasZoomElement.attachEvent("onmousewheel", this.zoom);
        // }
    };
    CanvasComponent.prototype.zoomIn = function () {
        this.canvasService.zoomIn();
    };
    CanvasComponent.prototype.zoomOut = function () {
        this.canvasService.zoomOut();
    };
    CanvasComponent.prototype.zoomReset = function () {
        this.canvasService.zoomReset();
    };
    CanvasComponent.prototype.zoom = function (e) {
        return this.canvasService.zoom(e);
    };
    __decorate([
        core_1.ViewChild('canvasZoomElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], CanvasComponent.prototype, "canvasZoomElement", void 0);
    CanvasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'canvas',
            templateUrl: 'canvas.component.html',
            styleUrls: ['canvas.component.css']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map