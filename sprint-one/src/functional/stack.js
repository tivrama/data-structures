var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.index = 0;

  // Implement the methods below
  someInstance.push = function(value){
    someInstance.storage[someInstance.index++] = value;
  };

  someInstance.pop = function(){
    if(someInstance.index){
      return someInstance.storage[--someInstance.index];
    }
  };

  someInstance.size = function(){
    return someInstance.index;
  };
  return someInstance;

};


// var myStack = Stack();

// myStack.push("hello");
// myStack.push('world');
// // console.log(myStack.pop());
// console.log(myStack);