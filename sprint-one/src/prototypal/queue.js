var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);

  obj.endIndex = 0;
  obj.frontIndex = 0;

  return obj;
};

var queueMethods = {};


queueMethods.size = function() {
  return this.endIndex - this.frontIndex;
}

queueMethods.enqueue = function(val) {
  return this[this.endIndex++] = val;
}

queueMethods.dequeue = function() {
  if(this.size()) {
    return this[this.frontIndex++];
  }
}


// var myQueue = Queue();
// myQueue.enqueue('hello');
// myQueue.enqueue('world');

// console.log(myQueue.dequeue())