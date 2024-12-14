const mean = require('./notation')
describe("mean",() => {
    test("return the result", () =>{
        expect(mean([10,15,12,7,3])).toBe(9.4);
    })
})