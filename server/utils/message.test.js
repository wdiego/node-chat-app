var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'wdiego';
        var text = 'Hey there!';
        var res = generateMessage(from, text);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'wdiego';
        var lat = 1;
        var lng = 1;
        var url = 'https://www.google.com/maps?q=1,1'
        var res = generateLocationMessage(from, lat, lng);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({ from, url });
    });
});