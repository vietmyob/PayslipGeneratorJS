const assert = require('assert');
const PayslipGenerator = require('../Logic/PayslipGenerator');

describe('PayslipGenerator', function() {
    let payslipGenerator;
    describe('#Print()', function() {
        it('should print payslip based on users input', function() {
            payslipGenerator = new PayslipGenerator();
            var actual = payslipGenerator.print("David,Rudd,60050,9%,01 March – 31 March");
            assert.equal("David Rudd,01 March – 31 March,5004,922,4082,450", actual);
        });

        it('should print payslip based on users input - different input', function() {
            payslipGenerator = new PayslipGenerator();
            var actual = payslipGenerator.print("Ryan,Chen,120000,10%,01 March – 31 March");
            assert.equal("Ryan Chen,01 March – 31 March,10000,2696,7304,1000", actual);
        });
    });
});