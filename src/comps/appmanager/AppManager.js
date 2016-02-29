var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var AppManager = (function () {
    function AppManager(router) {
        this.myRouter = router;
    }
    AppManager.prototype.ngAfterViewInit = function () {
    };
    AppManager.prototype.goToApp1 = function () {
        var _this = this;
        setTimeout(function (e) { return _this.myRouter.navigate(['/App1']); }, 500);
    };
    AppManager.prototype.goToApp2 = function () {
        var _this = this;
        setTimeout(function (e) { return _this.myRouter.navigate(['/App2']); }, 500);
    };
    AppManager.prototype.goToApp3 = function () {
        var _this = this;
        setTimeout(function (e) { return _this.myRouter.navigate(['/App3']); }, 500);
    };
    AppManager = __decorate([
        core_1.Component({
            providers: [AppManager],
            selector: 'AppManager',
            template: "\n    <div id=\"appEntry\">\n        <small>I am AppManager component</small>\n        <div id=\"appSelector\" class=\"noScroll container\" >\n            <div align=\"center\" style=\"padding-top: 100px\">\n                <button (click)=\"goToApp1(event)\" data-ripple-color=\"black\" type=\"button\" name=\"mailWasp\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px; font-size: 5em\" class=\"fa fa-paper-plane\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 1</small>\n                 </button>\n                <button (click)=\"goToApp2(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-rocket\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 2</small>\n                </button>\n\n                <button (click)=\"goToApp3(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-film\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 3</small>\n                </button>\n\n            </div>\n        </div>\n        <div id=\"appMailWaspContent\" class=\"noScroll container\" style=\"display: none\">\n        </div>\n        <div id=\"appEverNodesContent\" class=\"noScroll container\" style=\"display: none\">\n        </div>\n    </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
        }), 
        __metadata('design:paramtypes', [router_2.Router])
    ], AppManager);
    return AppManager;
})();
exports.AppManager = AppManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcG1hbmFnZXIvYXBwbWFuYWdlci50cyJdLCJuYW1lcyI6WyJBcHBNYW5hZ2VyIiwiQXBwTWFuYWdlci5jb25zdHJ1Y3RvciIsIkFwcE1hbmFnZXIubmdBZnRlclZpZXdJbml0IiwiQXBwTWFuYWdlci5nb1RvQXBwMSIsIkFwcE1hbmFnZXIuZ29Ub0FwcDIiLCJBcHBNYW5hZ2VyLmdvVG9BcHAzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsdUJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFHbkQ7SUFxQ0lBLG9CQUFZQSxNQUFhQTtRQUNyQkMsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFNM0JBLENBQUNBO0lBRURELG9DQUFlQSxHQUFmQTtJQUNBRSxDQUFDQTtJQUVPRiw2QkFBUUEsR0FBaEJBO1FBQUFHLGlCQUdDQTtRQUZHQSxVQUFVQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFFQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxFQUFqQ0EsQ0FBaUNBLEVBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBRXpEQSxDQUFDQTtJQUVPSCw2QkFBUUEsR0FBaEJBO1FBQUFJLGlCQUVDQTtRQURHQSxVQUFVQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFFQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxFQUFqQ0EsQ0FBaUNBLEVBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQTtJQUVPSiw2QkFBUUEsR0FBaEJBO1FBQUFLLGlCQUVDQTtRQURHQSxVQUFVQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFFQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxFQUFqQ0EsQ0FBaUNBLEVBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQTtJQTVETEw7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFNBQVNBLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBO1lBQ3ZCQSxRQUFRQSxFQUFFQSxZQUFZQTtZQUN0QkEsUUFBUUEsRUFBRUEsZ21EQTZCVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxtQkFBVUEsQ0FBQ0E7U0FDOUNBLENBQUNBOzttQkEyQkRBO0lBQURBLGlCQUFDQTtBQUFEQSxDQTdEQSxBQTZEQ0EsSUFBQTtBQTFCWSxrQkFBVSxhQTBCdEIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHBtYW5hZ2VyL0FwcE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7Um91dGVyTGluaywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0xpYn0gZnJvbSBcIi4uLy4uL0xpYlwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBwcm92aWRlcnM6IFtBcHBNYW5hZ2VyXSxcclxuICAgIHNlbGVjdG9yOiAnQXBwTWFuYWdlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cImFwcEVudHJ5XCI+XHJcbiAgICAgICAgPHNtYWxsPkkgYW0gQXBwTWFuYWdlciBjb21wb25lbnQ8L3NtYWxsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJhcHBTZWxlY3RvclwiIGNsYXNzPVwibm9TY3JvbGwgY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMTAwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImdvVG9BcHAxKGV2ZW50KVwiIGRhdGEtcmlwcGxlLWNvbG9yPVwiYmxhY2tcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIm1haWxXYXNwXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxpIHN0eWxlPVwibWFyZ2luOiAyMHB4OyBwYWRkaW5nOiAyMHB4OyBmb250LXNpemU6IDVlbVwiIGNsYXNzPVwiZmEgZmEtcGFwZXItcGxhbmVcIj48L2k+IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbG9jYWxpemU9XCJub25lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+QXBwIDE8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ29Ub0FwcDIoZXZlbnQpXCIgZGF0YS1yaXBwbGUtY29sb3I9XCJibGFja1wiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiZXZlck5vZGVzXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxpIHN0eWxlPVwibWFyZ2luOiAyMHB4OyBwYWRkaW5nOiAyMHB4IDsgZm9udC1zaXplOiA1ZW1cIiBjbGFzcz1cImZhIGZhLXJvY2tldFwiPjwvaT4gPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sb2NhbGl6ZT1cIm5vbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5BcHAgMjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJnb1RvQXBwMyhldmVudClcIiBkYXRhLXJpcHBsZS1jb2xvcj1cImJsYWNrXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJldmVyTm9kZXNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgc3R5bGU9XCJtYXJnaW46IDIwcHg7IHBhZGRpbmc6IDIwcHggOyBmb250LXNpemU6IDVlbVwiIGNsYXNzPVwiZmEgZmEtZmlsbVwiPjwvaT4gPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sb2NhbGl6ZT1cIm5vbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5BcHAgMzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJhcHBNYWlsV2FzcENvbnRlbnRcIiBjbGFzcz1cIm5vU2Nyb2xsIGNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJhcHBFdmVyTm9kZXNDb250ZW50XCIgY2xhc3M9XCJub1Njcm9sbCBjb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGlua11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBteVJvdXRlcjpSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5teVJvdXRlciA9IHJvdXRlcjtcclxuXHJcbiAgICAgICAgLy8gaWYgeW91IHdpc2ggdG8gc3Vic2NyaWJlIHRvIHJvdXRlciBjYWxsc1xyXG4gICAgICAgIC8vdGhpcy5teVJvdXRlci5wYXJlbnQuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGBSb3V0ZSAke2V9YCk7XHJcbiAgICAgICAgLy99KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnb1RvQXBwMSgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGU9PnRoaXMubXlSb3V0ZXIubmF2aWdhdGUoWycvQXBwMSddKSw1MDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdvVG9BcHAyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZT0+dGhpcy5teVJvdXRlci5uYXZpZ2F0ZShbJy9BcHAyJ10pLDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnb1RvQXBwMygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGU9PnRoaXMubXlSb3V0ZXIubmF2aWdhdGUoWycvQXBwMyddKSw1MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
