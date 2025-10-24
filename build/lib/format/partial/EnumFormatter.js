"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumFormatter = void 0;
var EnumFormatter;
(function (EnumFormatter) {
    function format(enumDescriptor, indent) {
        var _a;
        const enumName = enumDescriptor.getName();
        const deprecated = ((_a = enumDescriptor.getOptions()) === null || _a === void 0 ? void 0 : _a.getDeprecated()) || false;
        const values = {};
        enumDescriptor.getValueList().forEach((value) => {
            var _a;
            values[value.getName().toUpperCase()] = {
                index: value.getNumber(),
                deprecated: ((_a = value.getOptions()) === null || _a === void 0 ? void 0 : _a.getDeprecated()) || false,
            };
        });
        return {
            indent,
            enumName,
            values,
            deprecated,
        };
    }
    EnumFormatter.format = format;
})(EnumFormatter = exports.EnumFormatter || (exports.EnumFormatter = {}));
//# sourceMappingURL=EnumFormatter.js.map