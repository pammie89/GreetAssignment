var greet = utils.load('greet.js', 'greet');

describe('test greet()', function () {
    it('should be called', function () {
        expect(greet('Elizabeth')).toBeCalled();
    });
});