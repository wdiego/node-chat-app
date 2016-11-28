var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'wdiego';
        var text = 'Hey there!';
        var res = generateMessage(from, text);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, text});
    });
});