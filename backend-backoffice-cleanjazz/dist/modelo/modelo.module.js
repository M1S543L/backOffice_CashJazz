"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeloModule = void 0;
const common_1 = require("@nestjs/common");
const modelo_controller_1 = require("./modelo.controller");
const modelo_service_1 = require("./modelo.service");
const typeorm_1 = require("@nestjs/typeorm");
const modelo_entity_1 = require("./modelo.entity");
let ModeloModule = class ModeloModule {
};
ModeloModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([modelo_entity_1.modelo])],
        controllers: [modelo_controller_1.ModeloController],
        providers: [modelo_service_1.ModeloService]
    })
], ModeloModule);
exports.ModeloModule = ModeloModule;
//# sourceMappingURL=modelo.module.js.map