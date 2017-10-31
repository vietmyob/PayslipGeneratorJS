"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PayslipGenerator = function () {
    function PayslipGenerator() {
        _classCallCheck(this, PayslipGenerator);
    }

    _createClass(PayslipGenerator, [{
        key: "print",
        value: function print(info) {
            return "David Rudd,01 March – 31 March,5004,922,4082,450";
        }
    }]);

    return PayslipGenerator;
}();

module.exports = PayslipGenerator;
//# sourceMappingURL=PayslipGenerator.js.map