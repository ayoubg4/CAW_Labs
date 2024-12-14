const first = require('./Lab4exo2')
describe("first",() => {
    test("return the result", () =>{
        expect(first([10,15,12,7,3],2)).toEqual([10,15]);
    });
    test("return the result", () =>{
        expect(first([10,15,12,7,3],0)).toEqual([]);
    });
    test("return the result", () =>{
        expect(first([10,15,12,7,3],)).toEqual(10);
    })
})
