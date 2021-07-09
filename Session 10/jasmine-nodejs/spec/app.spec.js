var test= require("../app");
describe("Add Functionality",()=>{

it("calculates that x+y=z",()=>{

expect (test.add(4,5)).toEqual(9);
expect (test.add(14,-5)).toEqual(9);
});

it("calculates that x+y!=z",()=>{

expect (test.add(4,5)).not.toEqual(9);
});

});