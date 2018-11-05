var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/http";
import "rxjs/add/operator/map";
var DataService = /** @class */ (function() {
  function DataService(_http) {
    this._http = _http;
  }
  DataService.prototype.getUsers = function() {
    var _this = this;
    return this._http.get("/api/users").map(function(result) {
      return (_this.result = result.json().data);
    });
  };
  DataService.prototype.getimage = function() {
    var _this = this;
    return this._http.get("/api/image").map(function(result) {
      return (_this.result = result.json().data);
    });
  };
  DataService = __decorate(
    [Injectable(), __metadata("design:paramtypes", [HttpClient])],
    DataService
  );
  return DataService;
})();
export { DataService };
//# sourceMappingURL=data.service.js.map
