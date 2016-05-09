var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // variable to keep track of end of the queue
  someInstance.index = 0;

  // variable to keep track of the front of the queue
  someInstance.runningIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    return someInstance.storage[someInstance.index++] = value;
  };

  someInstance.dequeue = function(){
    // make sure the queue has some size
    if (someInstance.size()) {
      // 1. return the first value, 2. change the running index
      return someInstance.storage[someInstance.runningIndex++];
    }

  };

  someInstance.size = function(){
    return someInstance.index - someInstance.runningIndex;
  };

  return someInstance;
};

// var myQueue = Queue();

// myQueue.enqueue("hello");
// myQueue.enqueue('world');
// console.log(myQueue.dequeue());
// console.log(myQueue);