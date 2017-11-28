var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("dinosaur tests", function(){

var dinosaur;

beforeEach(function(){
  dinosaur = new Dinosaur("Tyrannosaurus", 2);
})

  it("should have a type", function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  })

  it("should have annual offspring number", function(){
    assert.strictEqual(dinosaur.offspring, 2);
  })
})
