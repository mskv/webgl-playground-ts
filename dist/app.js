/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/3d.ts":
/*!*******************!*\
  !*** ./src/3d.ts ***!
  \*******************/
/*! exports provided: Transform, transform, transformMatrix, Movement, movement, PerspectiveProjection, perspectiveProjection, perspectiveProjectionMatrix, Mesh, mesh, cubeMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMatrix", function() { return transformMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movement", function() { return Movement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movement", function() { return movement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectiveProjection", function() { return PerspectiveProjection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveProjection", function() { return perspectiveProjection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveProjectionMatrix", function() { return perspectiveProjectionMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return mesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubeMesh", function() { return cubeMesh; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.ts");

// Transform
class Transform {
    constructor(position, rotation, scale) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}
const transform = (position, rotation, scale) => new Transform(position, rotation, scale);
const transformMatrix = (transform) => {
    const translation = Object(_math__WEBPACK_IMPORTED_MODULE_0__["mat4FromTranslationVec"])(transform.position);
    const rotation = Object(_math__WEBPACK_IMPORTED_MODULE_0__["mat4FromEulerRotation"])(transform.rotation);
    const scale = Object(_math__WEBPACK_IMPORTED_MODULE_0__["mat4FromScaleVec"])(transform.scale);
    return Object(_math__WEBPACK_IMPORTED_MODULE_0__["mat4Product"])(translation, Object(_math__WEBPACK_IMPORTED_MODULE_0__["mat4Product"])(rotation, scale));
};
// Movement
class Movement {
    constructor(speed, dSpeed, rotation, dRotation) {
        this.speed = speed;
        this.dSpeed = dSpeed;
        this.rotation = rotation;
        this.dRotation = dRotation;
    }
}
const movement = (speed, dSpeed, rotation, dRotation) => new Movement(speed, dSpeed, rotation, dRotation);
// PerspectiveProjection
class PerspectiveProjection {
    constructor(nearZ, farZ, fovY, aspectRatioXY) {
        this.nearZ = nearZ;
        this.farZ = farZ;
        this.fovY = fovY;
        this.aspectRatioXY = aspectRatioXY;
    }
}
const perspectiveProjection = (nearZ, farZ, fovY, aspectRatioXY) => new PerspectiveProjection(nearZ, farZ, fovY, aspectRatioXY);
const perspectiveProjectionMatrix = (projection) => {
    const nearZ = projection.nearZ, farZ = projection.farZ, fovY = projection.fovY, aspectRatioXY = projection.aspectRatioXY;
    const tanFovYHalfAngle = Math.tan(fovY / 2);
    // (1 / (tanFovYHalfAngle * aspectRatioXY)) 0 0 0
    // 0 (1 / tanFovYHalfAngle) 0 0
    // 0 0 -(farZ / (farZ - nearZ)) -((farZ * nearZ) / (farZ - nearZ))
    // 0 0 -1 0
    return Object(_math__WEBPACK_IMPORTED_MODULE_0__["mat4"])([
        1.0 / (tanFovYHalfAngle * aspectRatioXY),
        0,
        0,
        0,
        0,
        1.0 / tanFovYHalfAngle,
        0,
        0,
        0,
        0,
        -(farZ / (farZ - nearZ)),
        -1,
        0,
        0,
        -((farZ * nearZ) / (farZ - nearZ)),
        0,
    ]);
};
// Mesh
class Mesh {
    constructor(
    // [p1x, p1y, p1z, p2x, ...]
    positions, 
    // [n1x, n1y, n1z, n2x, ...]
    normals, 
    // [t0v1, t0v2, t0v3, t1v1, ...]
    indices) {
        this.positions = positions;
        this.normals = normals;
        this.indices = indices;
    }
}
const mesh = (positions, normals, indices) => new Mesh(positions, normals, indices);
const cubeMesh = (sideLength) => {
    const v0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(0, 0, 0), v1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(sideLength, 0, 0), v2 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(0, sideLength, 0), v3 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(sideLength, sideLength, 0), v4 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(0, 0, sideLength), v5 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(sideLength, 0, sideLength), v6 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(0, sideLength, sideLength), v7 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3"])(sideLength, sideLength, sideLength), farN = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Cross"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v2, v0), Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v1, v0))), leftN = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Cross"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v4, v0), Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v2, v0))), rightN = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Cross"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v1, v5), Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v7, v5))), bottomN = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Cross"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v1, v0), Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v4, v0))), topN = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Cross"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v6, v2), Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v3, v2))), nearN = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Cross"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v5, v4), Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Sub"])(v6, v4))), n0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(farN, leftN), bottomN)), n1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(farN, rightN), bottomN)), n2 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(farN, leftN), topN)), n3 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(farN, rightN), topN)), n4 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(nearN, leftN), bottomN)), n5 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(nearN, rightN), bottomN)), n6 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(nearN, leftN), topN)), n7 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3Add"])(nearN, rightN), topN));
    // prettier-ignore
    const positions = [
        v0.x, v0.y, v0.z,
        v1.x, v1.y, v1.z,
        v2.x, v2.y, v2.z,
        v3.x, v3.y, v3.z,
        v4.x, v4.y, v4.z,
        v5.x, v5.y, v5.z,
        v6.x, v6.y, v6.z,
        v7.x, v7.y, v7.z,
    ];
    // prettier-ignore
    const normals = [
        n0.x, n0.y, n0.z,
        n1.x, n1.y, n1.z,
        n2.x, n2.y, n2.z,
        n3.x, n3.y, n3.z,
        n4.x, n4.y, n4.z,
        n5.x, n5.y, n5.z,
        n6.x, n6.y, n6.z,
        n7.x, n7.y, n7.z,
    ];
    // prettier-ignore
    const indices = [
        // far
        0, 1, 2,
        1, 2, 3,
        // left
        0, 2, 4,
        2, 4, 6,
        // right
        1, 3, 5,
        3, 5, 7,
        // bottom
        0, 1, 4,
        1, 4, 5,
        // top
        2, 3, 6,
        3, 6, 7,
        // near
        4, 5, 6,
        5, 6, 7,
    ];
    return mesh(positions, normals, indices);
};


/***/ }),

/***/ "./src/drawSystem.ts":
/*!***************************!*\
  !*** ./src/drawSystem.ts ***!
  \***************************/
/*! exports provided: drawSystemInit, drawSystemRun, initMainCameraMut, initBasicObjMut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSystemInit", function() { return drawSystemInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSystemRun", function() { return drawSystemRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMainCameraMut", function() { return initMainCameraMut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBasicObjMut", function() { return initBasicObjMut; });
/* harmony import */ var _3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3d */ "./src/3d.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./src/math.ts");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program */ "./src/program.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");





const drawSystemInit = (canvas) => {
    const gl = canvas.getContext("webgl2");
    if (!gl) {
        throw new Error("WebGL2 not supported");
    }
    resizeCanvas(gl.canvas);
    gl.enable(gl.DEPTH_TEST);
    const program = Object(_program__WEBPACK_IMPORTED_MODULE_3__["programInit"])(gl);
    return {
        gl,
        program,
        activeCameraId: null,
        lightDirection: Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3Normalize"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(1.0, -2.0, -1.0)),
    };
};
const drawSystemRun = (state, _time) => {
    const gl = state.drawSystem.gl, canvas = gl.canvas, program = state.drawSystem.program;
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["defined"])(state.drawSystem.activeCameraId)) {
        return;
    }
    const activeCameraEntity = state.entities.get(state.drawSystem.activeCameraId);
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(activeCameraEntity, "Missing active camera") || !Object(_entity__WEBPACK_IMPORTED_MODULE_1__["assertKind"])(_entity__WEBPACK_IMPORTED_MODULE_1__["EntityKind"].Camera, activeCameraEntity)) {
        return;
    }
    resizeCanvas(canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    updateCameraProjectionMatrixMut(activeCameraEntity, canvas);
    const worldToView = Object(_math__WEBPACK_IMPORTED_MODULE_2__["mat4Inverse"])(Object(_3d__WEBPACK_IMPORTED_MODULE_0__["transformMatrix"])(activeCameraEntity.transform));
    const viewToProjection = Object(_3d__WEBPACK_IMPORTED_MODULE_0__["perspectiveProjectionMatrix"])(activeCameraEntity.projection);
    const entities = Array.from(state.entities.values());
    const simpleObjects = entities.filter(Object(_entity__WEBPACK_IMPORTED_MODULE_1__["ofKindCurr"])(_entity__WEBPACK_IMPORTED_MODULE_1__["EntityKind"].SimpleObject));
    for (const simpleObject of simpleObjects) {
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programSetAttributePosition"])(program, simpleObject.mesh.positions);
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programSetAttributeNormal"])(program, simpleObject.mesh.normals);
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programSetIndices"])(program, simpleObject.mesh.indices);
        const modelToWorld = Object(_3d__WEBPACK_IMPORTED_MODULE_0__["transformMatrix"])(simpleObject.transform);
        const modelToView = Object(_math__WEBPACK_IMPORTED_MODULE_2__["mat4Product"])(worldToView, modelToWorld);
        const modelToProjection = Object(_math__WEBPACK_IMPORTED_MODULE_2__["mat4Product"])(viewToProjection, modelToView);
        const modelToViewInverseTranspose = Object(_math__WEBPACK_IMPORTED_MODULE_2__["mat4Transpose"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["mat4Inverse"])(modelToView));
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programUse"])(program);
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programSetUniformModelToProjection"])(program, modelToProjection);
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programSetUniformModelToViewInverseTranspose"])(program, modelToViewInverseTranspose);
        Object(_program__WEBPACK_IMPORTED_MODULE_3__["programSetUniformLightDirection"])(program, state.drawSystem.lightDirection);
        gl.drawElements(gl.TRIANGLES, simpleObject.mesh.indices.length, gl.UNSIGNED_SHORT, 0);
    }
};
const resizeCanvas = (canvas) => {
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }
};
const updateCameraProjectionMatrixMut = (camera, canvas) => {
    camera.projection = Object(_3d__WEBPACK_IMPORTED_MODULE_0__["perspectiveProjection"])(camera.projection.nearZ, camera.projection.farZ, camera.projection.fovY, canvas.width / canvas.height);
};
const initMainCameraMut = (state) => {
    const gl = state.drawSystem.gl;
    const mainCameraEntity = Object(_entity__WEBPACK_IMPORTED_MODULE_1__["cameraEntity"])(Object(_entity__WEBPACK_IMPORTED_MODULE_1__["nextId"])(), Object(_3d__WEBPACK_IMPORTED_MODULE_0__["transform"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(-10, -15, 0), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(0), Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(-10), Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(0)), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(1, 1, 1)), Object(_3d__WEBPACK_IMPORTED_MODULE_0__["perspectiveProjection"])(0.1, 50000, Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(90), gl.canvas.width / gl.canvas.height));
    state.drawSystem.activeCameraId = mainCameraEntity.id;
    state.entities.set(mainCameraEntity.id, mainCameraEntity);
};
const initBasicObjMut = (state) => {
    const basicObjEntity = Object(_entity__WEBPACK_IMPORTED_MODULE_1__["simpleObjectEntity"])(Object(_entity__WEBPACK_IMPORTED_MODULE_1__["nextId"])(), Object(_3d__WEBPACK_IMPORTED_MODULE_0__["transform"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(0, 0, -50), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(45), Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(0), Object(_math__WEBPACK_IMPORTED_MODULE_2__["radFromDeg"])(0)), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(2, 2, 2)), Object(_3d__WEBPACK_IMPORTED_MODULE_0__["movement"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(0, 0, 0), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(0, 0, 0), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(0, 2, 1), Object(_math__WEBPACK_IMPORTED_MODULE_2__["vec3"])(0, 0, 0)), Object(_3d__WEBPACK_IMPORTED_MODULE_0__["cubeMesh"])(10));
    state.entities.set(basicObjEntity.id, basicObjEntity);
};


/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/*! exports provided: nextId, EntityKind, ofKindCurr, ofKind, assertKind, CameraEntity, cameraEntity, SimpleObjectEntity, simpleObjectEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextId", function() { return nextId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityKind", function() { return EntityKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofKindCurr", function() { return ofKindCurr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofKind", function() { return ofKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertKind", function() { return assertKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraEntity", function() { return CameraEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cameraEntity", function() { return cameraEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleObjectEntity", function() { return SimpleObjectEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleObjectEntity", function() { return simpleObjectEntity; });
let _id = 0;
const nextId = () => _id++;
var EntityKind;
(function (EntityKind) {
    EntityKind[EntityKind["Camera"] = 0] = "Camera";
    EntityKind[EntityKind["SimpleObject"] = 1] = "SimpleObject";
})(EntityKind || (EntityKind = {}));
const ofKindCurr = (kind) => (entity) => entity.kind === kind;
const ofKind = (kind, entity) => entity.kind === kind;
const assertKind = (kind, entity) => {
    if (ofKind(kind, entity)) {
        return true;
    }
    else {
        throw Error("Invalid entity kind");
    }
};
// CameraEntity
class CameraEntity {
    constructor(id, transform, projection) {
        this.id = id;
        this.transform = transform;
        this.projection = projection;
        this.kind = EntityKind.Camera;
    }
}
const cameraEntity = (id, transform, projection) => new CameraEntity(id, transform, projection);
// SimpleObjectEntity
class SimpleObjectEntity {
    constructor(id, transform, movement, mesh) {
        this.id = id;
        this.transform = transform;
        this.movement = movement;
        this.mesh = mesh;
        this.kind = EntityKind.SimpleObject;
    }
}
const simpleObjectEntity = (id, transform, movement, mesh) => new SimpleObjectEntity(id, transform, movement, mesh);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.ts");

window.onload = _main__WEBPACK_IMPORTED_MODULE_0__["main"];


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _drawSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawSystem */ "./src/drawSystem.ts");
/* harmony import */ var _physicsSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physicsSystem */ "./src/physicsSystem.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.ts");



let state;
const loop = (time) => {
    Object(_physicsSystem__WEBPACK_IMPORTED_MODULE_1__["physicsSystemRun"])(state, time);
    Object(_drawSystem__WEBPACK_IMPORTED_MODULE_0__["drawSystemRun"])(state, time);
    requestAnimationFrame(loop);
};
const main = () => {
    const canvas = document.getElementById("canvas");
    if (!canvas) {
        throw new Error("Missing canvas element");
    }
    state = Object(_state__WEBPACK_IMPORTED_MODULE_2__["stateInit"])(canvas);
    requestAnimationFrame(loop);
};


/***/ }),

/***/ "./src/math.ts":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! exports provided: Vec3, vec3, vec3Format, vec3FromArray, vec3ToArray, vec3MulScalar, vec3Add, vec3Sub, vec3Dot, vec3Cross, vec3Transform, vec3Magnitude, vec3Normalize, Vec4, vec4, vec4Format, vec4FromArray, vec4ToArray, vec4Dot, vec4Transform, Mat4, mat4, mat4Format, mat4Product, mat4Transpose, mat4FromEulerRotation, mat4FromQuat, mat4FromTranslationVec, mat4FromScaleVec, mat4Determinant, mat4Inverse, quat, quatProduct, radFromDeg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Format", function() { return vec3Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3FromArray", function() { return vec3FromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3ToArray", function() { return vec3ToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3MulScalar", function() { return vec3MulScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Add", function() { return vec3Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Sub", function() { return vec3Sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Dot", function() { return vec3Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Cross", function() { return vec3Cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Transform", function() { return vec3Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Magnitude", function() { return vec3Magnitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3Normalize", function() { return vec3Normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return vec4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4Format", function() { return vec4Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4FromArray", function() { return vec4FromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4ToArray", function() { return vec4ToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4Dot", function() { return vec4Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4Transform", function() { return vec4Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return Mat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return mat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4Format", function() { return mat4Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4Product", function() { return mat4Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4Transpose", function() { return mat4Transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4FromEulerRotation", function() { return mat4FromEulerRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4FromQuat", function() { return mat4FromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4FromTranslationVec", function() { return mat4FromTranslationVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4FromScaleVec", function() { return mat4FromScaleVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4Determinant", function() { return mat4Determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4Inverse", function() { return mat4Inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return quat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quatProduct", function() { return quatProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radFromDeg", function() { return radFromDeg; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

// Vec3
class Vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const vec3 = (x, y, z) => new Vec3(x, y, z);
const vec3Format = (v) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatMultiline"])(`
    [ ${v.x.toFixed(5)},
      ${v.y.toFixed(5)},
      ${v.z.toFixed(5)} ]
`);
const vec3FromArray = (arr) => vec3(arr[0], arr[1], arr[2]);
const vec3ToArray = (v) => [v.x, v.y, v.z];
const vec3MulScalar = (v1, s) => vec3(v1.x * s, v1.y * s, v1.z * s);
const vec3Add = (v1, v2) => vec3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
const vec3Sub = (v1, v2) => vec3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
const vec3Dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
const vec3Cross = (v1, v2) => vec3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
const vec3Transform = (m, v) => {
    const e = m.elements, x = v.x, y = v.y, z = v.z;
    const result = vec3(e[0] * x + e[4] * y + e[8] * z, e[1] * x + e[5] * y + e[9] * z, e[2] * x + e[6] * y + e[10] * z);
    const w = e[3] * x + e[7] * y + e[11] * z + e[15];
    if (w === 1) {
        return result;
    }
    else {
        result.x = result.x / w;
        result.y = result.y / w;
        result.z = result.z / w;
        return result;
    }
};
const vec3Magnitude = (v) => Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2));
const vec3Normalize = (v) => {
    const magnitude = vec3Magnitude(v);
    return vec3(v.x / magnitude, v.y / magnitude, v.z / magnitude);
};
// Vec4
class Vec4 {
    constructor(x, y, z, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}
const vec4 = (x, y, z, w = 1) => new Vec4(x, y, z, w);
const vec4Format = (v) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatMultiline"])(`
    [ ${v.x.toFixed(5)},
      ${v.y.toFixed(5)},
      ${v.z.toFixed(5)},
      ${v.w.toFixed(5)} ]
`);
const vec4FromArray = (arr) => vec4(arr[0], arr[1], arr[2], arr[3]);
const vec4ToArray = (v) => [v.x, v.y, v.z, v.w];
const vec4Dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
const vec4Transform = (m, v) => {
    const e = m.elements, x = v.x, y = v.y, z = v.z, w = v.w;
    const result = vec4(e[0] * x + e[4] * y + e[8] * z + e[12] * w, e[1] * x + e[5] * y + e[9] * z + e[13] * w, e[2] * x + e[6] * y + e[10] * z + e[14] * w, e[3] * x + e[7] * y + e[11] * z + e[15] * w);
    if (result.w === 1) {
        return result;
    }
    else {
        result.x = result.x / result.w;
        result.y = result.y / result.w;
        result.z = result.z / result.w;
        result.w = 1;
        return result;
    }
};
// Mat4
class Mat4 {
    constructor(elements) {
        this.elements = elements;
    }
}
const mat4 = (elements) => new Mat4(elements);
const mat4Format = (m) => {
    const elsTruncated = m.elements.map((element) => element.toFixed(5));
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatMultiline"])(`
    [ ${elsTruncated[0]}, ${elsTruncated[4]}, ${elsTruncated[8]}, ${elsTruncated[12]},
      ${elsTruncated[1]}, ${elsTruncated[5]}, ${elsTruncated[9]}, ${elsTruncated[13]},
      ${elsTruncated[2]}, ${elsTruncated[6]}, ${elsTruncated[10]}, ${elsTruncated[14]},
      ${elsTruncated[3]}, ${elsTruncated[7]}, ${elsTruncated[11]}, ${elsTruncated[15]} ]
  `);
};
const mat4Product = (m1, m2) => {
    const e1 = m1.elements, e2 = m2.elements;
    const resultElements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
        const ii = i * 4;
        for (let j = 0; j < 4; j++) {
            resultElements[ii + j] =
                e1[j] * e2[ii] + e1[j + 4] * e2[ii + 1] + e1[j + 8] * e2[ii + 2] + e1[j + 12] * e2[ii + 3];
        }
    }
    return mat4(resultElements);
};
const mat4Transpose = (m) => {
    const e = m.elements;
    return mat4([e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]]);
};
const mat4FromEulerRotation = (euler) => {
    const x = euler.x, y = euler.y, z = euler.z, sinX = Math.sin(x), cosX = Math.cos(x), sinY = Math.sin(y), cosY = Math.cos(y), sinZ = Math.sin(z), cosZ = Math.cos(z);
    // prettier-ignore
    return mat4([
        cosY * cosZ,
        cosX * sinZ + cosZ * sinX * sinY,
        sinX * sinZ - cosX * cosZ * sinY,
        0,
        -cosY * sinZ,
        cosX * cosZ - sinX * sinY * sinZ,
        cosZ * sinX + cosX * sinY * sinZ,
        0,
        sinY,
        -cosY * sinX,
        cosX * cosY,
        0,
        0,
        0,
        0,
        1,
    ]);
};
const mat4FromQuat = (q) => {
    const x = q.x, y = q.y, z = q.z, w = q.w, x2 = Math.pow(x, 2), y2 = Math.pow(y, 2), z2 = Math.pow(z, 2);
    return mat4([
        1 - 2 * y2 - 2 * z2,
        2 * x * y + 2 * w * z,
        2 * x * z - 2 * w * y,
        0,
        2 * x * y - 2 * w * z,
        1 - 2 * x2 - 2 * z2,
        2 * y * z + 2 * w * x,
        0,
        2 * x * z + 2 * w * y,
        2 * y * z - 2 * w * x,
        1 - 2 * x2 - 2 * y2,
        0,
        0,
        0,
        0,
        1,
    ]);
};
const mat4FromTranslationVec = (translation) => {
    const x = translation.x, y = translation.y, z = translation.z;
    return mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
};
const mat4FromScaleVec = (scale) => {
    const x = scale.x, y = scale.y, z = scale.z;
    return mat4([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
};
const mat4Determinant = (m) => {
    // https://www.euclideanspace.com/maths/algebra/matrix/functions/determinant/fourD/index.htm
    const e = m.elements;
    // prettier-ignore
    return e[12] * e[9] * e[6] * e[3] - e[8] * e[13] * e[6] * e[3] -
        e[12] * e[5] * e[10] * e[3] + e[4] * e[13] * e[10] * e[3] +
        e[8] * e[5] * e[14] * e[3] - e[4] * e[9] * e[14] * e[3] -
        e[12] * e[9] * e[2] * e[7] + e[8] * e[13] * e[2] * e[7] +
        e[12] * e[1] * e[10] * e[7] - e[0] * e[13] * e[10] * e[7] -
        e[8] * e[1] * e[14] * e[7] + e[0] * e[9] * e[14] * e[7] +
        e[12] * e[5] * e[2] * e[11] - e[4] * e[13] * e[2] * e[11] -
        e[12] * e[1] * e[6] * e[11] + e[0] * e[13] * e[6] * e[11] +
        e[4] * e[1] * e[14] * e[11] - e[0] * e[5] * e[14] * e[11] -
        e[8] * e[5] * e[2] * e[15] + e[4] * e[9] * e[2] * e[15] +
        e[8] * e[1] * e[6] * e[15] - e[0] * e[9] * e[6] * e[15] -
        e[4] * e[1] * e[10] * e[15] + e[0] * e[5] * e[10] * e[15];
};
const mat4Inverse = (m) => {
    // http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    const e = m.elements, det = mat4Determinant(m), detInv = 1 / det;
    // tslint:disable:max-line-length
    // prettier-ignore
    return mat4([
        (e[9] * e[14] * e[7] - e[13] * e[10] * e[7] + e[13] * e[6] * e[11] - e[5] * e[14] * e[11] - e[9] * e[6] * e[15] + e[5] * e[10] * e[15]) * detInv,
        (e[13] * e[10] * e[3] - e[9] * e[14] * e[3] - e[13] * e[2] * e[11] + e[1] * e[14] * e[11] + e[9] * e[2] * e[15] - e[1] * e[10] * e[15]) * detInv,
        (e[5] * e[14] * e[3] - e[13] * e[6] * e[3] + e[13] * e[2] * e[7] - e[1] * e[14] * e[7] - e[5] * e[2] * e[15] + e[1] * e[6] * e[15]) * detInv,
        (e[9] * e[6] * e[3] - e[5] * e[10] * e[3] - e[9] * e[2] * e[7] + e[1] * e[10] * e[7] + e[5] * e[2] * e[11] - e[1] * e[6] * e[11]) * detInv,
        (e[12] * e[10] * e[7] - e[8] * e[14] * e[7] - e[12] * e[6] * e[11] + e[4] * e[14] * e[11] + e[8] * e[6] * e[15] - e[4] * e[10] * e[15]) * detInv,
        (e[8] * e[14] * e[3] - e[12] * e[10] * e[3] + e[12] * e[2] * e[11] - e[0] * e[14] * e[11] - e[8] * e[2] * e[15] + e[0] * e[10] * e[15]) * detInv,
        (e[12] * e[6] * e[3] - e[4] * e[14] * e[3] - e[12] * e[2] * e[7] + e[0] * e[14] * e[7] + e[4] * e[2] * e[15] - e[0] * e[6] * e[15]) * detInv,
        (e[4] * e[10] * e[3] - e[8] * e[6] * e[3] + e[8] * e[2] * e[7] - e[0] * e[10] * e[7] - e[4] * e[2] * e[11] + e[0] * e[6] * e[11]) * detInv,
        (e[8] * e[13] * e[7] - e[12] * e[9] * e[7] + e[12] * e[5] * e[11] - e[4] * e[13] * e[11] - e[8] * e[5] * e[15] + e[4] * e[9] * e[15]) * detInv,
        (e[12] * e[9] * e[3] - e[8] * e[13] * e[3] - e[12] * e[1] * e[11] + e[0] * e[13] * e[11] + e[8] * e[1] * e[15] - e[0] * e[9] * e[15]) * detInv,
        (e[4] * e[13] * e[3] - e[12] * e[5] * e[3] + e[12] * e[1] * e[7] - e[0] * e[13] * e[7] - e[4] * e[1] * e[15] + e[0] * e[5] * e[15]) * detInv,
        (e[8] * e[5] * e[3] - e[4] * e[9] * e[3] - e[8] * e[1] * e[7] + e[0] * e[9] * e[7] + e[4] * e[1] * e[11] - e[0] * e[5] * e[11]) * detInv,
        (e[12] * e[9] * e[6] - e[8] * e[13] * e[6] - e[12] * e[5] * e[10] + e[4] * e[13] * e[10] + e[8] * e[5] * e[14] - e[4] * e[9] * e[14]) * detInv,
        (e[8] * e[13] * e[2] - e[12] * e[9] * e[2] + e[12] * e[1] * e[10] - e[0] * e[13] * e[10] - e[8] * e[1] * e[14] + e[0] * e[9] * e[14]) * detInv,
        (e[12] * e[5] * e[2] - e[4] * e[13] * e[2] - e[12] * e[1] * e[6] + e[0] * e[13] * e[6] + e[4] * e[1] * e[14] - e[0] * e[5] * e[14]) * detInv,
        (e[4] * e[9] * e[2] - e[8] * e[5] * e[2] + e[8] * e[1] * e[6] - e[0] * e[9] * e[6] - e[4] * e[1] * e[10] + e[0] * e[5] * e[10]) * detInv,
    ]);
    // tslint:enable:max-line-length
};
// Quaternion
const quat = (axis, angle) => {
    const axisNormalized = vec3Normalize(axis);
    const halfAngle = angle / 2;
    const halfSin = Math.sin(halfAngle);
    const halfCos = Math.cos(halfAngle);
    return vec4(axisNormalized.x * halfSin, axisNormalized.y * halfSin, axisNormalized.z * halfSin, halfCos);
};
const quatProduct = (q1, q2) => {
    const x1 = q1.x, y1 = q1.y, z1 = q1.z, w1 = q1.w, x2 = q2.x, y2 = q2.y, z2 = q2.z, w2 = q2.w;
    return vec4(w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2, w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2, w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2, w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2);
};
// Misc
const radFromDeg = (deg) => (deg / 180) * Math.PI;


/***/ }),

/***/ "./src/physicsSystem.ts":
/*!******************************!*\
  !*** ./src/physicsSystem.ts ***!
  \******************************/
/*! exports provided: physicsSystemInit, physicsSystemRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physicsSystemInit", function() { return physicsSystemInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physicsSystemRun", function() { return physicsSystemRun; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./src/math.ts");


const PHYSICS_FPS = 60;
const PHYSICS_FRAME_LENGTH_S = 1 / PHYSICS_FPS;
const PHYSICS_FRAME_LENGTH_MS = PHYSICS_FRAME_LENGTH_S * 1000;
const physicsSystemInit = () => {
    const frame = { count: 0, start: 0 };
    return { frame };
};
const physicsSystemRun = (state, time) => {
    const frame = state.physicsSystem.frame;
    while (isFrameComplete(frame, time)) {
        simulate(state);
        advanceFrameMut(frame);
    }
};
const isFrameComplete = (frame, time) => time - frame.start >= PHYSICS_FRAME_LENGTH_MS;
const advanceFrameMut = (frame) => {
    frame.count += 1;
    frame.start += PHYSICS_FRAME_LENGTH_MS;
};
const simulate = (state) => {
    const entities = Array.from(state.entities.values());
    const simpleObjects = entities.filter(Object(_entity__WEBPACK_IMPORTED_MODULE_0__["ofKindCurr"])(_entity__WEBPACK_IMPORTED_MODULE_0__["EntityKind"].SimpleObject));
    for (const simpleObject of simpleObjects) {
        const movement = simpleObject.movement, transform = simpleObject.transform;
        movement.speed = Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3Add"])(movement.speed, Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3MulScalar"])(movement.dSpeed, PHYSICS_FRAME_LENGTH_S));
        movement.rotation = Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3Add"])(movement.rotation, Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3MulScalar"])(movement.dRotation, PHYSICS_FRAME_LENGTH_S));
        transform.position = Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3Add"])(transform.position, Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3MulScalar"])(movement.speed, PHYSICS_FRAME_LENGTH_S));
        transform.rotation = Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3Add"])(transform.rotation, Object(_math__WEBPACK_IMPORTED_MODULE_1__["vec3MulScalar"])(movement.rotation, PHYSICS_FRAME_LENGTH_S));
    }
};


/***/ }),

/***/ "./src/program.ts":
/*!************************!*\
  !*** ./src/program.ts ***!
  \************************/
/*! exports provided: programInit, programUse, programSetUniformModelToProjection, programSetUniformModelToViewInverseTranspose, programSetUniformLightDirection, programSetAttributePosition, programSetAttributeNormal, programSetIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programInit", function() { return programInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programUse", function() { return programUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programSetUniformModelToProjection", function() { return programSetUniformModelToProjection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programSetUniformModelToViewInverseTranspose", function() { return programSetUniformModelToViewInverseTranspose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programSetUniformLightDirection", function() { return programSetUniformLightDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programSetAttributePosition", function() { return programSetAttributePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programSetAttributeNormal", function() { return programSetAttributeNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programSetIndices", function() { return programSetIndices; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.ts");

const vertexShaderSource = `#version 300 es
uniform mat4 u_modelToProjection;
uniform mat4 u_modelToViewInverseTranspose;

in vec4 in_position;
in vec3 in_normal;

out vec3 v_normal;

void main() {
  gl_Position = u_modelToProjection * in_position;
  v_normal = mat3(u_modelToViewInverseTranspose) * in_normal;
}
`;
const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform vec3 u_lightDirection;

in vec3 v_normal;

out vec4 out_color;

void main() {
  float lightContribution = dot(normalize(v_normal), -1.0 * u_lightDirection);

  out_color = vec4(1.0, 0.0, 0.0, 1.0);
  out_color.rgb *= lightContribution;
}
`;
const programInit = (gl) => {
    const vertexShader = createWebGLShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createWebGLShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createWebGLProgram(gl, vertexShader, fragmentShader);
    const positionBuffer = gl.createBuffer();
    const normalBuffer = gl.createBuffer();
    const indexBuffer = gl.createBuffer();
    const u_modelToProjection = gl.getUniformLocation(program, "u_modelToProjection");
    const u_modelToViewInverseTranspose = gl.getUniformLocation(program, "u_modelToViewInverseTranspose");
    const u_lightDirection = gl.getUniformLocation(program, "u_lightDirection");
    const in_position = gl.getAttribLocation(program, "in_position");
    const in_normal = gl.getAttribLocation(program, "in_normal");
    gl.enableVertexAttribArray(in_position);
    gl.enableVertexAttribArray(in_normal);
    return {
        gl,
        program,
        positionBuffer,
        normalBuffer,
        indexBuffer,
        u_modelToProjection,
        u_modelToViewInverseTranspose,
        u_lightDirection,
        in_position,
        in_normal,
    };
};
const programUse = (program) => {
    program.gl.useProgram(program.program);
};
const programSetUniformModelToProjection = (program, modelToProjection) => {
    const gl = program.gl, u_modelToProjection = program.u_modelToProjection;
    gl.uniformMatrix4fv(u_modelToProjection, false, modelToProjection.elements);
};
const programSetUniformModelToViewInverseTranspose = (program, modelToViewInverseTranspose) => {
    const gl = program.gl, u_modelToViewInverseTranspose = program.u_modelToViewInverseTranspose;
    gl.uniformMatrix4fv(u_modelToViewInverseTranspose, false, modelToViewInverseTranspose.elements);
};
const programSetUniformLightDirection = (program, lightDirection) => {
    const gl = program.gl, u_lightDirection = program.u_lightDirection;
    gl.uniform3fv(u_lightDirection, Object(_math__WEBPACK_IMPORTED_MODULE_0__["vec3ToArray"])(lightDirection));
};
const programSetAttributePosition = (program, positions) => {
    const gl = program.gl, positionBuffer = program.positionBuffer, in_position = program.in_position;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.vertexAttribPointer(in_position, 3, gl.FLOAT, false, 0, 0);
};
const programSetAttributeNormal = (program, normals) => {
    const gl = program.gl, normalBuffer = program.normalBuffer, in_normal = program.in_normal;
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    gl.vertexAttribPointer(in_normal, 3, gl.FLOAT, false, 0, 0);
};
const programSetIndices = (program, indices) => {
    const gl = program.gl, indexBuffer = program.indexBuffer;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
};
const createWebGLProgram = (gl, vertexShader, fragmentShader) => {
    const program = gl.createProgram();
    if (!program) {
        throw new Error("Unable to create program");
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const linkStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (linkStatus) {
        return program;
    }
    else {
        // tslint:disable-next-line:no-console
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        throw new Error("Unable to link program");
    }
};
const createWebGLShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    if (!shader) {
        throw new Error("Unable to create shader");
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const compileStatus = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (compileStatus) {
        return shader;
    }
    else {
        // tslint:disable-next-line:no-console
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        throw new Error("Unable to compile shader");
    }
};


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: stateInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateInit", function() { return stateInit; });
/* harmony import */ var _drawSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawSystem */ "./src/drawSystem.ts");
/* harmony import */ var _physicsSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physicsSystem */ "./src/physicsSystem.ts");


const stateInit = (canvas) => {
    const drawSystem = Object(_drawSystem__WEBPACK_IMPORTED_MODULE_0__["drawSystemInit"])(canvas);
    const physicsSystem = Object(_physicsSystem__WEBPACK_IMPORTED_MODULE_1__["physicsSystemInit"])();
    const state = {
        entities: new Map(),
        drawSystem,
        physicsSystem,
    };
    Object(_drawSystem__WEBPACK_IMPORTED_MODULE_0__["initMainCameraMut"])(state);
    Object(_drawSystem__WEBPACK_IMPORTED_MODULE_0__["initBasicObjMut"])(state);
    return state;
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: formatMultiline, bisect, compareNumbers, defined, assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMultiline", function() { return formatMultiline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return bisect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareNumbers", function() { return compareNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defined", function() { return defined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
const formatMultiline = (str) => {
    const trimAroundRegex = /^(?:\s*\n)?((?:.|\n)*?)\s*$/g;
    const leadingWhitespaceRegex = /^([\t ]*)(?:\S.*)$/gm;
    const trimAroundMatch = trimAroundRegex.exec(str);
    if (!trimAroundMatch || !trimAroundMatch[1]) {
        return "";
    }
    const coreText = trimAroundMatch[1];
    let leadingWhitespaceMatch;
    const leadingWhitespaceMatches = [];
    while ((leadingWhitespaceMatch = leadingWhitespaceRegex.exec(coreText)) !== null) {
        if (leadingWhitespaceMatch[1]) {
            leadingWhitespaceMatches.push(leadingWhitespaceMatch[1]);
        }
    }
    if (!leadingWhitespaceMatches.length) {
        return "";
    }
    const minLeadingWhitespaceLength = Math.min(...leadingWhitespaceMatches.map((whitespace) => whitespace.length));
    return coreText
        .split("\n")
        .map((line) => line.slice(minLeadingWhitespaceLength))
        .join("\n");
};
// compareFn(el) returns 1 if el is greater, -1 if it's smaller or 0 if it's equal to the target
const bisect = (arr, compareFn, sliceStartIndex, sliceEndIndex) => {
    if (!sliceStartIndex) {
        sliceStartIndex = 0;
    }
    if (!sliceEndIndex) {
        sliceEndIndex = arr.length;
    }
    const sliceLength = sliceEndIndex - sliceStartIndex;
    if (sliceLength === 0) {
        return null;
    }
    else if (sliceLength === 1) {
        if (compareFn(arr[sliceStartIndex]) === 0) {
            return arr[sliceStartIndex];
        }
        else {
            return null;
        }
    }
    else {
        const midIndex = sliceStartIndex + Math.floor(sliceLength / 2);
        const mid = arr[midIndex];
        const comparison = compareFn(mid);
        if (comparison === 1) {
            const newSliceStartIndex = sliceStartIndex;
            const newSliceEndIndex = midIndex;
            return bisect(arr, compareFn, newSliceStartIndex, newSliceEndIndex);
        }
        else if (comparison === -1) {
            const newSliceStartIndex = midIndex + 1;
            const newSliceEndIndex = sliceEndIndex;
            return bisect(arr, compareFn, newSliceStartIndex, newSliceEndIndex);
        }
        else {
            return mid;
        }
    }
};
const compareNumbers = (n1, n2) => (n1 > n2 ? 1 : n1 < n2 ? -1 : 0);
const defined = (value) => value !== null && value !== undefined;
const assert = (value, msg = "oups") => {
    if (defined(value)) {
        return true;
    }
    else {
        throw Error(msg);
    }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzNkLnRzIiwid2VicGFjazovLy8uL3NyYy9kcmF3U3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9waHlzaWNzU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUFBO0FBQUE7QUFBQTtBQUFrRjtBQUM5QjtBQUM3QztBQUNQLHVCQUF1QixrRUFBYztBQUNyQywwQkFBMEIsd0VBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFpQjtBQUNyQixJQUFJLG1FQUFlO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IG1hdDQsIG1hdDRGcm9tRXVsZXJSb3RhdGlvbiwgbWF0NEZyb21TY2FsZVZlYywgbWF0NEZyb21UcmFuc2xhdGlvblZlYywgbWF0NFByb2R1Y3QsIHZlYzMsIHZlYzNBZGQsIHZlYzNDcm9zcywgdmVjM05vcm1hbGl6ZSwgdmVjM1N1YiwgfSBmcm9tIFwiLi9tYXRoXCI7XG4vLyBUcmFuc2Zvcm1cbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCByb3RhdGlvbiwgc2NhbGUpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gKHBvc2l0aW9uLCByb3RhdGlvbiwgc2NhbGUpID0+IG5ldyBUcmFuc2Zvcm0ocG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSk7XG5leHBvcnQgY29uc3QgdHJhbnNmb3JtTWF0cml4ID0gKHRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gbWF0NEZyb21UcmFuc2xhdGlvblZlYyh0cmFuc2Zvcm0ucG9zaXRpb24pO1xuICAgIGNvbnN0IHJvdGF0aW9uID0gbWF0NEZyb21FdWxlclJvdGF0aW9uKHRyYW5zZm9ybS5yb3RhdGlvbik7XG4gICAgY29uc3Qgc2NhbGUgPSBtYXQ0RnJvbVNjYWxlVmVjKHRyYW5zZm9ybS5zY2FsZSk7XG4gICAgcmV0dXJuIG1hdDRQcm9kdWN0KHRyYW5zbGF0aW9uLCBtYXQ0UHJvZHVjdChyb3RhdGlvbiwgc2NhbGUpKTtcbn07XG4vLyBNb3ZlbWVudFxuZXhwb3J0IGNsYXNzIE1vdmVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzcGVlZCwgZFNwZWVkLCByb3RhdGlvbiwgZFJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5kU3BlZWQgPSBkU3BlZWQ7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5kUm90YXRpb24gPSBkUm90YXRpb247XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IG1vdmVtZW50ID0gKHNwZWVkLCBkU3BlZWQsIHJvdGF0aW9uLCBkUm90YXRpb24pID0+IG5ldyBNb3ZlbWVudChzcGVlZCwgZFNwZWVkLCByb3RhdGlvbiwgZFJvdGF0aW9uKTtcbi8vIFBlcnNwZWN0aXZlUHJvamVjdGlvblxuZXhwb3J0IGNsYXNzIFBlcnNwZWN0aXZlUHJvamVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IobmVhclosIGZhclosIGZvdlksIGFzcGVjdFJhdGlvWFkpIHtcbiAgICAgICAgdGhpcy5uZWFyWiA9IG5lYXJaO1xuICAgICAgICB0aGlzLmZhclogPSBmYXJaO1xuICAgICAgICB0aGlzLmZvdlkgPSBmb3ZZO1xuICAgICAgICB0aGlzLmFzcGVjdFJhdGlvWFkgPSBhc3BlY3RSYXRpb1hZO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBwZXJzcGVjdGl2ZVByb2plY3Rpb24gPSAobmVhclosIGZhclosIGZvdlksIGFzcGVjdFJhdGlvWFkpID0+IG5ldyBQZXJzcGVjdGl2ZVByb2plY3Rpb24obmVhclosIGZhclosIGZvdlksIGFzcGVjdFJhdGlvWFkpO1xuZXhwb3J0IGNvbnN0IHBlcnNwZWN0aXZlUHJvamVjdGlvbk1hdHJpeCA9IChwcm9qZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmVhclogPSBwcm9qZWN0aW9uLm5lYXJaLCBmYXJaID0gcHJvamVjdGlvbi5mYXJaLCBmb3ZZID0gcHJvamVjdGlvbi5mb3ZZLCBhc3BlY3RSYXRpb1hZID0gcHJvamVjdGlvbi5hc3BlY3RSYXRpb1hZO1xuICAgIGNvbnN0IHRhbkZvdllIYWxmQW5nbGUgPSBNYXRoLnRhbihmb3ZZIC8gMik7XG4gICAgLy8gKDEgLyAodGFuRm92WUhhbGZBbmdsZSAqIGFzcGVjdFJhdGlvWFkpKSAwIDAgMFxuICAgIC8vIDAgKDEgLyB0YW5Gb3ZZSGFsZkFuZ2xlKSAwIDBcbiAgICAvLyAwIDAgLShmYXJaIC8gKGZhclogLSBuZWFyWikpIC0oKGZhclogKiBuZWFyWikgLyAoZmFyWiAtIG5lYXJaKSlcbiAgICAvLyAwIDAgLTEgMFxuICAgIHJldHVybiBtYXQ0KFtcbiAgICAgICAgMS4wIC8gKHRhbkZvdllIYWxmQW5nbGUgKiBhc3BlY3RSYXRpb1hZKSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMS4wIC8gdGFuRm92WUhhbGZBbmdsZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgLShmYXJaIC8gKGZhclogLSBuZWFyWikpLFxuICAgICAgICAtMSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgLSgoZmFyWiAqIG5lYXJaKSAvIChmYXJaIC0gbmVhclopKSxcbiAgICAgICAgMCxcbiAgICBdKTtcbn07XG4vLyBNZXNoXG5leHBvcnQgY2xhc3MgTWVzaCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLy8gW3AxeCwgcDF5LCBwMXosIHAyeCwgLi4uXVxuICAgIHBvc2l0aW9ucywgXG4gICAgLy8gW24xeCwgbjF5LCBuMXosIG4yeCwgLi4uXVxuICAgIG5vcm1hbHMsIFxuICAgIC8vIFt0MHYxLCB0MHYyLCB0MHYzLCB0MXYxLCAuLi5dXG4gICAgaW5kaWNlcykge1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IHBvc2l0aW9ucztcbiAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgbWVzaCA9IChwb3NpdGlvbnMsIG5vcm1hbHMsIGluZGljZXMpID0+IG5ldyBNZXNoKHBvc2l0aW9ucywgbm9ybWFscywgaW5kaWNlcyk7XG5leHBvcnQgY29uc3QgY3ViZU1lc2ggPSAoc2lkZUxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHYwID0gdmVjMygwLCAwLCAwKSwgdjEgPSB2ZWMzKHNpZGVMZW5ndGgsIDAsIDApLCB2MiA9IHZlYzMoMCwgc2lkZUxlbmd0aCwgMCksIHYzID0gdmVjMyhzaWRlTGVuZ3RoLCBzaWRlTGVuZ3RoLCAwKSwgdjQgPSB2ZWMzKDAsIDAsIHNpZGVMZW5ndGgpLCB2NSA9IHZlYzMoc2lkZUxlbmd0aCwgMCwgc2lkZUxlbmd0aCksIHY2ID0gdmVjMygwLCBzaWRlTGVuZ3RoLCBzaWRlTGVuZ3RoKSwgdjcgPSB2ZWMzKHNpZGVMZW5ndGgsIHNpZGVMZW5ndGgsIHNpZGVMZW5ndGgpLCBmYXJOID0gdmVjM05vcm1hbGl6ZSh2ZWMzQ3Jvc3ModmVjM1N1Yih2MiwgdjApLCB2ZWMzU3ViKHYxLCB2MCkpKSwgbGVmdE4gPSB2ZWMzTm9ybWFsaXplKHZlYzNDcm9zcyh2ZWMzU3ViKHY0LCB2MCksIHZlYzNTdWIodjIsIHYwKSkpLCByaWdodE4gPSB2ZWMzTm9ybWFsaXplKHZlYzNDcm9zcyh2ZWMzU3ViKHYxLCB2NSksIHZlYzNTdWIodjcsIHY1KSkpLCBib3R0b21OID0gdmVjM05vcm1hbGl6ZSh2ZWMzQ3Jvc3ModmVjM1N1Yih2MSwgdjApLCB2ZWMzU3ViKHY0LCB2MCkpKSwgdG9wTiA9IHZlYzNOb3JtYWxpemUodmVjM0Nyb3NzKHZlYzNTdWIodjYsIHYyKSwgdmVjM1N1Yih2MywgdjIpKSksIG5lYXJOID0gdmVjM05vcm1hbGl6ZSh2ZWMzQ3Jvc3ModmVjM1N1Yih2NSwgdjQpLCB2ZWMzU3ViKHY2LCB2NCkpKSwgbjAgPSB2ZWMzTm9ybWFsaXplKHZlYzNBZGQodmVjM0FkZChmYXJOLCBsZWZ0TiksIGJvdHRvbU4pKSwgbjEgPSB2ZWMzTm9ybWFsaXplKHZlYzNBZGQodmVjM0FkZChmYXJOLCByaWdodE4pLCBib3R0b21OKSksIG4yID0gdmVjM05vcm1hbGl6ZSh2ZWMzQWRkKHZlYzNBZGQoZmFyTiwgbGVmdE4pLCB0b3BOKSksIG4zID0gdmVjM05vcm1hbGl6ZSh2ZWMzQWRkKHZlYzNBZGQoZmFyTiwgcmlnaHROKSwgdG9wTikpLCBuNCA9IHZlYzNOb3JtYWxpemUodmVjM0FkZCh2ZWMzQWRkKG5lYXJOLCBsZWZ0TiksIGJvdHRvbU4pKSwgbjUgPSB2ZWMzTm9ybWFsaXplKHZlYzNBZGQodmVjM0FkZChuZWFyTiwgcmlnaHROKSwgYm90dG9tTikpLCBuNiA9IHZlYzNOb3JtYWxpemUodmVjM0FkZCh2ZWMzQWRkKG5lYXJOLCBsZWZ0TiksIHRvcE4pKSwgbjcgPSB2ZWMzTm9ybWFsaXplKHZlYzNBZGQodmVjM0FkZChuZWFyTiwgcmlnaHROKSwgdG9wTikpO1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgICAgdjAueCwgdjAueSwgdjAueixcbiAgICAgICAgdjEueCwgdjEueSwgdjEueixcbiAgICAgICAgdjIueCwgdjIueSwgdjIueixcbiAgICAgICAgdjMueCwgdjMueSwgdjMueixcbiAgICAgICAgdjQueCwgdjQueSwgdjQueixcbiAgICAgICAgdjUueCwgdjUueSwgdjUueixcbiAgICAgICAgdjYueCwgdjYueSwgdjYueixcbiAgICAgICAgdjcueCwgdjcueSwgdjcueixcbiAgICBdO1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIGNvbnN0IG5vcm1hbHMgPSBbXG4gICAgICAgIG4wLngsIG4wLnksIG4wLnosXG4gICAgICAgIG4xLngsIG4xLnksIG4xLnosXG4gICAgICAgIG4yLngsIG4yLnksIG4yLnosXG4gICAgICAgIG4zLngsIG4zLnksIG4zLnosXG4gICAgICAgIG40LngsIG40LnksIG40LnosXG4gICAgICAgIG41LngsIG41LnksIG41LnosXG4gICAgICAgIG42LngsIG42LnksIG42LnosXG4gICAgICAgIG43LngsIG43LnksIG43LnosXG4gICAgXTtcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBjb25zdCBpbmRpY2VzID0gW1xuICAgICAgICAvLyBmYXJcbiAgICAgICAgMCwgMSwgMixcbiAgICAgICAgMSwgMiwgMyxcbiAgICAgICAgLy8gbGVmdFxuICAgICAgICAwLCAyLCA0LFxuICAgICAgICAyLCA0LCA2LFxuICAgICAgICAvLyByaWdodFxuICAgICAgICAxLCAzLCA1LFxuICAgICAgICAzLCA1LCA3LFxuICAgICAgICAvLyBib3R0b21cbiAgICAgICAgMCwgMSwgNCxcbiAgICAgICAgMSwgNCwgNSxcbiAgICAgICAgLy8gdG9wXG4gICAgICAgIDIsIDMsIDYsXG4gICAgICAgIDMsIDYsIDcsXG4gICAgICAgIC8vIG5lYXJcbiAgICAgICAgNCwgNSwgNixcbiAgICAgICAgNSwgNiwgNyxcbiAgICBdO1xuICAgIHJldHVybiBtZXNoKHBvc2l0aW9ucywgbm9ybWFscywgaW5kaWNlcyk7XG59O1xuIiwiaW1wb3J0IHsgY3ViZU1lc2gsIG1vdmVtZW50LCBwZXJzcGVjdGl2ZVByb2plY3Rpb24sIHBlcnNwZWN0aXZlUHJvamVjdGlvbk1hdHJpeCwgdHJhbnNmb3JtLCB0cmFuc2Zvcm1NYXRyaXgsIH0gZnJvbSBcIi4vM2RcIjtcbmltcG9ydCB7IGFzc2VydEtpbmQsIGNhbWVyYUVudGl0eSwgRW50aXR5S2luZCwgbmV4dElkLCBvZktpbmRDdXJyLCBzaW1wbGVPYmplY3RFbnRpdHksIH0gZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBtYXQ0SW52ZXJzZSwgbWF0NFByb2R1Y3QsIG1hdDRUcmFuc3Bvc2UsIHJhZEZyb21EZWcsIHZlYzMsIHZlYzNOb3JtYWxpemUgfSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQgeyBwcm9ncmFtSW5pdCwgcHJvZ3JhbVNldEF0dHJpYnV0ZU5vcm1hbCwgcHJvZ3JhbVNldEF0dHJpYnV0ZVBvc2l0aW9uLCBwcm9ncmFtU2V0SW5kaWNlcywgcHJvZ3JhbVNldFVuaWZvcm1MaWdodERpcmVjdGlvbiwgcHJvZ3JhbVNldFVuaWZvcm1Nb2RlbFRvUHJvamVjdGlvbiwgcHJvZ3JhbVNldFVuaWZvcm1Nb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UsIHByb2dyYW1Vc2UsIH0gZnJvbSBcIi4vcHJvZ3JhbVwiO1xuaW1wb3J0IHsgYXNzZXJ0LCBkZWZpbmVkIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBjb25zdCBkcmF3U3lzdGVtSW5pdCA9IChjYW52YXMpID0+IHtcbiAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xuICAgIGlmICghZ2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wyIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhcyhnbC5jYW52YXMpO1xuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICBjb25zdCBwcm9ncmFtID0gcHJvZ3JhbUluaXQoZ2wpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdsLFxuICAgICAgICBwcm9ncmFtLFxuICAgICAgICBhY3RpdmVDYW1lcmFJZDogbnVsbCxcbiAgICAgICAgbGlnaHREaXJlY3Rpb246IHZlYzNOb3JtYWxpemUodmVjMygxLjAsIC0yLjAsIC0xLjApKSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBkcmF3U3lzdGVtUnVuID0gKHN0YXRlLCBfdGltZSkgPT4ge1xuICAgIGNvbnN0IGdsID0gc3RhdGUuZHJhd1N5c3RlbS5nbCwgY2FudmFzID0gZ2wuY2FudmFzLCBwcm9ncmFtID0gc3RhdGUuZHJhd1N5c3RlbS5wcm9ncmFtO1xuICAgIGlmICghZGVmaW5lZChzdGF0ZS5kcmF3U3lzdGVtLmFjdGl2ZUNhbWVyYUlkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZUNhbWVyYUVudGl0eSA9IHN0YXRlLmVudGl0aWVzLmdldChzdGF0ZS5kcmF3U3lzdGVtLmFjdGl2ZUNhbWVyYUlkKTtcbiAgICBpZiAoIWFzc2VydChhY3RpdmVDYW1lcmFFbnRpdHksIFwiTWlzc2luZyBhY3RpdmUgY2FtZXJhXCIpIHx8ICFhc3NlcnRLaW5kKEVudGl0eUtpbmQuQ2FtZXJhLCBhY3RpdmVDYW1lcmFFbnRpdHkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzKGNhbnZhcyk7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIHVwZGF0ZUNhbWVyYVByb2plY3Rpb25NYXRyaXhNdXQoYWN0aXZlQ2FtZXJhRW50aXR5LCBjYW52YXMpO1xuICAgIGNvbnN0IHdvcmxkVG9WaWV3ID0gbWF0NEludmVyc2UodHJhbnNmb3JtTWF0cml4KGFjdGl2ZUNhbWVyYUVudGl0eS50cmFuc2Zvcm0pKTtcbiAgICBjb25zdCB2aWV3VG9Qcm9qZWN0aW9uID0gcGVyc3BlY3RpdmVQcm9qZWN0aW9uTWF0cml4KGFjdGl2ZUNhbWVyYUVudGl0eS5wcm9qZWN0aW9uKTtcbiAgICBjb25zdCBlbnRpdGllcyA9IEFycmF5LmZyb20oc3RhdGUuZW50aXRpZXMudmFsdWVzKCkpO1xuICAgIGNvbnN0IHNpbXBsZU9iamVjdHMgPSBlbnRpdGllcy5maWx0ZXIob2ZLaW5kQ3VycihFbnRpdHlLaW5kLlNpbXBsZU9iamVjdCkpO1xuICAgIGZvciAoY29uc3Qgc2ltcGxlT2JqZWN0IG9mIHNpbXBsZU9iamVjdHMpIHtcbiAgICAgICAgcHJvZ3JhbVNldEF0dHJpYnV0ZVBvc2l0aW9uKHByb2dyYW0sIHNpbXBsZU9iamVjdC5tZXNoLnBvc2l0aW9ucyk7XG4gICAgICAgIHByb2dyYW1TZXRBdHRyaWJ1dGVOb3JtYWwocHJvZ3JhbSwgc2ltcGxlT2JqZWN0Lm1lc2gubm9ybWFscyk7XG4gICAgICAgIHByb2dyYW1TZXRJbmRpY2VzKHByb2dyYW0sIHNpbXBsZU9iamVjdC5tZXNoLmluZGljZXMpO1xuICAgICAgICBjb25zdCBtb2RlbFRvV29ybGQgPSB0cmFuc2Zvcm1NYXRyaXgoc2ltcGxlT2JqZWN0LnRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IG1vZGVsVG9WaWV3ID0gbWF0NFByb2R1Y3Qod29ybGRUb1ZpZXcsIG1vZGVsVG9Xb3JsZCk7XG4gICAgICAgIGNvbnN0IG1vZGVsVG9Qcm9qZWN0aW9uID0gbWF0NFByb2R1Y3Qodmlld1RvUHJvamVjdGlvbiwgbW9kZWxUb1ZpZXcpO1xuICAgICAgICBjb25zdCBtb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UgPSBtYXQ0VHJhbnNwb3NlKG1hdDRJbnZlcnNlKG1vZGVsVG9WaWV3KSk7XG4gICAgICAgIHByb2dyYW1Vc2UocHJvZ3JhbSk7XG4gICAgICAgIHByb2dyYW1TZXRVbmlmb3JtTW9kZWxUb1Byb2plY3Rpb24ocHJvZ3JhbSwgbW9kZWxUb1Byb2plY3Rpb24pO1xuICAgICAgICBwcm9ncmFtU2V0VW5pZm9ybU1vZGVsVG9WaWV3SW52ZXJzZVRyYW5zcG9zZShwcm9ncmFtLCBtb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UpO1xuICAgICAgICBwcm9ncmFtU2V0VW5pZm9ybUxpZ2h0RGlyZWN0aW9uKHByb2dyYW0sIHN0YXRlLmRyYXdTeXN0ZW0ubGlnaHREaXJlY3Rpb24pO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCBzaW1wbGVPYmplY3QubWVzaC5pbmRpY2VzLmxlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuICAgIH1cbn07XG5jb25zdCByZXNpemVDYW52YXMgPSAoY2FudmFzKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheVdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChjYW52YXMud2lkdGggIT09IGRpc3BsYXlXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBkaXNwbGF5SGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRpc3BsYXlIZWlnaHQ7XG4gICAgfVxufTtcbmNvbnN0IHVwZGF0ZUNhbWVyYVByb2plY3Rpb25NYXRyaXhNdXQgPSAoY2FtZXJhLCBjYW52YXMpID0+IHtcbiAgICBjYW1lcmEucHJvamVjdGlvbiA9IHBlcnNwZWN0aXZlUHJvamVjdGlvbihjYW1lcmEucHJvamVjdGlvbi5uZWFyWiwgY2FtZXJhLnByb2plY3Rpb24uZmFyWiwgY2FtZXJhLnByb2plY3Rpb24uZm92WSwgY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCk7XG59O1xuZXhwb3J0IGNvbnN0IGluaXRNYWluQ2FtZXJhTXV0ID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgZ2wgPSBzdGF0ZS5kcmF3U3lzdGVtLmdsO1xuICAgIGNvbnN0IG1haW5DYW1lcmFFbnRpdHkgPSBjYW1lcmFFbnRpdHkobmV4dElkKCksIHRyYW5zZm9ybSh2ZWMzKC0xMCwgLTE1LCAwKSwgdmVjMyhyYWRGcm9tRGVnKDApLCByYWRGcm9tRGVnKC0xMCksIHJhZEZyb21EZWcoMCkpLCB2ZWMzKDEsIDEsIDEpKSwgcGVyc3BlY3RpdmVQcm9qZWN0aW9uKDAuMSwgNTAwMDAsIHJhZEZyb21EZWcoOTApLCBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0KSk7XG4gICAgc3RhdGUuZHJhd1N5c3RlbS5hY3RpdmVDYW1lcmFJZCA9IG1haW5DYW1lcmFFbnRpdHkuaWQ7XG4gICAgc3RhdGUuZW50aXRpZXMuc2V0KG1haW5DYW1lcmFFbnRpdHkuaWQsIG1haW5DYW1lcmFFbnRpdHkpO1xufTtcbmV4cG9ydCBjb25zdCBpbml0QmFzaWNPYmpNdXQgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBiYXNpY09iakVudGl0eSA9IHNpbXBsZU9iamVjdEVudGl0eShuZXh0SWQoKSwgdHJhbnNmb3JtKHZlYzMoMCwgMCwgLTUwKSwgdmVjMyhyYWRGcm9tRGVnKDQ1KSwgcmFkRnJvbURlZygwKSwgcmFkRnJvbURlZygwKSksIHZlYzMoMiwgMiwgMikpLCBtb3ZlbWVudCh2ZWMzKDAsIDAsIDApLCB2ZWMzKDAsIDAsIDApLCB2ZWMzKDAsIDIsIDEpLCB2ZWMzKDAsIDAsIDApKSwgY3ViZU1lc2goMTApKTtcbiAgICBzdGF0ZS5lbnRpdGllcy5zZXQoYmFzaWNPYmpFbnRpdHkuaWQsIGJhc2ljT2JqRW50aXR5KTtcbn07XG4iLCJsZXQgX2lkID0gMDtcbmV4cG9ydCBjb25zdCBuZXh0SWQgPSAoKSA9PiBfaWQrKztcbmV4cG9ydCB2YXIgRW50aXR5S2luZDtcbihmdW5jdGlvbiAoRW50aXR5S2luZCkge1xuICAgIEVudGl0eUtpbmRbRW50aXR5S2luZFtcIkNhbWVyYVwiXSA9IDBdID0gXCJDYW1lcmFcIjtcbiAgICBFbnRpdHlLaW5kW0VudGl0eUtpbmRbXCJTaW1wbGVPYmplY3RcIl0gPSAxXSA9IFwiU2ltcGxlT2JqZWN0XCI7XG59KShFbnRpdHlLaW5kIHx8IChFbnRpdHlLaW5kID0ge30pKTtcbmV4cG9ydCBjb25zdCBvZktpbmRDdXJyID0gKGtpbmQpID0+IChlbnRpdHkpID0+IGVudGl0eS5raW5kID09PSBraW5kO1xuZXhwb3J0IGNvbnN0IG9mS2luZCA9IChraW5kLCBlbnRpdHkpID0+IGVudGl0eS5raW5kID09PSBraW5kO1xuZXhwb3J0IGNvbnN0IGFzc2VydEtpbmQgPSAoa2luZCwgZW50aXR5KSA9PiB7XG4gICAgaWYgKG9mS2luZChraW5kLCBlbnRpdHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGVudGl0eSBraW5kXCIpO1xuICAgIH1cbn07XG4vLyBDYW1lcmFFbnRpdHlcbmV4cG9ydCBjbGFzcyBDYW1lcmFFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0cmFuc2Zvcm0sIHByb2plY3Rpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uID0gcHJvamVjdGlvbjtcbiAgICAgICAgdGhpcy5raW5kID0gRW50aXR5S2luZC5DYW1lcmE7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGNhbWVyYUVudGl0eSA9IChpZCwgdHJhbnNmb3JtLCBwcm9qZWN0aW9uKSA9PiBuZXcgQ2FtZXJhRW50aXR5KGlkLCB0cmFuc2Zvcm0sIHByb2plY3Rpb24pO1xuLy8gU2ltcGxlT2JqZWN0RW50aXR5XG5leHBvcnQgY2xhc3MgU2ltcGxlT2JqZWN0RW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdHJhbnNmb3JtLCBtb3ZlbWVudCwgbWVzaCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB0aGlzLm1vdmVtZW50ID0gbW92ZW1lbnQ7XG4gICAgICAgIHRoaXMubWVzaCA9IG1lc2g7XG4gICAgICAgIHRoaXMua2luZCA9IEVudGl0eUtpbmQuU2ltcGxlT2JqZWN0O1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBzaW1wbGVPYmplY3RFbnRpdHkgPSAoaWQsIHRyYW5zZm9ybSwgbW92ZW1lbnQsIG1lc2gpID0+IG5ldyBTaW1wbGVPYmplY3RFbnRpdHkoaWQsIHRyYW5zZm9ybSwgbW92ZW1lbnQsIG1lc2gpO1xuIiwiaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuL21haW5cIjtcbndpbmRvdy5vbmxvYWQgPSBtYWluO1xuIiwiaW1wb3J0IHsgZHJhd1N5c3RlbVJ1biB9IGZyb20gXCIuL2RyYXdTeXN0ZW1cIjtcbmltcG9ydCB7IHBoeXNpY3NTeXN0ZW1SdW4gfSBmcm9tIFwiLi9waHlzaWNzU3lzdGVtXCI7XG5pbXBvcnQgeyBzdGF0ZUluaXQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xubGV0IHN0YXRlO1xuY29uc3QgbG9vcCA9ICh0aW1lKSA9PiB7XG4gICAgcGh5c2ljc1N5c3RlbVJ1bihzdGF0ZSwgdGltZSk7XG4gICAgZHJhd1N5c3RlbVJ1bihzdGF0ZSwgdGltZSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xufTtcbmV4cG9ydCBjb25zdCBtYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgY2FudmFzIGVsZW1lbnRcIik7XG4gICAgfVxuICAgIHN0YXRlID0gc3RhdGVJbml0KGNhbnZhcyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xufTtcbiIsImltcG9ydCB7IGZvcm1hdE11bHRpbGluZSB9IGZyb20gXCIuL3V0aWxzXCI7XG4vLyBWZWMzXG5leHBvcnQgY2xhc3MgVmVjMyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnogPSB6O1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCB2ZWMzID0gKHgsIHksIHopID0+IG5ldyBWZWMzKHgsIHksIHopO1xuZXhwb3J0IGNvbnN0IHZlYzNGb3JtYXQgPSAodikgPT4gZm9ybWF0TXVsdGlsaW5lKGBcbiAgICBbICR7di54LnRvRml4ZWQoNSl9LFxuICAgICAgJHt2LnkudG9GaXhlZCg1KX0sXG4gICAgICAke3Yuei50b0ZpeGVkKDUpfSBdXG5gKTtcbmV4cG9ydCBjb25zdCB2ZWMzRnJvbUFycmF5ID0gKGFycikgPT4gdmVjMyhhcnJbMF0sIGFyclsxXSwgYXJyWzJdKTtcbmV4cG9ydCBjb25zdCB2ZWMzVG9BcnJheSA9ICh2KSA9PiBbdi54LCB2LnksIHYuel07XG5leHBvcnQgY29uc3QgdmVjM011bFNjYWxhciA9ICh2MSwgcykgPT4gdmVjMyh2MS54ICogcywgdjEueSAqIHMsIHYxLnogKiBzKTtcbmV4cG9ydCBjb25zdCB2ZWMzQWRkID0gKHYxLCB2MikgPT4gdmVjMyh2MS54ICsgdjIueCwgdjEueSArIHYyLnksIHYxLnogKyB2Mi56KTtcbmV4cG9ydCBjb25zdCB2ZWMzU3ViID0gKHYxLCB2MikgPT4gdmVjMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcbmV4cG9ydCBjb25zdCB2ZWMzRG90ID0gKHYxLCB2MikgPT4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56O1xuZXhwb3J0IGNvbnN0IHZlYzNDcm9zcyA9ICh2MSwgdjIpID0+IHZlYzModjEueSAqIHYyLnogLSB2MS56ICogdjIueSwgdjEueiAqIHYyLnggLSB2MS54ICogdjIueiwgdjEueCAqIHYyLnkgLSB2MS55ICogdjIueCk7XG5leHBvcnQgY29uc3QgdmVjM1RyYW5zZm9ybSA9IChtLCB2KSA9PiB7XG4gICAgY29uc3QgZSA9IG0uZWxlbWVudHMsIHggPSB2LngsIHkgPSB2LnksIHogPSB2Lno7XG4gICAgY29uc3QgcmVzdWx0ID0gdmVjMyhlWzBdICogeCArIGVbNF0gKiB5ICsgZVs4XSAqIHosIGVbMV0gKiB4ICsgZVs1XSAqIHkgKyBlWzldICogeiwgZVsyXSAqIHggKyBlWzZdICogeSArIGVbMTBdICogeik7XG4gICAgY29uc3QgdyA9IGVbM10gKiB4ICsgZVs3XSAqIHkgKyBlWzExXSAqIHogKyBlWzE1XTtcbiAgICBpZiAodyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnggPSByZXN1bHQueCAvIHc7XG4gICAgICAgIHJlc3VsdC55ID0gcmVzdWx0LnkgLyB3O1xuICAgICAgICByZXN1bHQueiA9IHJlc3VsdC56IC8gdztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IHZlYzNNYWduaXR1ZGUgPSAodikgPT4gTWF0aC5zcXJ0KE1hdGgucG93KHYueCwgMikgKyBNYXRoLnBvdyh2LnksIDIpICsgTWF0aC5wb3codi56LCAyKSk7XG5leHBvcnQgY29uc3QgdmVjM05vcm1hbGl6ZSA9ICh2KSA9PiB7XG4gICAgY29uc3QgbWFnbml0dWRlID0gdmVjM01hZ25pdHVkZSh2KTtcbiAgICByZXR1cm4gdmVjMyh2LnggLyBtYWduaXR1ZGUsIHYueSAvIG1hZ25pdHVkZSwgdi56IC8gbWFnbml0dWRlKTtcbn07XG4vLyBWZWM0XG5leHBvcnQgY2xhc3MgVmVjNCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdyA9IDEpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgdGhpcy53ID0gdztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgdmVjNCA9ICh4LCB5LCB6LCB3ID0gMSkgPT4gbmV3IFZlYzQoeCwgeSwgeiwgdyk7XG5leHBvcnQgY29uc3QgdmVjNEZvcm1hdCA9ICh2KSA9PiBmb3JtYXRNdWx0aWxpbmUoYFxuICAgIFsgJHt2LngudG9GaXhlZCg1KX0sXG4gICAgICAke3YueS50b0ZpeGVkKDUpfSxcbiAgICAgICR7di56LnRvRml4ZWQoNSl9LFxuICAgICAgJHt2LncudG9GaXhlZCg1KX0gXVxuYCk7XG5leHBvcnQgY29uc3QgdmVjNEZyb21BcnJheSA9IChhcnIpID0+IHZlYzQoYXJyWzBdLCBhcnJbMV0sIGFyclsyXSwgYXJyWzNdKTtcbmV4cG9ydCBjb25zdCB2ZWM0VG9BcnJheSA9ICh2KSA9PiBbdi54LCB2LnksIHYueiwgdi53XTtcbmV4cG9ydCBjb25zdCB2ZWM0RG90ID0gKHYxLCB2MikgPT4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56ICsgdjEudyAqIHYyLnc7XG5leHBvcnQgY29uc3QgdmVjNFRyYW5zZm9ybSA9IChtLCB2KSA9PiB7XG4gICAgY29uc3QgZSA9IG0uZWxlbWVudHMsIHggPSB2LngsIHkgPSB2LnksIHogPSB2LnosIHcgPSB2Lnc7XG4gICAgY29uc3QgcmVzdWx0ID0gdmVjNChlWzBdICogeCArIGVbNF0gKiB5ICsgZVs4XSAqIHogKyBlWzEyXSAqIHcsIGVbMV0gKiB4ICsgZVs1XSAqIHkgKyBlWzldICogeiArIGVbMTNdICogdywgZVsyXSAqIHggKyBlWzZdICogeSArIGVbMTBdICogeiArIGVbMTRdICogdywgZVszXSAqIHggKyBlWzddICogeSArIGVbMTFdICogeiArIGVbMTVdICogdyk7XG4gICAgaWYgKHJlc3VsdC53ID09PSAxKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXN1bHQueCA9IHJlc3VsdC54IC8gcmVzdWx0Lnc7XG4gICAgICAgIHJlc3VsdC55ID0gcmVzdWx0LnkgLyByZXN1bHQudztcbiAgICAgICAgcmVzdWx0LnogPSByZXN1bHQueiAvIHJlc3VsdC53O1xuICAgICAgICByZXN1bHQudyA9IDE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcbi8vIE1hdDRcbmV4cG9ydCBjbGFzcyBNYXQ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IG1hdDQgPSAoZWxlbWVudHMpID0+IG5ldyBNYXQ0KGVsZW1lbnRzKTtcbmV4cG9ydCBjb25zdCBtYXQ0Rm9ybWF0ID0gKG0pID0+IHtcbiAgICBjb25zdCBlbHNUcnVuY2F0ZWQgPSBtLmVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC50b0ZpeGVkKDUpKTtcbiAgICByZXR1cm4gZm9ybWF0TXVsdGlsaW5lKGBcbiAgICBbICR7ZWxzVHJ1bmNhdGVkWzBdfSwgJHtlbHNUcnVuY2F0ZWRbNF19LCAke2Vsc1RydW5jYXRlZFs4XX0sICR7ZWxzVHJ1bmNhdGVkWzEyXX0sXG4gICAgICAke2Vsc1RydW5jYXRlZFsxXX0sICR7ZWxzVHJ1bmNhdGVkWzVdfSwgJHtlbHNUcnVuY2F0ZWRbOV19LCAke2Vsc1RydW5jYXRlZFsxM119LFxuICAgICAgJHtlbHNUcnVuY2F0ZWRbMl19LCAke2Vsc1RydW5jYXRlZFs2XX0sICR7ZWxzVHJ1bmNhdGVkWzEwXX0sICR7ZWxzVHJ1bmNhdGVkWzE0XX0sXG4gICAgICAke2Vsc1RydW5jYXRlZFszXX0sICR7ZWxzVHJ1bmNhdGVkWzddfSwgJHtlbHNUcnVuY2F0ZWRbMTFdfSwgJHtlbHNUcnVuY2F0ZWRbMTVdfSBdXG4gIGApO1xufTtcbmV4cG9ydCBjb25zdCBtYXQ0UHJvZHVjdCA9IChtMSwgbTIpID0+IHtcbiAgICBjb25zdCBlMSA9IG0xLmVsZW1lbnRzLCBlMiA9IG0yLmVsZW1lbnRzO1xuICAgIGNvbnN0IHJlc3VsdEVsZW1lbnRzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGlpID0gaSAqIDQ7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICByZXN1bHRFbGVtZW50c1tpaSArIGpdID1cbiAgICAgICAgICAgICAgICBlMVtqXSAqIGUyW2lpXSArIGUxW2ogKyA0XSAqIGUyW2lpICsgMV0gKyBlMVtqICsgOF0gKiBlMltpaSArIDJdICsgZTFbaiArIDEyXSAqIGUyW2lpICsgM107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdDQocmVzdWx0RWxlbWVudHMpO1xufTtcbmV4cG9ydCBjb25zdCBtYXQ0VHJhbnNwb3NlID0gKG0pID0+IHtcbiAgICBjb25zdCBlID0gbS5lbGVtZW50cztcbiAgICByZXR1cm4gbWF0NChbZVswXSwgZVs0XSwgZVs4XSwgZVsxMl0sIGVbMV0sIGVbNV0sIGVbOV0sIGVbMTNdLCBlWzJdLCBlWzZdLCBlWzEwXSwgZVsxNF0sIGVbM10sIGVbN10sIGVbMTFdLCBlWzE1XV0pO1xufTtcbmV4cG9ydCBjb25zdCBtYXQ0RnJvbUV1bGVyUm90YXRpb24gPSAoZXVsZXIpID0+IHtcbiAgICBjb25zdCB4ID0gZXVsZXIueCwgeSA9IGV1bGVyLnksIHogPSBldWxlci56LCBzaW5YID0gTWF0aC5zaW4oeCksIGNvc1ggPSBNYXRoLmNvcyh4KSwgc2luWSA9IE1hdGguc2luKHkpLCBjb3NZID0gTWF0aC5jb3MoeSksIHNpblogPSBNYXRoLnNpbih6KSwgY29zWiA9IE1hdGguY29zKHopO1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiBtYXQ0KFtcbiAgICAgICAgY29zWSAqIGNvc1osXG4gICAgICAgIGNvc1ggKiBzaW5aICsgY29zWiAqIHNpblggKiBzaW5ZLFxuICAgICAgICBzaW5YICogc2luWiAtIGNvc1ggKiBjb3NaICogc2luWSxcbiAgICAgICAgMCxcbiAgICAgICAgLWNvc1kgKiBzaW5aLFxuICAgICAgICBjb3NYICogY29zWiAtIHNpblggKiBzaW5ZICogc2luWixcbiAgICAgICAgY29zWiAqIHNpblggKyBjb3NYICogc2luWSAqIHNpblosXG4gICAgICAgIDAsXG4gICAgICAgIHNpblksXG4gICAgICAgIC1jb3NZICogc2luWCxcbiAgICAgICAgY29zWCAqIGNvc1ksXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgXSk7XG59O1xuZXhwb3J0IGNvbnN0IG1hdDRGcm9tUXVhdCA9IChxKSA9PiB7XG4gICAgY29uc3QgeCA9IHEueCwgeSA9IHEueSwgeiA9IHEueiwgdyA9IHEudywgeDIgPSBNYXRoLnBvdyh4LCAyKSwgeTIgPSBNYXRoLnBvdyh5LCAyKSwgejIgPSBNYXRoLnBvdyh6LCAyKTtcbiAgICByZXR1cm4gbWF0NChbXG4gICAgICAgIDEgLSAyICogeTIgLSAyICogejIsXG4gICAgICAgIDIgKiB4ICogeSArIDIgKiB3ICogeixcbiAgICAgICAgMiAqIHggKiB6IC0gMiAqIHcgKiB5LFxuICAgICAgICAwLFxuICAgICAgICAyICogeCAqIHkgLSAyICogdyAqIHosXG4gICAgICAgIDEgLSAyICogeDIgLSAyICogejIsXG4gICAgICAgIDIgKiB5ICogeiArIDIgKiB3ICogeCxcbiAgICAgICAgMCxcbiAgICAgICAgMiAqIHggKiB6ICsgMiAqIHcgKiB5LFxuICAgICAgICAyICogeSAqIHogLSAyICogdyAqIHgsXG4gICAgICAgIDEgLSAyICogeDIgLSAyICogeTIsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgXSk7XG59O1xuZXhwb3J0IGNvbnN0IG1hdDRGcm9tVHJhbnNsYXRpb25WZWMgPSAodHJhbnNsYXRpb24pID0+IHtcbiAgICBjb25zdCB4ID0gdHJhbnNsYXRpb24ueCwgeSA9IHRyYW5zbGF0aW9uLnksIHogPSB0cmFuc2xhdGlvbi56O1xuICAgIHJldHVybiBtYXQ0KFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCB4LCB5LCB6LCAxXSk7XG59O1xuZXhwb3J0IGNvbnN0IG1hdDRGcm9tU2NhbGVWZWMgPSAoc2NhbGUpID0+IHtcbiAgICBjb25zdCB4ID0gc2NhbGUueCwgeSA9IHNjYWxlLnksIHogPSBzY2FsZS56O1xuICAgIHJldHVybiBtYXQ0KFt4LCAwLCAwLCAwLCAwLCB5LCAwLCAwLCAwLCAwLCB6LCAwLCAwLCAwLCAwLCAxXSk7XG59O1xuZXhwb3J0IGNvbnN0IG1hdDREZXRlcm1pbmFudCA9IChtKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvbWF0cml4L2Z1bmN0aW9ucy9kZXRlcm1pbmFudC9mb3VyRC9pbmRleC5odG1cbiAgICBjb25zdCBlID0gbS5lbGVtZW50cztcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICByZXR1cm4gZVsxMl0gKiBlWzldICogZVs2XSAqIGVbM10gLSBlWzhdICogZVsxM10gKiBlWzZdICogZVszXSAtXG4gICAgICAgIGVbMTJdICogZVs1XSAqIGVbMTBdICogZVszXSArIGVbNF0gKiBlWzEzXSAqIGVbMTBdICogZVszXSArXG4gICAgICAgIGVbOF0gKiBlWzVdICogZVsxNF0gKiBlWzNdIC0gZVs0XSAqIGVbOV0gKiBlWzE0XSAqIGVbM10gLVxuICAgICAgICBlWzEyXSAqIGVbOV0gKiBlWzJdICogZVs3XSArIGVbOF0gKiBlWzEzXSAqIGVbMl0gKiBlWzddICtcbiAgICAgICAgZVsxMl0gKiBlWzFdICogZVsxMF0gKiBlWzddIC0gZVswXSAqIGVbMTNdICogZVsxMF0gKiBlWzddIC1cbiAgICAgICAgZVs4XSAqIGVbMV0gKiBlWzE0XSAqIGVbN10gKyBlWzBdICogZVs5XSAqIGVbMTRdICogZVs3XSArXG4gICAgICAgIGVbMTJdICogZVs1XSAqIGVbMl0gKiBlWzExXSAtIGVbNF0gKiBlWzEzXSAqIGVbMl0gKiBlWzExXSAtXG4gICAgICAgIGVbMTJdICogZVsxXSAqIGVbNl0gKiBlWzExXSArIGVbMF0gKiBlWzEzXSAqIGVbNl0gKiBlWzExXSArXG4gICAgICAgIGVbNF0gKiBlWzFdICogZVsxNF0gKiBlWzExXSAtIGVbMF0gKiBlWzVdICogZVsxNF0gKiBlWzExXSAtXG4gICAgICAgIGVbOF0gKiBlWzVdICogZVsyXSAqIGVbMTVdICsgZVs0XSAqIGVbOV0gKiBlWzJdICogZVsxNV0gK1xuICAgICAgICBlWzhdICogZVsxXSAqIGVbNl0gKiBlWzE1XSAtIGVbMF0gKiBlWzldICogZVs2XSAqIGVbMTVdIC1cbiAgICAgICAgZVs0XSAqIGVbMV0gKiBlWzEwXSAqIGVbMTVdICsgZVswXSAqIGVbNV0gKiBlWzEwXSAqIGVbMTVdO1xufTtcbmV4cG9ydCBjb25zdCBtYXQ0SW52ZXJzZSA9IChtKSA9PiB7XG4gICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9tYXRyaXgvZnVuY3Rpb25zL2ludmVyc2UvZm91ckQvaW5kZXguaHRtXG4gICAgY29uc3QgZSA9IG0uZWxlbWVudHMsIGRldCA9IG1hdDREZXRlcm1pbmFudChtKSwgZGV0SW52ID0gMSAvIGRldDtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICByZXR1cm4gbWF0NChbXG4gICAgICAgIChlWzldICogZVsxNF0gKiBlWzddIC0gZVsxM10gKiBlWzEwXSAqIGVbN10gKyBlWzEzXSAqIGVbNl0gKiBlWzExXSAtIGVbNV0gKiBlWzE0XSAqIGVbMTFdIC0gZVs5XSAqIGVbNl0gKiBlWzE1XSArIGVbNV0gKiBlWzEwXSAqIGVbMTVdKSAqIGRldEludixcbiAgICAgICAgKGVbMTNdICogZVsxMF0gKiBlWzNdIC0gZVs5XSAqIGVbMTRdICogZVszXSAtIGVbMTNdICogZVsyXSAqIGVbMTFdICsgZVsxXSAqIGVbMTRdICogZVsxMV0gKyBlWzldICogZVsyXSAqIGVbMTVdIC0gZVsxXSAqIGVbMTBdICogZVsxNV0pICogZGV0SW52LFxuICAgICAgICAoZVs1XSAqIGVbMTRdICogZVszXSAtIGVbMTNdICogZVs2XSAqIGVbM10gKyBlWzEzXSAqIGVbMl0gKiBlWzddIC0gZVsxXSAqIGVbMTRdICogZVs3XSAtIGVbNV0gKiBlWzJdICogZVsxNV0gKyBlWzFdICogZVs2XSAqIGVbMTVdKSAqIGRldEludixcbiAgICAgICAgKGVbOV0gKiBlWzZdICogZVszXSAtIGVbNV0gKiBlWzEwXSAqIGVbM10gLSBlWzldICogZVsyXSAqIGVbN10gKyBlWzFdICogZVsxMF0gKiBlWzddICsgZVs1XSAqIGVbMl0gKiBlWzExXSAtIGVbMV0gKiBlWzZdICogZVsxMV0pICogZGV0SW52LFxuICAgICAgICAoZVsxMl0gKiBlWzEwXSAqIGVbN10gLSBlWzhdICogZVsxNF0gKiBlWzddIC0gZVsxMl0gKiBlWzZdICogZVsxMV0gKyBlWzRdICogZVsxNF0gKiBlWzExXSArIGVbOF0gKiBlWzZdICogZVsxNV0gLSBlWzRdICogZVsxMF0gKiBlWzE1XSkgKiBkZXRJbnYsXG4gICAgICAgIChlWzhdICogZVsxNF0gKiBlWzNdIC0gZVsxMl0gKiBlWzEwXSAqIGVbM10gKyBlWzEyXSAqIGVbMl0gKiBlWzExXSAtIGVbMF0gKiBlWzE0XSAqIGVbMTFdIC0gZVs4XSAqIGVbMl0gKiBlWzE1XSArIGVbMF0gKiBlWzEwXSAqIGVbMTVdKSAqIGRldEludixcbiAgICAgICAgKGVbMTJdICogZVs2XSAqIGVbM10gLSBlWzRdICogZVsxNF0gKiBlWzNdIC0gZVsxMl0gKiBlWzJdICogZVs3XSArIGVbMF0gKiBlWzE0XSAqIGVbN10gKyBlWzRdICogZVsyXSAqIGVbMTVdIC0gZVswXSAqIGVbNl0gKiBlWzE1XSkgKiBkZXRJbnYsXG4gICAgICAgIChlWzRdICogZVsxMF0gKiBlWzNdIC0gZVs4XSAqIGVbNl0gKiBlWzNdICsgZVs4XSAqIGVbMl0gKiBlWzddIC0gZVswXSAqIGVbMTBdICogZVs3XSAtIGVbNF0gKiBlWzJdICogZVsxMV0gKyBlWzBdICogZVs2XSAqIGVbMTFdKSAqIGRldEludixcbiAgICAgICAgKGVbOF0gKiBlWzEzXSAqIGVbN10gLSBlWzEyXSAqIGVbOV0gKiBlWzddICsgZVsxMl0gKiBlWzVdICogZVsxMV0gLSBlWzRdICogZVsxM10gKiBlWzExXSAtIGVbOF0gKiBlWzVdICogZVsxNV0gKyBlWzRdICogZVs5XSAqIGVbMTVdKSAqIGRldEludixcbiAgICAgICAgKGVbMTJdICogZVs5XSAqIGVbM10gLSBlWzhdICogZVsxM10gKiBlWzNdIC0gZVsxMl0gKiBlWzFdICogZVsxMV0gKyBlWzBdICogZVsxM10gKiBlWzExXSArIGVbOF0gKiBlWzFdICogZVsxNV0gLSBlWzBdICogZVs5XSAqIGVbMTVdKSAqIGRldEludixcbiAgICAgICAgKGVbNF0gKiBlWzEzXSAqIGVbM10gLSBlWzEyXSAqIGVbNV0gKiBlWzNdICsgZVsxMl0gKiBlWzFdICogZVs3XSAtIGVbMF0gKiBlWzEzXSAqIGVbN10gLSBlWzRdICogZVsxXSAqIGVbMTVdICsgZVswXSAqIGVbNV0gKiBlWzE1XSkgKiBkZXRJbnYsXG4gICAgICAgIChlWzhdICogZVs1XSAqIGVbM10gLSBlWzRdICogZVs5XSAqIGVbM10gLSBlWzhdICogZVsxXSAqIGVbN10gKyBlWzBdICogZVs5XSAqIGVbN10gKyBlWzRdICogZVsxXSAqIGVbMTFdIC0gZVswXSAqIGVbNV0gKiBlWzExXSkgKiBkZXRJbnYsXG4gICAgICAgIChlWzEyXSAqIGVbOV0gKiBlWzZdIC0gZVs4XSAqIGVbMTNdICogZVs2XSAtIGVbMTJdICogZVs1XSAqIGVbMTBdICsgZVs0XSAqIGVbMTNdICogZVsxMF0gKyBlWzhdICogZVs1XSAqIGVbMTRdIC0gZVs0XSAqIGVbOV0gKiBlWzE0XSkgKiBkZXRJbnYsXG4gICAgICAgIChlWzhdICogZVsxM10gKiBlWzJdIC0gZVsxMl0gKiBlWzldICogZVsyXSArIGVbMTJdICogZVsxXSAqIGVbMTBdIC0gZVswXSAqIGVbMTNdICogZVsxMF0gLSBlWzhdICogZVsxXSAqIGVbMTRdICsgZVswXSAqIGVbOV0gKiBlWzE0XSkgKiBkZXRJbnYsXG4gICAgICAgIChlWzEyXSAqIGVbNV0gKiBlWzJdIC0gZVs0XSAqIGVbMTNdICogZVsyXSAtIGVbMTJdICogZVsxXSAqIGVbNl0gKyBlWzBdICogZVsxM10gKiBlWzZdICsgZVs0XSAqIGVbMV0gKiBlWzE0XSAtIGVbMF0gKiBlWzVdICogZVsxNF0pICogZGV0SW52LFxuICAgICAgICAoZVs0XSAqIGVbOV0gKiBlWzJdIC0gZVs4XSAqIGVbNV0gKiBlWzJdICsgZVs4XSAqIGVbMV0gKiBlWzZdIC0gZVswXSAqIGVbOV0gKiBlWzZdIC0gZVs0XSAqIGVbMV0gKiBlWzEwXSArIGVbMF0gKiBlWzVdICogZVsxMF0pICogZGV0SW52LFxuICAgIF0pO1xuICAgIC8vIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoXG59O1xuLy8gUXVhdGVybmlvblxuZXhwb3J0IGNvbnN0IHF1YXQgPSAoYXhpcywgYW5nbGUpID0+IHtcbiAgICBjb25zdCBheGlzTm9ybWFsaXplZCA9IHZlYzNOb3JtYWxpemUoYXhpcyk7XG4gICAgY29uc3QgaGFsZkFuZ2xlID0gYW5nbGUgLyAyO1xuICAgIGNvbnN0IGhhbGZTaW4gPSBNYXRoLnNpbihoYWxmQW5nbGUpO1xuICAgIGNvbnN0IGhhbGZDb3MgPSBNYXRoLmNvcyhoYWxmQW5nbGUpO1xuICAgIHJldHVybiB2ZWM0KGF4aXNOb3JtYWxpemVkLnggKiBoYWxmU2luLCBheGlzTm9ybWFsaXplZC55ICogaGFsZlNpbiwgYXhpc05vcm1hbGl6ZWQueiAqIGhhbGZTaW4sIGhhbGZDb3MpO1xufTtcbmV4cG9ydCBjb25zdCBxdWF0UHJvZHVjdCA9IChxMSwgcTIpID0+IHtcbiAgICBjb25zdCB4MSA9IHExLngsIHkxID0gcTEueSwgejEgPSBxMS56LCB3MSA9IHExLncsIHgyID0gcTIueCwgeTIgPSBxMi55LCB6MiA9IHEyLnosIHcyID0gcTIudztcbiAgICByZXR1cm4gdmVjNCh3MSAqIHgyICsgeDEgKiB3MiArIHkxICogejIgLSB6MSAqIHkyLCB3MSAqIHkyIC0geDEgKiB6MiArIHkxICogdzIgKyB6MSAqIHgyLCB3MSAqIHoyICsgeDEgKiB5MiAtIHkxICogeDIgKyB6MSAqIHcyLCB3MSAqIHcyIC0geDEgKiB4MiAtIHkxICogeTIgLSB6MSAqIHoyKTtcbn07XG4vLyBNaXNjXG5leHBvcnQgY29uc3QgcmFkRnJvbURlZyA9IChkZWcpID0+IChkZWcgLyAxODApICogTWF0aC5QSTtcbiIsImltcG9ydCB7IEVudGl0eUtpbmQsIG9mS2luZEN1cnIgfSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7IHZlYzNBZGQsIHZlYzNNdWxTY2FsYXIgfSBmcm9tIFwiLi9tYXRoXCI7XG5jb25zdCBQSFlTSUNTX0ZQUyA9IDYwO1xuY29uc3QgUEhZU0lDU19GUkFNRV9MRU5HVEhfUyA9IDEgLyBQSFlTSUNTX0ZQUztcbmNvbnN0IFBIWVNJQ1NfRlJBTUVfTEVOR1RIX01TID0gUEhZU0lDU19GUkFNRV9MRU5HVEhfUyAqIDEwMDA7XG5leHBvcnQgY29uc3QgcGh5c2ljc1N5c3RlbUluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZnJhbWUgPSB7IGNvdW50OiAwLCBzdGFydDogMCB9O1xuICAgIHJldHVybiB7IGZyYW1lIH07XG59O1xuZXhwb3J0IGNvbnN0IHBoeXNpY3NTeXN0ZW1SdW4gPSAoc3RhdGUsIHRpbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZSA9IHN0YXRlLnBoeXNpY3NTeXN0ZW0uZnJhbWU7XG4gICAgd2hpbGUgKGlzRnJhbWVDb21wbGV0ZShmcmFtZSwgdGltZSkpIHtcbiAgICAgICAgc2ltdWxhdGUoc3RhdGUpO1xuICAgICAgICBhZHZhbmNlRnJhbWVNdXQoZnJhbWUpO1xuICAgIH1cbn07XG5jb25zdCBpc0ZyYW1lQ29tcGxldGUgPSAoZnJhbWUsIHRpbWUpID0+IHRpbWUgLSBmcmFtZS5zdGFydCA+PSBQSFlTSUNTX0ZSQU1FX0xFTkdUSF9NUztcbmNvbnN0IGFkdmFuY2VGcmFtZU11dCA9IChmcmFtZSkgPT4ge1xuICAgIGZyYW1lLmNvdW50ICs9IDE7XG4gICAgZnJhbWUuc3RhcnQgKz0gUEhZU0lDU19GUkFNRV9MRU5HVEhfTVM7XG59O1xuY29uc3Qgc2ltdWxhdGUgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBlbnRpdGllcyA9IEFycmF5LmZyb20oc3RhdGUuZW50aXRpZXMudmFsdWVzKCkpO1xuICAgIGNvbnN0IHNpbXBsZU9iamVjdHMgPSBlbnRpdGllcy5maWx0ZXIob2ZLaW5kQ3VycihFbnRpdHlLaW5kLlNpbXBsZU9iamVjdCkpO1xuICAgIGZvciAoY29uc3Qgc2ltcGxlT2JqZWN0IG9mIHNpbXBsZU9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgbW92ZW1lbnQgPSBzaW1wbGVPYmplY3QubW92ZW1lbnQsIHRyYW5zZm9ybSA9IHNpbXBsZU9iamVjdC50cmFuc2Zvcm07XG4gICAgICAgIG1vdmVtZW50LnNwZWVkID0gdmVjM0FkZChtb3ZlbWVudC5zcGVlZCwgdmVjM011bFNjYWxhcihtb3ZlbWVudC5kU3BlZWQsIFBIWVNJQ1NfRlJBTUVfTEVOR1RIX1MpKTtcbiAgICAgICAgbW92ZW1lbnQucm90YXRpb24gPSB2ZWMzQWRkKG1vdmVtZW50LnJvdGF0aW9uLCB2ZWMzTXVsU2NhbGFyKG1vdmVtZW50LmRSb3RhdGlvbiwgUEhZU0lDU19GUkFNRV9MRU5HVEhfUykpO1xuICAgICAgICB0cmFuc2Zvcm0ucG9zaXRpb24gPSB2ZWMzQWRkKHRyYW5zZm9ybS5wb3NpdGlvbiwgdmVjM011bFNjYWxhcihtb3ZlbWVudC5zcGVlZCwgUEhZU0lDU19GUkFNRV9MRU5HVEhfUykpO1xuICAgICAgICB0cmFuc2Zvcm0ucm90YXRpb24gPSB2ZWMzQWRkKHRyYW5zZm9ybS5yb3RhdGlvbiwgdmVjM011bFNjYWxhcihtb3ZlbWVudC5yb3RhdGlvbiwgUEhZU0lDU19GUkFNRV9MRU5HVEhfUykpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyB2ZWMzVG9BcnJheSB9IGZyb20gXCIuL21hdGhcIjtcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGAjdmVyc2lvbiAzMDAgZXNcbnVuaWZvcm0gbWF0NCB1X21vZGVsVG9Qcm9qZWN0aW9uO1xudW5pZm9ybSBtYXQ0IHVfbW9kZWxUb1ZpZXdJbnZlcnNlVHJhbnNwb3NlO1xuXG5pbiB2ZWM0IGluX3Bvc2l0aW9uO1xuaW4gdmVjMyBpbl9ub3JtYWw7XG5cbm91dCB2ZWMzIHZfbm9ybWFsO1xuXG52b2lkIG1haW4oKSB7XG4gIGdsX1Bvc2l0aW9uID0gdV9tb2RlbFRvUHJvamVjdGlvbiAqIGluX3Bvc2l0aW9uO1xuICB2X25vcm1hbCA9IG1hdDModV9tb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UpICogaW5fbm9ybWFsO1xufVxuYDtcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gYCN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cbnVuaWZvcm0gdmVjMyB1X2xpZ2h0RGlyZWN0aW9uO1xuXG5pbiB2ZWMzIHZfbm9ybWFsO1xuXG5vdXQgdmVjNCBvdXRfY29sb3I7XG5cbnZvaWQgbWFpbigpIHtcbiAgZmxvYXQgbGlnaHRDb250cmlidXRpb24gPSBkb3Qobm9ybWFsaXplKHZfbm9ybWFsKSwgLTEuMCAqIHVfbGlnaHREaXJlY3Rpb24pO1xuXG4gIG91dF9jb2xvciA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgb3V0X2NvbG9yLnJnYiAqPSBsaWdodENvbnRyaWJ1dGlvbjtcbn1cbmA7XG5leHBvcnQgY29uc3QgcHJvZ3JhbUluaXQgPSAoZ2wpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVXZWJHTFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVdlYkdMU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcbiAgICBjb25zdCBwcm9ncmFtID0gY3JlYXRlV2ViR0xQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgICBjb25zdCBwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGNvbnN0IG5vcm1hbEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgY29uc3QgdV9tb2RlbFRvUHJvamVjdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVfbW9kZWxUb1Byb2plY3Rpb25cIik7XG4gICAgY29uc3QgdV9tb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1X21vZGVsVG9WaWV3SW52ZXJzZVRyYW5zcG9zZVwiKTtcbiAgICBjb25zdCB1X2xpZ2h0RGlyZWN0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV9saWdodERpcmVjdGlvblwiKTtcbiAgICBjb25zdCBpbl9wb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiaW5fcG9zaXRpb25cIik7XG4gICAgY29uc3QgaW5fbm9ybWFsID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJpbl9ub3JtYWxcIik7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5fcG9zaXRpb24pO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGluX25vcm1hbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2wsXG4gICAgICAgIHByb2dyYW0sXG4gICAgICAgIHBvc2l0aW9uQnVmZmVyLFxuICAgICAgICBub3JtYWxCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgICAgICB1X21vZGVsVG9Qcm9qZWN0aW9uLFxuICAgICAgICB1X21vZGVsVG9WaWV3SW52ZXJzZVRyYW5zcG9zZSxcbiAgICAgICAgdV9saWdodERpcmVjdGlvbixcbiAgICAgICAgaW5fcG9zaXRpb24sXG4gICAgICAgIGluX25vcm1hbCxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBwcm9ncmFtVXNlID0gKHByb2dyYW0pID0+IHtcbiAgICBwcm9ncmFtLmdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcbn07XG5leHBvcnQgY29uc3QgcHJvZ3JhbVNldFVuaWZvcm1Nb2RlbFRvUHJvamVjdGlvbiA9IChwcm9ncmFtLCBtb2RlbFRvUHJvamVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGdsID0gcHJvZ3JhbS5nbCwgdV9tb2RlbFRvUHJvamVjdGlvbiA9IHByb2dyYW0udV9tb2RlbFRvUHJvamVjdGlvbjtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfbW9kZWxUb1Byb2plY3Rpb24sIGZhbHNlLCBtb2RlbFRvUHJvamVjdGlvbi5lbGVtZW50cyk7XG59O1xuZXhwb3J0IGNvbnN0IHByb2dyYW1TZXRVbmlmb3JtTW9kZWxUb1ZpZXdJbnZlcnNlVHJhbnNwb3NlID0gKHByb2dyYW0sIG1vZGVsVG9WaWV3SW52ZXJzZVRyYW5zcG9zZSkgPT4ge1xuICAgIGNvbnN0IGdsID0gcHJvZ3JhbS5nbCwgdV9tb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UgPSBwcm9ncmFtLnVfbW9kZWxUb1ZpZXdJbnZlcnNlVHJhbnNwb3NlO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9tb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UsIGZhbHNlLCBtb2RlbFRvVmlld0ludmVyc2VUcmFuc3Bvc2UuZWxlbWVudHMpO1xufTtcbmV4cG9ydCBjb25zdCBwcm9ncmFtU2V0VW5pZm9ybUxpZ2h0RGlyZWN0aW9uID0gKHByb2dyYW0sIGxpZ2h0RGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgZ2wgPSBwcm9ncmFtLmdsLCB1X2xpZ2h0RGlyZWN0aW9uID0gcHJvZ3JhbS51X2xpZ2h0RGlyZWN0aW9uO1xuICAgIGdsLnVuaWZvcm0zZnYodV9saWdodERpcmVjdGlvbiwgdmVjM1RvQXJyYXkobGlnaHREaXJlY3Rpb24pKTtcbn07XG5leHBvcnQgY29uc3QgcHJvZ3JhbVNldEF0dHJpYnV0ZVBvc2l0aW9uID0gKHByb2dyYW0sIHBvc2l0aW9ucykgPT4ge1xuICAgIGNvbnN0IGdsID0gcHJvZ3JhbS5nbCwgcG9zaXRpb25CdWZmZXIgPSBwcm9ncmFtLnBvc2l0aW9uQnVmZmVyLCBpbl9wb3NpdGlvbiA9IHByb2dyYW0uaW5fcG9zaXRpb247XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihpbl9wb3NpdGlvbiwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbn07XG5leHBvcnQgY29uc3QgcHJvZ3JhbVNldEF0dHJpYnV0ZU5vcm1hbCA9IChwcm9ncmFtLCBub3JtYWxzKSA9PiB7XG4gICAgY29uc3QgZ2wgPSBwcm9ncmFtLmdsLCBub3JtYWxCdWZmZXIgPSBwcm9ncmFtLm5vcm1hbEJ1ZmZlciwgaW5fbm9ybWFsID0gcHJvZ3JhbS5pbl9ub3JtYWw7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG5vcm1hbEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGluX25vcm1hbCwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbn07XG5leHBvcnQgY29uc3QgcHJvZ3JhbVNldEluZGljZXMgPSAocHJvZ3JhbSwgaW5kaWNlcykgPT4ge1xuICAgIGNvbnN0IGdsID0gcHJvZ3JhbS5nbCwgaW5kZXhCdWZmZXIgPSBwcm9ncmFtLmluZGV4QnVmZmVyO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcbn07XG5jb25zdCBjcmVhdGVXZWJHTFByb2dyYW0gPSAoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpID0+IHtcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGlmICghcHJvZ3JhbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIHByb2dyYW1cIik7XG4gICAgfVxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgY29uc3QgbGlua1N0YXR1cyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xuICAgIGlmIChsaW5rU3RhdHVzKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gbGluayBwcm9ncmFtXCIpO1xuICAgIH1cbn07XG5jb25zdCBjcmVhdGVXZWJHTFNoYWRlciA9IChnbCwgdHlwZSwgc291cmNlKSA9PiB7XG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGlmICghc2hhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgc2hhZGVyXCIpO1xuICAgIH1cbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcbiAgICBjb25zdCBjb21waWxlU3RhdHVzID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xuICAgIGlmIChjb21waWxlU3RhdHVzKSB7XG4gICAgICAgIHJldHVybiBzaGFkZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyhnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuICAgICAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNvbXBpbGUgc2hhZGVyXCIpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBkcmF3U3lzdGVtSW5pdCwgaW5pdEJhc2ljT2JqTXV0LCBpbml0TWFpbkNhbWVyYU11dCB9IGZyb20gXCIuL2RyYXdTeXN0ZW1cIjtcbmltcG9ydCB7IHBoeXNpY3NTeXN0ZW1Jbml0IH0gZnJvbSBcIi4vcGh5c2ljc1N5c3RlbVwiO1xuZXhwb3J0IGNvbnN0IHN0YXRlSW5pdCA9IChjYW52YXMpID0+IHtcbiAgICBjb25zdCBkcmF3U3lzdGVtID0gZHJhd1N5c3RlbUluaXQoY2FudmFzKTtcbiAgICBjb25zdCBwaHlzaWNzU3lzdGVtID0gcGh5c2ljc1N5c3RlbUluaXQoKTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgZW50aXRpZXM6IG5ldyBNYXAoKSxcbiAgICAgICAgZHJhd1N5c3RlbSxcbiAgICAgICAgcGh5c2ljc1N5c3RlbSxcbiAgICB9O1xuICAgIGluaXRNYWluQ2FtZXJhTXV0KHN0YXRlKTtcbiAgICBpbml0QmFzaWNPYmpNdXQoc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybWF0TXVsdGlsaW5lID0gKHN0cikgPT4ge1xuICAgIGNvbnN0IHRyaW1Bcm91bmRSZWdleCA9IC9eKD86XFxzKlxcbik/KCg/Oi58XFxuKSo/KVxccyokL2c7XG4gICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VSZWdleCA9IC9eKFtcXHQgXSopKD86XFxTLiopJC9nbTtcbiAgICBjb25zdCB0cmltQXJvdW5kTWF0Y2ggPSB0cmltQXJvdW5kUmVnZXguZXhlYyhzdHIpO1xuICAgIGlmICghdHJpbUFyb3VuZE1hdGNoIHx8ICF0cmltQXJvdW5kTWF0Y2hbMV0pIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGNvcmVUZXh0ID0gdHJpbUFyb3VuZE1hdGNoWzFdO1xuICAgIGxldCBsZWFkaW5nV2hpdGVzcGFjZU1hdGNoO1xuICAgIGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlTWF0Y2hlcyA9IFtdO1xuICAgIHdoaWxlICgobGVhZGluZ1doaXRlc3BhY2VNYXRjaCA9IGxlYWRpbmdXaGl0ZXNwYWNlUmVnZXguZXhlYyhjb3JlVGV4dCkpICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChsZWFkaW5nV2hpdGVzcGFjZU1hdGNoWzFdKSB7XG4gICAgICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZU1hdGNoZXMucHVzaChsZWFkaW5nV2hpdGVzcGFjZU1hdGNoWzFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWxlYWRpbmdXaGl0ZXNwYWNlTWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IG1pbkxlYWRpbmdXaGl0ZXNwYWNlTGVuZ3RoID0gTWF0aC5taW4oLi4ubGVhZGluZ1doaXRlc3BhY2VNYXRjaGVzLm1hcCgod2hpdGVzcGFjZSkgPT4gd2hpdGVzcGFjZS5sZW5ndGgpKTtcbiAgICByZXR1cm4gY29yZVRleHRcbiAgICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUuc2xpY2UobWluTGVhZGluZ1doaXRlc3BhY2VMZW5ndGgpKVxuICAgICAgICAuam9pbihcIlxcblwiKTtcbn07XG4vLyBjb21wYXJlRm4oZWwpIHJldHVybnMgMSBpZiBlbCBpcyBncmVhdGVyLCAtMSBpZiBpdCdzIHNtYWxsZXIgb3IgMCBpZiBpdCdzIGVxdWFsIHRvIHRoZSB0YXJnZXRcbmV4cG9ydCBjb25zdCBiaXNlY3QgPSAoYXJyLCBjb21wYXJlRm4sIHNsaWNlU3RhcnRJbmRleCwgc2xpY2VFbmRJbmRleCkgPT4ge1xuICAgIGlmICghc2xpY2VTdGFydEluZGV4KSB7XG4gICAgICAgIHNsaWNlU3RhcnRJbmRleCA9IDA7XG4gICAgfVxuICAgIGlmICghc2xpY2VFbmRJbmRleCkge1xuICAgICAgICBzbGljZUVuZEluZGV4ID0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgc2xpY2VMZW5ndGggPSBzbGljZUVuZEluZGV4IC0gc2xpY2VTdGFydEluZGV4O1xuICAgIGlmIChzbGljZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2xpY2VMZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGNvbXBhcmVGbihhcnJbc2xpY2VTdGFydEluZGV4XSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJbc2xpY2VTdGFydEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtaWRJbmRleCA9IHNsaWNlU3RhcnRJbmRleCArIE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKTtcbiAgICAgICAgY29uc3QgbWlkID0gYXJyW21pZEluZGV4XTtcbiAgICAgICAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmVGbihtaWQpO1xuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2xpY2VTdGFydEluZGV4ID0gc2xpY2VTdGFydEluZGV4O1xuICAgICAgICAgICAgY29uc3QgbmV3U2xpY2VFbmRJbmRleCA9IG1pZEluZGV4O1xuICAgICAgICAgICAgcmV0dXJuIGJpc2VjdChhcnIsIGNvbXBhcmVGbiwgbmV3U2xpY2VTdGFydEluZGV4LCBuZXdTbGljZUVuZEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2xpY2VTdGFydEluZGV4ID0gbWlkSW5kZXggKyAxO1xuICAgICAgICAgICAgY29uc3QgbmV3U2xpY2VFbmRJbmRleCA9IHNsaWNlRW5kSW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gYmlzZWN0KGFyciwgY29tcGFyZUZuLCBuZXdTbGljZVN0YXJ0SW5kZXgsIG5ld1NsaWNlRW5kSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgY29uc3QgY29tcGFyZU51bWJlcnMgPSAobjEsIG4yKSA9PiAobjEgPiBuMiA/IDEgOiBuMSA8IG4yID8gLTEgOiAwKTtcbmV4cG9ydCBjb25zdCBkZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IGFzc2VydCA9ICh2YWx1ZSwgbXNnID0gXCJvdXBzXCIpID0+IHtcbiAgICBpZiAoZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihtc2cpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9