const assert = require('assert');
const InfoExtractor = require('../Logic/InfoExtractor');
const TaxInfo = require('../DTO/TaxInfo');

describe('InfoExtractor', function () {
   let infoExtractor;
   describe('#Get()', function () {
       it('should return obj contains employee tax info', function () {
          infoExtractor = new InfoExtractor();
          var actual = infoExtractor.get("David,Rudd,60050,9%,01 March – 31 March");
          var expected = new TaxInfo("David", "Rudd", 60050, 9, "01 March – 31 March");
          assert.deepEqual(expected, actual);
       });
   })
});