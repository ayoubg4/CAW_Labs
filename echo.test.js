const exf = require('./echo')
describe("exf",() => {
    test("returns text 5 times", () =>{
        expect(exf("text",5)).toEqual(["text","text","text","text","text"]);
    });

    test('returns an array with "js from server" repeated 10 times', () => {
        expect(exf('js from server', 10)).toEqual(['js from server', 'js from server', 'js from server', 'js from server', 'js from server', 'js from server', 'js from server', 'js from server', 'js from server', 'js from server']);
    });

})