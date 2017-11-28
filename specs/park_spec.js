var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");


describe("park tests", function(){
  var dinosaur1;
  var dinosaur2;
  var park;


  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    park = new Park();
    })

    it("should be created empty", function(){
      assert.strictEqual(park.numDinosaurs(), 0);
    })

    it("should take a dinosaur", function(){
      park.addDinosaur(dinosaur1);
      assert.strictEqual(park.numDinosaurs(), 1);
    })

    it("should be able to remove dinosaurs of type", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur2);
      park.removeType(dinosaur1);
      assert.strictEqual(park.numDinosaurs(), 2);
    })

    it("should get all dinosaurs with an offspring count of more than 2", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur2);
      var result = [];
      result.push(dinosaur2);
      result.push(dinosaur2);
      var breeders = park.removeBreeders();
      assert.deepStrictEqual(breeders, result);
    })

    it("should return number of dinosaurs after a year starting with one", function(){
      park.addDinosaur(dinosaur1);
      park.yearOn();
      assert.strictEqual(park.numDinosaurs(), 3);
    })

    it("should return nunber of dinosaurs after 2 years, starting with one", function(){
      park.addDinosaur(dinosaur1);
      park.yearOn();
      park.yearOn();
      assert.strictEqual(park.numDinosaurs(), 5);
    })

    it("should return number of dinosaurs after 2 years, starting with two", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.yearOn();
      park.yearOn();
      assert.strictEqual(park.numDinosaurs(), 14);
    })

    it("should remove type after 2 years", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.yearOn();
      park.yearOn();
      park.removeType(dinosaur1);
      assert.strictEqual(park.numDinosaurs(), 9);
    })
})
