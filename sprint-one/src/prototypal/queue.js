var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myStack = Object.create(queueMethods);
  return myStack;
};

var queueMethods = {};

queueMethods.endIndex = 0;

queueMethods.frontIndex = 0;

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


