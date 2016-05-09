var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  // _.extend(obj, queueMethods);
  obj.frontIndex = 0;
  obj.endIndex = 0;
  obj.size = queueMethods.size
  obj.enqueue = queueMethods.enqueue
  obj.dequeue = queueMethods.dequeue


  return obj;
};

queueMethods = {};


queueMethods.size = function() {
  return this.endIndex - this.frontIndex;
}

queueMethods.enqueue = function(val) {
  return this[this.endIndex++] = val;
}

queueMethods.dequeue = function() {
if(this.size() > 0) {
  return this[this.frontIndex++];
  }
}

// var myQueue = Queue();
// myQueue.enqueue('hello');
// myQueue.enqueue('world');

// console.log(myQueue.dequeue())