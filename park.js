var Park = function(){
  this.enclosure = [];
  this.nursery = 0;
  this.year = 0;
}



Park.prototype = {
  numDinosaurs: function(){
    var total = this.enclosure.length + this.nursery;
    return total;
  },
  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },
  removeType: function(dinosaur){
    var dinoArray = this.enclosure;
    var index = [];
    for (var i = 0; i < dinoArray.length; i++){
      if(dinosaur["type"] === dinoArray[i]["type"]){
        index.push(i);
        if(this.year > 0){
          this.nursery -= dinosaur["offspring"] * this.year;
        }
      }
    }for (var i = 0; i < index.length; i++){
      var element = index[i];
      var count = element - i;
      this.enclosure.splice(count, 1);
    }

  },
  removeBreeders: function(){
    var dinoArray = [];
    for (var i = 0; i < this.enclosure.length; i++){
      if (this.enclosure[i]["offspring"] > 2){
        dinoArray.push(this.enclosure[i]);

      }
    } return dinoArray;

  },
  yearOn: function(){
    for (var i = 0; i < this.enclosure.length; i++){
      this.nursery += this.enclosure[i]["offspring"];
      }
    this.year += 1;
  }

}
module.exports = Park;
