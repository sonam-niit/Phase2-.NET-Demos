var test=require("../app");

describe("Add functionality",()=>{

it("check x+y=z",()=>{
expect(test.add(4,5)).toEqual(9);
expect(test.add(14,-5)).toEqual(9);
});

it("check wrong value",()=>{
expect(test.add(2,3)).not.toEqual(5);
});

});