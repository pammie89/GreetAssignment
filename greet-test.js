const { describe } = require("yargs");

describe('test greet()', function () {
    it('should be called', function () {
        expect(greet('Elizabeth')).toBeCalled();
    });
});